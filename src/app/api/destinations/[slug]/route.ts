import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;
  const upstreamUrl = `${API_BASE_URL}/api/destinations/${slug}`;

  try {
    const response = await fetch(upstreamUrl, { cache: 'no-store' });
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch destination' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
