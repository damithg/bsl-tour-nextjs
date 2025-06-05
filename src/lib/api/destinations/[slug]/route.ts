import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

export async function GET(
  req: NextRequest, 
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const upstreamUrl = `${API_BASE_URL}/api/destinations/${slug}`;

  try {
    const response = await fetch(upstreamUrl, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store'
    });

    if (!response.ok) {
      console.error('Upstream fetch failed', response.status);
      return NextResponse.json({ error: 'Failed to fetch destination' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error('API Proxy error', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
