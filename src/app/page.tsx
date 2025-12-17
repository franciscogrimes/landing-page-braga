import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { HelpYou } from "./_components/helpYou";
import { Services } from "./_components/services";
import { Products } from "./_components/products";
import { Contacts } from "./_components/contacts";
import { Partners } from "./_components/partners";
import { Footer } from "./_components/footer";
import { ScrollTopButton } from "./_components/scrollTop";
import {SubHeadline} from "./_components/subHeadline";
import { Approach } from "./_components/approach";

export default function Home() {
  return (
    <main>
      <Hero />
      <SubHeadline />
      <About />
      <HelpYou />
      <Approach />
      {/* <Services />
      <Products />
      <Contacts />
      <Footer /> */}
      <ScrollTopButton />
    </main>
  );
}
