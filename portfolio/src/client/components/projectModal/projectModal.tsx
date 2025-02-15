import { Project } from "../../DTO/projects";

interface ProjectModalProps {
  isModalOpen: boolean;
  currentproject: Project | null; // Índice do card atual
  closeModal: () => void;
}

export const ProjectModal = ({
  isModalOpen,
  currentproject,
  closeModal,
}: ProjectModalProps) => {
  return (
    <>
      {isModalOpen && currentproject !== null && (
        <div className="fixed z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-PPurple-medium w-full md:w-[70%] lg:w-[50%] h-[80%] rounded-2xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-transparent hover:bg-PDark rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <div className="p-4">
              {/* Exibe o título com base no índice */}
              <h1 className="text-white text-xl">{currentproject.name}</h1>
              <img src={currentproject.image} alt="image project" />
              <a href={currentproject.live} target="_blank">
                <button>View</button>
              </a>
              {/* Adicione mais detalhes, se necessário */}
              <p className="text-white mt-4">Detalhes do Card {currentproject.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
