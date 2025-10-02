export const Me = () => {
  return (
    <>
      <div className="flex justify-center md:justify-end">
        {/* Imagem para telas médias (md) ou maiores */}
        <a href="https://github.com/henriqueolivgp" target="_blank">
          <div className="relative mx-auto w-full">
            {/* Gradiente no fundo */}
            <div className="bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 xl:h-80 w-full xs:h-44 md:h-52 absolute bottom-0 rounded-t-lg"></div>
            {/* Imagem acima do gradiente */}
            <img src="me.png" alt="me" className="sm:w-[514px] xs:w-60 sm:h-auto relative z-10" />
          </div>
        </a>
      </div>
    </>
  );
};
