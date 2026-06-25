import HeroSection from "../components/HeroSection";
import heroImg from "../assets/hero.webp";

function Home() {
  return (
    <HeroSection
      title="React development is carried out by passionate developers"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem."
      image={heroImg}
      buttonText="Get Started"
    />
  );
}

export default Home;