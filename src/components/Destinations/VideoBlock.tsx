
import React from 'react';

interface Props {
  videoUrl?: string;
  thumbnailUrl?: string;
  title?: string;
}

export default function VideoBlock({ videoUrl, thumbnailUrl, title }: Props) {
  if (!videoUrl) return null;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={videoUrl}
            title={title || "Destination Video"}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
