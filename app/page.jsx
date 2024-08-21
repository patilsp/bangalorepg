import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
// import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="mb-10 pb-10">
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      
      <HomeProperties />
      <CTA />
      <Pricing /> 
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
      
    </div>
  );
};
export default Home;
