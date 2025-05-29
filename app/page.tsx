import HowWorks from "./_components/about";
import { Footer } from "./_components/footer";
import HeroSection from "./_components/hero";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HowWorks/>
      <Footer/>
    </div>
  );
}
