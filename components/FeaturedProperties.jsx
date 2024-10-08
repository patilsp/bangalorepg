import FeaturedPropertyCard from '@/components/FeaturedPropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
// import PropertyTabs from '@/components/PropertyTabs';


const FeaturedProperties = async () => {
  await connectDB();

  const properties = await Property.find({
    is_featured: true,
  }).lean();

  return properties.length > 0 ? (
    <section className="px-4 pt-6 pb-10">
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-sm md:text-2xl  font-bold text-blue-500 mb-6 text-center'>
          Featured Properties
        </h2>
        <div>
        {/* <PropertyTabs /> */}
     
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {properties.map((property) => (
            <FeaturedPropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};
export default FeaturedProperties;
