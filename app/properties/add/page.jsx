import PropertyAddForm from '@/components/PropertyAddForm';

const PropertyAddPage = () => {
  return (
    <section className='bg-green-200'>
      <div className='m-auto max-w-2xl py-0 md:py-10'>
        <div className='bg-white px-2 md:px-6 py-6 md:py-8 mb-4 shadow-md rounded-md border m-0 md:m-4'>
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};
export default PropertyAddPage;
