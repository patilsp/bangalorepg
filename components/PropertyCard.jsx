import Image from 'next/image';
import Link from 'next/link';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
  FaHeart
} from 'react-icons/fa';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className='border-gray-50 border-2 bg-white rounded-xl shadow-md relative'>
      <div className="relative overflow-hidden rounded-t-xl h-60">
        <Image
          src={property.images[0]}
          alt=''
          fill
          className='object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-95'
          priority={true}
        />
      </div>
      <div className='px-2 border-t mt-1'>
        <div className='absolute -top-10 px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
        </div>

        <h3 className='text-blue-500 font-bold text-left'>
          2 BHK Flat
        </h3>

        <div className='flex justify-between gap-2 md:text-center lg:text-left'>
          <h3 className='text-xl font-bold'>{property.name}</h3>
          <h1 className='relative -top-6 bg-slate-100 border border-spacing-1 border-white rounded-lg shadow px-6 py-1 text-black font-bold '>{property.type}</h1>
        </div>

        <h3 className='absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          {getRateDisplay()}
        </h3>

        <h3 className='absolute top-[10px] right-[10px] py-1 text-red-500 font-bold text-right md:text-center lg:text-right'>
          <FaHeart className="mr-1 bg-white p-2 shadow size-8 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"/>
        </h3>

        <div className='grid grid-cols-2 gap-2 md:gap-4 font-bold text-slate-700 mb-2'>
          <p className="flex items-center gap-1 col-span-1">
            <FaBed className='p-2 size-10 text-black bg-gray-100 rounded-full shadow' /> {property.beds}
            <span className='hidden md:inline'> Beds</span>
          </p>
          <p className="flex items-center gap-1 col-span-1">
            <FaBath className='p-2 size-10 text-black bg-gray-100 rounded-full shadow' /> {property.baths}
            <span className='hidden md:inline'> Baths</span>
          </p>
          <p className="flex items-center gap-1 col-span-1">
            <FaRulerCombined className='p-2 size-10 text-black bg-gray-100 rounded-full shadow' /> {property.square_feet}
            <span className='hidden md:inline'> sqft</span>
          </p>
          <p className="flex items-center gap-1 col-span-1">
            <FaMoneyBill className='p-2 size-10 text-black bg-gray-100 rounded-full shadow' /> Monthly
          </p>
        </div>
        <div className='border border-gray-100 mb-2'></div>

        <div className='flex lg:flex-row justify-between'>
          <div className='flex items-center gap-2 mb-4 lg:mb-0'>
            <FaMapMarker className='bg-gray-50 shadow rounded-lg text-orange-700 font-semibold mt-1' />
            <span className='text-orange-700 font-semibold'>
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-slate-900 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
