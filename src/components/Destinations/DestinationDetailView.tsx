import React from "react";
import { DestinationDetailDto } from "@/lib/api/destinations/types";
import HeroSection from "../shared/HeroSection";
import OverviewSection from "./OverviewSection";
import GallerySection from "./GallerySection";
import FeaturesSection from "./FeaturesSection";
import RelatedToursSection from "./RelatedToursSection";
import QuoteBlock from "./QuoteBlock";
import NearbyAttractionsSection from "./NearbyAttractionsSection";
import EssentialInfoSection from "./EssentialInfoSection";
import VideoBlock from "./VideoBlock";

interface Props {
  destination: DestinationDetailDto;
}

export default function DestinationDetailView({ destination }: Props) {
  return (
    <div className="flex flex-col">
      <HeroSection heroImage={destination.heroImage} name={destination.name} />
      <OverviewSection overview={destination.overview} />
      <GallerySection images={destination.galleryImages} />
      <FeaturesSection features={destination.features} />
      <RelatedToursSection tours={destination.relatedTours} />
      <QuoteBlock quote={destination.quoteBlock} />
      <NearbyAttractionsSection attractions={destination.nearbyAttractions} />
      <EssentialInfoSection info={destination.essentialInfo} />
      {destination.videoBlock && <VideoBlock video={destination.videoBlock} />}
    </div>
  );
}
