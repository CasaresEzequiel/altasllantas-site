import Boton from '../components/Boton';

const Subscribe = () => {
  return (
    <section
      id="contacto"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Suscribite a nuestro
        <span className="text-emerald-500"> newsletter</span>
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Tu email" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Boton label="Suscribirme" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
