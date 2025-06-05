import React from 'react';

interface Props {
  quote: {
    content: string;
    author: string;
  };
}

export default function QuoteBlock({ quote }: Props) {
  return (
    <div className="max-w-4xl mx-auto py-10 text-center">
      <blockquote className="italic text-xl text-gray-700">“{quote.content}”</blockquote>
      <p className="mt-4 text-gray-500">— {quote.author}</p>
    </div>
  );
}
