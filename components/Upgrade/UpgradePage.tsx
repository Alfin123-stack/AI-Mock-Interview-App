import { UpgradeCTA } from "./UpgradeCTA";
import { UpgradeFAQ } from "./UpgradeFAQ";
import { UpgradeHero } from "./UpgradeHero";
import { UpgradePricing } from "./UpgradePricing";
import { UpgradeTestimonials } from "./UpgradeTestimonials";

export default function UpgradePage() {
  return (
    <>
      <UpgradeHero />
      <UpgradePricing />
      <UpgradeTestimonials />
      <UpgradeFAQ />
      <UpgradeCTA />
    </>
  );
}
