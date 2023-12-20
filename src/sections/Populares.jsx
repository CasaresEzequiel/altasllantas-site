import ProductoPopularCard from '../components/ProductoPopularCard';
import { productos } from '../constantes';

const Populares = () => {
  return (
    <section id="productos" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Lo mas <span className="text-emerald-500">vendido</span>
        </h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {productos.map((producto) => (
          <ProductoPopularCard key={producto.name} {...producto} />
        ))}
      </div>
    </section>
  );
};

export default Populares;
