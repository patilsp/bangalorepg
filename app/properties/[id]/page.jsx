import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import PropertyImages from '@/components/PropertyImages';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';
import { convertToSerializeableObject } from '@/utils/convertToObject';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializeableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Property Not Found
      </h1>
    );
  }

  return (
    <>
    <section>
        <div className='container m-auto py-1 px-6'>
          <Link
            href='/properties'
            className='w-40 py-2 px-1 rounded-lg  text-blue-500 hover:text-white hover:bg-black  flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Properties
          </Link>
        </div>
      </section>
      <Carousel className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {property.images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center items-center m-2">
              <Card className="w-full ">
                <CardContent className="p-0">
                <img src={image} alt={`Property Image ${index + 1}`} className="w-full p-1 rounded-lg h-auto object-cover" />

                  {/* <PropertyImages className="w-full h-auto object-cover" images={property.images} /> */}

                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      
      <section className='bg-blue-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <PropertyDetails property={property} />

            {/* Sidebar */}
            <aside className='space-y-4'>
              <div className="space-y-2 flex flex-col md:flex-row items-center justify-center gap-2">
                <BookmarkButton property={property} />
                <PropertyContactForm property={property} />
              </div>
              <ShareButtons property={property} />
              
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />

    </>
  );
};

export default PropertyPage;
