import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const upstreamUrl = `${API_BASE_URL}/api/experiences/${slug}`;

  try {
    const response = await fetch(upstreamUrl, { cache: 'no-store' });
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch experience' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}