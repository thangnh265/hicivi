'use client';

import { useState } from 'react';
import { Button } from '@repo/ui/button';
import { Input } from '@repo/ui/input';
import { Label } from '@repo/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/card';
import { Alert, AlertDescription } from '@repo/ui/alert';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const { user, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if already logged in
  if (user) {
    return user.role === 'super_admin' ? (
      <Link href='/super-admin' replace />
    ) : (
      <Link href={`/${user.tenantId}/dashboard`} replace />
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
      <Card className='w-full max-w-md'>
        <CardHeader className='text-center'>
          <div className='mx-auto mb-4 h-12 w-18 bg-primary rounded-lg flex items-center justify-center'>
            <span className='text-primary-foreground font-bold text-xl'>
              Hicivi
            </span>
          </div>
          <CardTitle className='text-2xl'>Welcome to Hicivi</CardTitle>
          <CardDescription>
            Sign in to your HR management dashboard
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className='space-y-4'>
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className='text-sm text-muted-foreground'>
              <p>Demo accounts:</p>
              <ul className='mt-1 space-y-1'>
                <li>• admin@abc-corp.com / password (Tenant Admin)</li>
                <li>• hr@abc-corp.com / password (HR Editor)</li>
                <li>• agency@talent-plus.com / password (Agency)</li>
                <li>• super@hicivi.com / password (Super Admin)</li>
              </ul>
            </div>
          </CardContent>

          <CardFooter className='flex flex-col space-y-4'>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>

            <div className='text-center text-sm text-muted-foreground'>
              {"Don't have an account? "}
              <a href='/signup' className='text-primary hover:underline'>
                Sign up
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
