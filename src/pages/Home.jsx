import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import EliteEdge from '../components/EliteEdge';
import Admission from '../components/Admission';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Faculty from '../components/Faculty';
import PreviousResults from '../components/PreviousResults';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <Faculty />
      <EliteEdge />
      <PreviousResults />
      <Admission />
      <Achievements />
      <Testimonials />
    </main>
  );
};

export default Home;
