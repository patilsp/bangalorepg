import InfoBox from './InfoBox';
import Banner from '@/assets/images/banner.jpg';

const InfoBoxes = () => {
  return (
    <section
      className="g-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${Banner})`, 
      }}
    >

      <div className="mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
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
