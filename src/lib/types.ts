export interface Currency {
  code: string;
  symbol: string;
  flag: string;
}

export interface Image {
  url: string;
}

export interface Card {
  id: number;
  Header: string;
  SubHeader?: string;
  Image: Image;
}

export interface Location {
  Address?: string;
  Postcode?: string;
  Region?: string;
  Latitude?: number;
  Longitude?: number;
}

export interface Seo {
  MetaTitle?: string;
  MetaDescription?: string;
}

export interface ExperienceDto {
  id: number;
  Name: string;
  Slug: string;
  ShortSummary?: string;
  Duration?: string;
  Price?: string;
  Difficulty?: string;
  Featured?: boolean;
  CreatedAt?: string;
  UpdatedAt?: string;
  Card?: Card;
  GalleryImages?: Image[];
  Highlights?: string[];
  Inclusions?: string[];
  WhatToBring?: string[];
  Location?: Location;
  Seo?: Seo;
}
