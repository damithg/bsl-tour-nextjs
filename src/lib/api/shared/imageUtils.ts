export function getOptimizedImage(image?: { publicId?: string; baseUrl?: string }, width: number = 800, height: number = 600): string {
  if (!image || !image.publicId) return '';

  return `https://res.cloudinary.com/drsjp6bqz/image/upload/w_${width},h_${height},c_fill/${image.publicId}.jpg`;
}

export function getThumbnail(image?: { publicId?: string }): string {
  if (!image?.publicId) return '';
  return `https://res.cloudinary.com/drsjp6bqz/image/upload/w_400,h_300,c_fill/${image.publicId}.jpg`;
}

export function getDefaultImage(image?: { baseUrl?: string }): string {
  return image?.baseUrl || '/placeholder.jpg';
}
