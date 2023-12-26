

function Home() {
  return (
    <>

      {/* Adiciona imagem ao fundo */}
      <img
        src="/Background.jpg"
        alt="imagem de fundo"
        className="absolute top-0 z-[-2] h-screen w-full bg-cover filter brightness-70 blur-5"
      />

      {/* Adicionando uma camada escura */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]"></div>

      <div className="container mx-auto ">
        <div className="content flex items-center justify-between">

          <div className="flex-1 bg-transparent text-6xl ">
            <p className="mb-2  tracking-tight text-white">
              Hi,
            </p>
            <p className="mb-2 tracking-tight text-white">
              I’m Henrique oliveira,
            </p>
            <p className=" tracking-tight text-white">
              I’m a Developer.
            </p>
            <p className=" text-2xl text-white">
              Web Developer and Mobile Developer
            </p>
            <button type="button" className="text-black text-lg bg-button-contact hover:bg-gray-400 font-medium rounded-lg px-5 py-2.5">Contact me</button>
          </div>
          <div className="flex">
            <img src="/src/client/assets/image.png" alt="my-photo" className="h-96" />
          </div>

        </div>
        <div >

        </div>
      </div>
    </>
  );
}

export default Home;
