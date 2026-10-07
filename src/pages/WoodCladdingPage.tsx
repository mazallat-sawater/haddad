
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const WoodCladdingPage = () => {
  return (
    <ServicePageTemplate
      service={servicesById.woodCladding}
    />
  );
};

export default WoodCladdingPage;

