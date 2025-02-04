import AboutUs from "../component/AboutUs";
import Hero from "../component/Hero";
import Services from "../component/Services";

const Landing = () => {
  return (
    <main className=" overflow-clip">
      <Hero />
      <AboutUs />
      <Services />
    </main>
  );
};

export default Landing;
