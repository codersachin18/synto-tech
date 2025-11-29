import { Hero } from "@/components/sections/home/hero";
import { ExploreApps } from "@/components/sections/home/explore-apps";
import { WhoWeAre } from "@/components/sections/home/who-we-are";
import { HomeContact } from "@/components/sections/home/home-contact";
import type { Metadata } from 'next';
import { OurServices } from "@/components/sections/home/our-services";
import { MissionVision } from "@/components/sections/home/mission-vision";

export const metadata: Metadata = {
  title: 'Synto Tech | Innovative App and Software Solutions',
  description: 'Synto Tech builds powerful and beautiful apps, software, and web solutions to drive your business forward.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ExploreApps />
      <OurServices />
      <WhoWeAre />
      <MissionVision />
      <HomeContact />
    </>
  );
}
