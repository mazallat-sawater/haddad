
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const CladdingFacadesPage = () => {
  return (
    <ServicePageTemplate
      service={servicesById.claddingFacades}
    />
  );
};

export default CladdingFacadesPage;
