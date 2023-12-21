import { servicios } from '../constantes';
import ServicioCard from '../components/ServicioCard';

const Servicios = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {servicios.map((servicio) => (
        <ServicioCard key={servicio.label} {...servicio} />
      ))}
    </section>
  );
};

export default Servicios;
