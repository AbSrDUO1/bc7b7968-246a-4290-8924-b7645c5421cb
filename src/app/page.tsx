"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarStyleMinimal
        logoSrc="/images/logo.svg"
        logoAlt="NovaFlow"
        buttonText="Get Started"
        onButtonClick={() => { /* Implement your start function here */ }}
        className="fixed top-0 left-0 right-0 bg-transparent z-50"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero
          title="Welcome to NovaFlow"
          subtitle="Experience the Future of SaaS"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="NovaFlow makes running your business easier than ever, allowing you to focus on what really matters."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Purchase"
          steps={[
            {title: "Step 1", description: "Visit our website.", image: "/images/placeholder1.avif", position: "left", isCenter: false},
            {title: "Step 2", description: "Create an account.", image: "/images/placeholder2.avif", position: "center", isCenter: true},
            {title: "Step 3", description: "Start your journey!", image: "/images/placeholder3.avif", position: "right", isCenter: false}
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics"
          description="Understanding how our token works in the ecosystem."
          kpiItems={[
            {value: "100M", description: "Total Supply", icon: "LucideIcon"},
            {value: "10K", description: "Liquidity", icon: "LucideIcon"}
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logowhite.svg"
          logoText="NovaFlow"
          items={[
            {label: "Privacy Policy", onClick: () => { /* Privacy Code */ }},
            {label: "Terms of Service", onClick: () => { /* Terms Code */ }}
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}