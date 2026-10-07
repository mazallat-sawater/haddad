
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { servicesById } from "@/config/services";

const CarCanopiesPage = () => {
  return (
    <ServicePageTemplate
      service={servicesById.carCanopies}
    />
  );
};

export default CarCanopiesPage;
