import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = "https://bsl-tours-api-yqmyn.ondigitalocean.app";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const upstreamUrl = `${API_BASE_URL}/api/tours/${slug}`;

  try {
    const response = await fetch(upstreamUrl, { cache: 'no-store' });
    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch tour' }, { status: response.status });
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
