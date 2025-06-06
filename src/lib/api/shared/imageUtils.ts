// src/lib/api/shared/imageUtils.ts

const CLOUDINARY_BASE = 'https://res.cloudinary.com/drsjp6bqz/image/upload';

export function buildCloudinaryUrl(publicId: string, width: number, height: number): string {
  return `${CLOUDINARY_BASE}/w_${width},h_${height},c_fill/${publicId}.jpg`;
}

export function getOptimizedImage(image?: { publicId?: string }, width = 800, height = 600): string {
  if (!image?.publicId) return '';
  return buildCloudinaryUrl(image.publicId, width, height);
}

export function getThumbnail(image?: { publicId?: string }): string {
  return getOptimizedImage(image, 400, 300);
}

export function getDefaultImage(image?: { baseUrl?: string }): string {
  return image?.baseUrl || '/placeholder.jpg';
}
