import Link from 'next/link';
import PropertyCard from './PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const HomeProperties = async () => {
  await connectDB();

  // Get the 3 latest properties
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
    <div className="m-2">
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-black mb-6 text-center'>
            Recent Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

        <section className='pb-10 m-auto max-w-lg my-10 px-6'>
          <Link
            href='/properties'
            className='block  bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
          >
            View All Properties
          </Link>
        </section>
      </div>
    </>
  );
};

export default HomeProperties;
