'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PropertySearchForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location === '' && propertyType === 'All') {
      router.push('/properties');
    } else {
      const query = `?location=${location}&propertyType=${propertyType}`;

      router.push(`/properties/search-results${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-5 mx-auto max-w-3xl w-full flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow'
    >
      <div className='w-full md:w-2/4 md:pr-2 mb-4 md:mb-0'>
        <Label htmlFor='location' className='sr-only'>
          Location
        </Label>
        <Input
          type='text'
          id='location'
          placeholder='Enter Keywords or Location'
          className='w-full px-4 py-3 '
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='w-full md:w-2/4 md:pl-2 mb-4 md:mb-0'>
        <Select
          id='property-type'
          className='w-full '
          value={propertyType}
          onValueChange={setPropertyType}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Property Type" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="Studio">Studio</SelectItem>
            <SelectItem value="Condo">Condo</SelectItem>
            <SelectItem value="House">House</SelectItem>
            <SelectItem value="Cabin Or Cottage">Cabin Or Cottage</SelectItem>
            <SelectItem value="Loft">Loft</SelectItem>
            <SelectItem value="Room">Room</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button
        type='submit'
        className='btn-primary w-full md:w-1/4 ml-2 md:pl-2 mb-4 md:mb-0'
      >
        Search
      </Button>
    </form>
  );
};

export default PropertySearchForm;
