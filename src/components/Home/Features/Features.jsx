import Container from "@/components/Shared/Container";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="">
      <Container>
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-bold w-full md:w-2/3 mx-auto mb-10">
          How to Learn at AS Programmng The Learing Flow is Structured
        </h1>
        <FeatureCard />
      </Container>
    </section>
  );
};
export default Features;
