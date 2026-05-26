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
    <main>
      <HeroSection />
      <AwardBadgesSection />
      <section
        aria-label="ApplicAIton"
        className="min-h-[500px] [&_.chat-root[data-theme=dark-tokyo]]:[--chat-hero-min-height-desktop:500px] [&_.chat-root[data-theme=dark-tokyo]]:[--chat-hero-min-height-mobile:500px]"
      >
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
