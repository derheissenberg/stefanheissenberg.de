import { HeroSection } from "@/components/sections/HeroSection";
import { AwardBadgesSection } from "@/components/sections/AwardBadgesSection";
import { KeyCreatorIdentifiersSection } from "@/components/sections/KeyCreatorIdentifiersSection";
import { DesignWitAttitudeSection } from "@/components/sections/DesignWitAttitudeSection";
import { DeepPashionSection } from "@/components/sections/DeepPashionSection";
import { CustomersSection } from "@/components/sections/CustomersSection";
import { AlohaSection } from "@/components/sections/AlohaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AwardBadgesSection />
      <KeyCreatorIdentifiersSection />
      <DesignWitAttitudeSection />
      <DeepPashionSection />
      <CustomersSection />
      <AlohaSection />
    </main>
  );
}
