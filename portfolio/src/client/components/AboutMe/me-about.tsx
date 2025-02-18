export const MeAbout = () => {
  return (
    <>
      <div className="flex justify-center md:justify-end">
        {/* Imagem para telas médias (md) ou maiores */}
        <a href="https://github.com/henriqueolivgp" target="_blank">
          <div className="relative">
            {/* Gradiente no fundo */}
            <div className="bg-gradient-to-b from-blue-900 via-blue-900 to-slate-950 h-[73%] absolute bottom-0 w-full rounded-t-lg"></div>
            {/* Imagem acima do gradiente */}
            <img src="me-about.png" alt="me" className="w-[514px] h-auto relative z-10" />
          </div>
        </a>
      </div>
    </>
  );
};
