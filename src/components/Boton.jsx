const Boton = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-emerald-500 rounded-full text-white border-emerald-500">
      {label}
      <img
        src={iconURL}
        alt="Right arrow icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Boton;
