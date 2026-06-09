import { NextResponse } from 'next/server';
import { fetchPRInsights } from '@/services/github/pr-insights';
import { githubParamsSchema } from '@/lib/validations';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const validation = githubParamsSchema.safeParse({
    username: searchParams.get('username'),
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.issues[0]?.message || 'Invalid GitHub username' },
      { status: 400 }
    );
  }

  const username = validation.data.username;

  try {
    const data = await fetchPRInsights(username);
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('Error fetching PR insights:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch PR insights' },
      { status: 500 }
    );
  }
}
