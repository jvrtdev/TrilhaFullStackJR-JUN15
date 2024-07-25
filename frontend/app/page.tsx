import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import Projects from "@/components/Projects"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-2">
      <MaxWidthWrapper>
        <section className="flex flex-col md:flex-row">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Bem-vindo ao Projetos do{" "}
              <span className="text-blue-800">Bem!</span>
            </h1>

            <p className="mt-4 max-w-lg">
              Acreditamos no poder da comunidade. Aqui, você encontrará projetos
              que fazem a diferença na vida das pessoas ao nosso redor.
            </p>

            <p className="mt-2 max-w-lg">
              Visamos ser a principal plataforma de projetos comunitários, onde
              ideias inovadoras e ações solidárias se encontram para transformar
              vidas e fortalecer a comunidade.
            </p>

            <p className="mt-2 max-w-lg">
              Navegue pelos nossos projetos, veja como você pode se envolver e
              ajude-nos a construir um futuro melhor para todos.
            </p>
          </div>

          <Image
            src="/illustration-1.svg"
            alt="ilustrator"
            width={600}
            height={600}
          />
        </section>

        <Projects />

      </MaxWidthWrapper>
    </main>
  )
}
