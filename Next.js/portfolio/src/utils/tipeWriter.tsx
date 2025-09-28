
import { ComponentProps, HtmlHTMLAttributes } from "react";
import Typewriter from "typewriter-effect";

interface TypewriterTextProps extends ComponentProps<'div'> {
  text: string; // Modificado para uma única string
  divProps?: HtmlHTMLAttributes<HTMLDivElement>;
}

export function TypewriterText({ text, divProps }: TypewriterTextProps) {
  return (
    <div {...divProps}>
      <Typewriter

        onInit={(typewriter) => {
          typewriter
            .typeString(`<span class="text-blue-500">${text}</span>`) // Use a string diretamente
            .pauseFor(5000)  // Pausa antes de apagar
            .deleteAll()      // Apaga o texto
            .start();         // Inicia o efeito de digitação
        }}
        options={{
          autoStart: true,
          loop: true,        // Continua a repetir
        }}
      />
    </div>
  );
}
