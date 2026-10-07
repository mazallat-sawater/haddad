
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const BuildingFencingPage = () => {
  return (
    <ServicePageTemplate
      service={servicesById.buildingFencing}
    />
  );
};

export default BuildingFencingPage;

