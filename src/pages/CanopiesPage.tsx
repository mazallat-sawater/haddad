
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const CanopiesPage = () => {
  return (
    <ServicePageTemplate
      service={servicesById.canopies}
    />
  );
};

export default CanopiesPage;

