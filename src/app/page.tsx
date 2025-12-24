import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { HelpYou } from "./_components/helpYou";
import Results from "./_components/results";
import HowWorks from "./_components/howWorks";
import { Footer } from "./_components/footer";
import { ScrollTopButton } from "./_components/scrollTop";
import {SubHeadline} from "./_components/subHeadline";
import { Approach } from "./_components/approach";
import WhoIs from "./_components/whoIs";
import CTAFinal from "./_components/CTA";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <SubHeadline />
      <About />
      <HelpYou />
      <Approach />
      <WhoIs />
      <HowWorks />
      <Results />
      <CTAFinal />
      {/* <Services />
      <Products />
      <Contacts />
      <Footer /> */}
      <ScrollTopButton />
    </main>
  );
}
