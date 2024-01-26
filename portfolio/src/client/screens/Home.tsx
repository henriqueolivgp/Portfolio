

function Home() {
  return (
    <>
      {/* Adiciona imagem ao fundo */}
      <div className="">
        <img
          src="/Background.jpg"
          alt="imagem de fundo"
          className="absolute w-full top-0 z-[-2] h-screen"
        />

        {/* Adicionando uma camada escura */}
        <div className="absolute top-0 left-0 h-screen w-full bg-black opacity-60 z-[-1]"></div>

        <div className="container mx-auto">                      
          <div className="content flex flex-col justify-center " style={{ minHeight: 'calc(100vh - 5rem)' }}>
            <div className="flex items-center justify-between ">
              <div className="bg-transparent text-6xl ">
                <p className="mb-2 tracking-tight text-white">
                  Hi,
                </p>
                <p className="mb-2 tracking-tight text-white">
                  I’m Henrique oliveira,
                </p>
                <p className="tracking-tight text-white">
                  I’m a Developer.
                </p>
                <p className="text-2xl text-white">
                  Web Developer and Mobile Developer
                </p>
                <button type="button" className="text-black text-lg bg-button-contact hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5 mt-4">Contact me</button>
              </div>
              <div className="flex">
                <img src="/image.png" alt="my-photo" className="h-96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
