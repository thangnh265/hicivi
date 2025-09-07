"use client";

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
import { RadioGroup, RadioGroupItem } from '@repo/ui/radio-group';
import { Alert, AlertDescription } from '@repo/ui/alert';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function SignupPage() {
  const { user, signup } = useAuth();
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    mode: 'internal' as 'internal' | 'agency',
  });
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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const success = await signup(formData);
      if (!success) {
        setError('Failed to create account. Please try again.');
      }
    } catch (err) {
      setError('An error occurred during signup');
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
          <CardTitle className='text-2xl'>Create Your Account</CardTitle>
          <CardDescription>
            Start managing CVs with AI-powered screening
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSignup}>
          <CardContent className='space-y-4'>
            {error && (
              <Alert variant='destructive'>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className='space-y-2'>
              <Label htmlFor='companyName'>Company Name</Label>
              <Input
                id='companyName'
                placeholder='Enter your company name'
                value={formData.companyName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    companyName: e.target.value,
                  }))
                }
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='Enter your work email'
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
              />
            </div>

            <div className='space-y-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Create a password'
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, password: e.target.value }))
                }
                required
              />
            </div>

            <div className='space-y-3'>
              <Label>Organization Type</Label>
              <RadioGroup
                value={formData.mode}
                onValueChange={(value: 'internal' | 'agency') =>
                  setFormData((prev) => ({ ...prev, mode: value }))
                }
              >
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='internal' id='internal' />
                  <Label htmlFor='internal'>
                    Internal HR Team
                    <span className='block text-sm text-muted-foreground'>
                      In-house recruiting for your company
                    </span>
                  </Label>
                </div>
                <div className='flex items-center space-x-2'>
                  <RadioGroupItem value='agency' id='agency' />
                  <Label htmlFor='agency'>
                    Recruitment Agency
                    <span className='block text-sm text-muted-foreground'>
                      Managing clients and candidates
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>

          <CardFooter className='flex flex-col space-y-4'>
            <Button type='submit' className='w-full' disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>

            <div className='text-center text-sm text-muted-foreground'>
              Already have an account?{' '}
              <a href='/login' className='text-primary hover:underline'>
                Sign in
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
