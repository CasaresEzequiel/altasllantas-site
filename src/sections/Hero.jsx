import { useState } from 'react';

import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Boton from '../components/Boton';
import ZapatillaCard from '../components/ZapatillaCard';
import { estadisticas, shoes } from '../constantes';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="inicio"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-emerald-500">
          Nueva colección 2024
        </p>
        <h1 className="mt-10 font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Nuevos modelos
          </span>
          <br />
          Zapatillas
          <span className="text-emerald-500 inline-block mt-3"> Mike</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Todo lo que buscas en calidad, diseño, precio y variedad.
        </p>
        <Boton label="Comprar!" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {estadisticas.map((estadistica) => (
            <div key={estadistica.label}>
              <p className="text-4xl font-palanquin font-bold">
                {estadistica.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {estadistica.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Colleción de zapatillas"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((zapa) => (
            <div key={zapa}>
              <ZapatillaCard
                imgURL={zapa}
                changeBigShoeImage={(zapa) => setBigShoeImg(zapa)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
