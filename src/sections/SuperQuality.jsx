import Boton from '../components/Boton';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section
      id="nosotros"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Mucho mas que
          <br />
          <span className="text-emerald-500 inline-block mt-3">Zapatillas</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          No importa el momento del día ni la situación. El calzado ideal para
          acompañarte en cualquier ocasión.
        </p>
        <div className="mt-11">
          <Boton label="Detalles" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
