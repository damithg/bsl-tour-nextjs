//Raw data types from API
export interface RawDestinationCard {
  id: number;
  slug: string;
  card: {
    header?: string;
    body?: string;
    tags?: string[];
    image?: {
      publicId?: string;
      alt?: string;
      caption?: string;
      orientation?: string;
      baseUrl?: string;
      small?: string;
      medium?: string;
      large?: string;
    };
  };
}

// Dto for frontend consumption
export interface DestinationCardDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
}


export interface RawDestination {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  excerpt: string;
  shortDescription: string;
  featured: boolean;
  region: string;
  address: string;
  latitude: string;
  longitude: string;
  recommendedDuration: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;

  overview: {
    id: number;
    title: string;
    fullDescription: string;
    image: RawImage;
  };

  heroImage: RawImage;

  card: {
    image: RawImage;
    header: string;
    heading: string;
    body: string;
    tags: string[];
  };

  featuresSection: {
    id: number;
    title: string;
    items: RawFeatureItem[];
  };

  subSections: RawSubSection[];

  galleryImages: RawImage[];

  quoteBlock: {
    id: number;
    content: string;
    author: string;
  };

  videoBlock?: {
    id: number;
    title: string;
    videoUrl: string;
  };

  relatedTours: RawRelatedTour[];

  nearbyAttractions: RawNearbyAttraction[];

  essentialInfo: {
    id: number;
    bestTimeToVisit: string;
    nearestAirport: string;
    openingHours: Record<string, string>;
    transportOptions: string[];
    entranceFees: {
      currency: {
        local: string;
        primary: string;
      };
      localAdults: string;
      foreignAdults: string;
      localChildren: string;
      foreignChildren: string;
    };
    accessibility: string[];
    travelTips: string[];
    highlights: string[];
  };

  faqs?: {
    id: number;
    question: string;
    answer: string;
  }[];
}

export interface RawImage {
  publicId: string;
  alt: string;
  caption: string;
  orientation?: string;
  baseUrl: string;
  small: string;
  medium: string;
  large: string;
}

export interface RawFeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: RawImage;
}

export interface RawSubSection {
  id: number;
  title: string;
  fullDescription: string;
  image: RawImage;
}

export interface RawRelatedTour {
  id: number;
  name: string;
  slug: string;
  summary: string;
  duration: string;
  startingFrom: number;
  currency: string;
  link: string;
  image: RawImage;
}

export interface RawNearbyAttraction {
  id: number;
  name: string;
  slug: string;
  description: string;
  distance: string;
  link: string;
  image: RawImage;
}

// Dto for frontend consumption
export interface DestinationDetailDto {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  excerpt: string;
  featured: boolean;
  region: string;
  address: string;
  latitude: number;
  longitude: number;
  recommendedDuration: string;
  overview: {
    title: string;
    fullDescription: string;
    image: ImageAsset;
  };
  heroImage: ImageAsset;
  card: {
    header: string;
    body: string;
    tags: string[];
    image: ImageAsset;
  };
  features: FeatureItem[];
  subSections: SubSectionItem[];
  galleryImages: ImageAsset[];
  quoteBlock: {
    content: string;
    author: string;
  };
  videoBlock?: {
    title: string;
    videoUrl: string;
  };
  relatedTours: RelatedTourDto[];
  nearbyAttractions: NearbyAttractionDto[];
  essentialInfo: EssentialInfoDto;
}

export interface ImageAsset {
  publicId: string;
  alt: string;
  caption: string;
  orientation?: string;
  baseUrl: string;
  small: string;
  medium: string;
  large: string;
}

export interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: ImageAsset;
}

export interface SubSectionItem {
  id: number;
  title: string;
  fullDescription: string;
  image: ImageAsset;
}

export interface RelatedTourDto {
  id: number;
  name: string;
  slug: string;
  summary: string;
  duration: string;
  startingFrom: number;
  currency: string;
  link: string;
  image: ImageAsset;
}

export interface NearbyAttractionDto {
  id: number;
  name: string;
  slug: string;
  description: string;
  distance: string;
  link: string;
  image: ImageAsset;
}

export interface EssentialInfoDto {
  bestTimeToVisit: string;
  nearestAirport: string;
  openingHours: Record<string, string>;
  transportOptions: string[];
  entranceFees: {
    currency: {
      local: string;
      primary: string;
    };
    localAdults: string;
    foreignAdults: string;
    localChildren: string;
    foreignChildren: string;
  };
  accessibility: string[];
  travelTips: string[];
  highlights: string[];
}