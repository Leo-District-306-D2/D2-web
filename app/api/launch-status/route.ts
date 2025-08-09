import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for launch status (in production, use database)
let hasLaunched = false;
let firstUserSeen = false;

export async function GET() {
  return NextResponse.json({
    hasLaunched,
    firstUserSeen
  });
}

export async function POST(request: NextRequest) {
  const { action } = await request.json();
  
  if (action === 'markFirstUser') {
    firstUserSeen = true;
  } else if (action === 'markLaunched') {
    hasLaunched = true;
  } else if (action === 'reset') {
    hasLaunched = false;
    firstUserSeen = false;
  }
  
  return NextResponse.json({ success: true });
}
