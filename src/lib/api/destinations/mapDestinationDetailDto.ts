import { RawDestination, DestinationDetailDto, ImageAsset } from './types';

function mapImage(image: any): ImageAsset {
  if (!image) return {
    publicId: '',
    alt: '',
    caption: '',
    baseUrl: '',
    small: '',
    medium: '',
    large: ''
  };

  return {
    publicId: image.publicId,
    alt: image.alt,
    caption: image.caption,
    orientation: image.orientation,
    baseUrl: image.baseUrl,
    small: image.small,
    medium: image.medium,
    large: image.large,
  };
}

export function mapDestinationDetailDto(raw: RawDestination): DestinationDetailDto {
  return {
    id: raw.id,
    slug: raw.slug,
    name: raw.name,
    shortDescription: raw.shortDescription,
    excerpt: raw.excerpt,
    featured: raw.featured,
    region: raw.region,
    address: raw.address,
    latitude: parseFloat(raw.latitude),
    longitude: parseFloat(raw.longitude),
    recommendedDuration: raw.recommendedDuration,

    overview: {
      title: raw.overview?.title,
      fullDescription: raw.overview?.fullDescription,
      image: mapImage(raw.overview?.image),
    },

    heroImage: mapImage(raw.heroImage),

    card: {
      header: raw.card?.header,
      body: raw.card?.body,
      tags: raw.card?.tags ?? [],
      image: mapImage(raw.card?.image),
    },

    features: raw.featuresSection?.items?.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      icon: item.icon,
      image: mapImage(item.image),
    })) ?? [],

    subSections: raw.subSections?.map(sub => ({
      id: sub.id,
      title: sub.title,
      fullDescription: sub.fullDescription,
      image: mapImage(sub.image),
    })) ?? [],

    galleryImages: raw.galleryImages?.map(mapImage) ?? [],

    quoteBlock: {
      content: raw.quoteBlock?.content,
      author: raw.quoteBlock?.author,
    },

    videoBlock: raw.videoBlock ? {
      title: raw.videoBlock.title,
      videoUrl: raw.videoBlock.videoUrl,
    } : undefined,

    relatedTours: raw.relatedTours?.map(tour => ({
      id: tour.id,
      name: tour.name,
      slug: tour.slug,
      summary: tour.summary,
      duration: tour.duration,
      startingFrom: tour.startingFrom,
      currency: tour.currency,
      link: tour.link,
      image: mapImage(tour.image),
    })) ?? [],

    nearbyAttractions: raw.nearbyAttractions?.map(attraction => ({
      id: attraction.id,
      name: attraction.name,
      slug: attraction.slug,
      description: attraction.description,
      distance: attraction.distance,
      link: attraction.link,
      image: mapImage(attraction.image),
    })) ?? [],

    essentialInfo: {
      bestTimeToVisit: raw.essentialInfo?.bestTimeToVisit,
      nearestAirport: raw.essentialInfo?.nearestAirport,
      openingHours: raw.essentialInfo?.openingHours ?? {},
      transportOptions: raw.essentialInfo?.transportOptions ?? [],
      entranceFees: raw.essentialInfo?.entranceFees,
      accessibility: raw.essentialInfo?.accessibility ?? [],
      travelTips: raw.essentialInfo?.travelTips ?? [],
      highlights: raw.essentialInfo?.highlights ?? [],
    }
  };
}
