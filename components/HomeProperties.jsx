import Link from 'next/link';
import PropertyCard from './PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { ArrowRight } from 'lucide-react';

const HomeProperties = async () => {
  await connectDB();

  // Get the 3 latest properties
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();

  return (
    <>
      <section className='px-4 py-6 bg-gray-100'>
        <div className='container m-auto'>
          <div className="flex items-center justify-between gap-2">
          <h2 className='text-2xl font-bold text-indigo-500 mb-6 text-left'>
            Recent Properties
          </h2>
          <Link
            href='/properties'
            className='flex justify-between gap-1 bg-indigo-400 hover:bg-indigo-600 p-1 px-2 rounded-md shadow text-white'
          >
            View All Properties <ArrowRight className="text-white"/>
          </Link>
          </div>
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
    </>
  );
};

export default HomeProperties;
