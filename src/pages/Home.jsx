import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import EliteEdge from '../components/EliteEdge';
import Admission from '../components/Admission';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <EliteEdge />
      <Programs />
      <Admission />
      <Testimonials />
      <Achievements />
    </main>
  );
};

export default Home;
