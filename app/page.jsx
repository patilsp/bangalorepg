import Hero from '../components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedProperties';
// import Pricing from '@/components/Pricing';

const Home = () => {
  return (
    <div className="mb-10 pb-10">
      <Hero />
     
      <FeaturedProperties />
      
      <HomeProperties />
      <InfoBoxes />
      {/* <Pricing /> */}
      
    </div>
  );
};
export default Home;
