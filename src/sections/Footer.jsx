import { mikeLogo } from '../assets/images';
import { socialMedia } from '../constantes';

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={mikeLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-black sm:max-w-sm">
            Encontrá nuestras tiendas oficiales cerca de donde estés.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-black rounded-full"
                key={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  className="bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-black mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          {new Date().getFullYear()} &copy; Todos los derechos reservados
        </div>
        <div className="font-montserrat">
          Made with &#9825; by &nbsp;
          <a href="https://ecasares.com.ar/" target="_blank" rel="noreferrer">
            Ezequiel Cásares
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
