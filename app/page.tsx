import type { CSSProperties } from "react";
import { Chat } from "@/components/chat/Chat";
import { HeroSection } from "@/components/sections/HeroSection";
import { AwardBadgesSection } from "@/components/sections/AwardBadgesSection";
import { KeyCreatorIdentifiersSection } from "@/components/sections/KeyCreatorIdentifiersSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { DeepPashionSection } from "@/components/sections/DeepPashionSection";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { AlohaSection } from "@/components/sections/AlohaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main
      style={{
        "--chat-hero-min-height-desktop": "500px",
      } as CSSProperties}
    >
      <HeroSection />
      <AwardBadgesSection />
      <section aria-label="ApplicAIton" className="min-h-[500px]">
        <Chat theme="dark-tokyo" />
      </section>
      <KeyCreatorIdentifiersSection />
      <PrinciplesSection />
      <DeepPashionSection />
      <CustomersSection />
      <AlohaSection />
      <Footer />
    </main>
  );
}
