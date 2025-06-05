import React from 'react';

interface Props {
  video: {
    title: string;
    videoUrl: string;
  };
}

export default function VideoBlock({ video }: Props) {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-4">{video.title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe src={video.videoUrl} title={video.title} allowFullScreen className="w-full h-full rounded-lg" />
      </div>
    </div>
  );
}
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
