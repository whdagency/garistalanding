"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
// import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null; // You can optionally render a message or UI here
}