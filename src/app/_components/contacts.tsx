import { InstagramLogoIcon } from "@phosphor-icons/react";
import { WhatsappLogo, MailboxIcon } from "@phosphor-icons/react/dist/ssr";
import { Instagram, MailIcon } from "lucide-react";

export function Contacts() {
  return (
    <section className="bg-[#ffcb04] py-16 text-black">
      <div className="container  px-4 mx-auto space-y-10">
        <h2 className="font-bold text-4xl text-center ">
          Gostou do nosso portifólio?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
          <div className="space-y-6 text-black max-w-3xl mt-6">
            <p className="text-2xl leading-relaxed text-justify text-black">
              Quer nos conhecer um pouco mais? Entre em contato conosco. Nossa
              equipe é apaixonada por carros e está pronta para oferecer
              soluções personalizadas que valorizam cada detalhe do seu
              automóvel. Venha fazer parte dessa experiência incrível!
            </p>
          </div>

          <div className="w-full flex flex-col items-center justify-center space-y-4 mt-6">
            <a
              href="https://wa.me/5548988170767"
              target="_blank"
              className="w-full max-w-sm bg-green-700 text-white font-semibold rounded-full px-6 py-3 transition hover:bg-white hover:text-green-700 flex items-center justify-center gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Chamar no Whatsapp
            </a>
            <a
              href="mailto:guilherme@estuquiinstalacoes.com"
              target="_blank"
              className="w-full max-w-sm pr-14 bg-red-800 text-white font-semibold rounded-full px-6 py-3 transition hover:bg-white hover:text-red-800 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Chamar no Email
            </a>
            <a
              href="https://www.instagram.com/estuqui_instalacoesautomotivas/"
              target="_blank"
              className="w-full max-w-sm bg-[#ab20dd] text-white font-semibold rounded-full px-6 py-3 transition hover:bg-white hover:text-[#ab20dd] flex items-center justify-center  gap-2"
            >
              <Instagram className="w-5 h-5" />
              Chamar no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
