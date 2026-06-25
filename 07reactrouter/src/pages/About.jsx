import HeroSection from "../components/HeroSection";
import heroImg from "../assets/hero.webp";

function About() {
  return (
    <HeroSection
      title="We build modern React applications"
      description="Our mission is to create scalable, reusable and maintainable React applications using the latest technologies."
      image={heroImg}
      buttonText="Read More"
      reverse={true}
    />
  );
}

export default About;