import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect(new URL('/favicon.svg', 'http://localhost:3000'));
} 