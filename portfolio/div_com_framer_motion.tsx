        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((src, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg w-1/2 md:w-1/4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  className="h-auto w-full rounded-lg"
                  src={src}
                  alt="Gallery Image"
                />

                {/* Overlay */}
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={
                    isHovered ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 text-white p-4 flex flex-col justify-center items-center text-center"
                >
                  <h3 className="text-lg font-semibold">Título da Imagem</h3>
                  <p className="text-sm">Descrição breve da imagem</p>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                      Ver Mais
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm">
                      Detalhes
                    </button>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>