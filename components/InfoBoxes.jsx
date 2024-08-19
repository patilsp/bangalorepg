import InfoBox from './InfoBox';
import Banner from '@/assets/images/banner.jpg';

const InfoBoxes = () => {
  return (
    <section
      className="py-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Banner})`, 
      }}
    >

      <div className="container max-w-6xl mx-auto text-white px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-orange-400"
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-slate-800',
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-green-400"
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-slate-800',
            }}
          >
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
