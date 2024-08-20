"use client";

import { motion } from 'framer-motion';
import PropertySearchForm from './PropertySearchForm';

const Hero = () => {
  return (
    <motion.section
      className='relative min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(/images/home.jpg)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex flex-col items-center justify-center h-full'>
       
        <div className='absolute bottom-40 md:bottom-24  w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
              Find The Perfect Rental
            </h1>
            <p className='my-4 text-xl text-slate-200'>
              Discover the perfect property that suits your needs.
            </p>
          </div>

          <motion.div
            className='w-full m-auto text-center flex justify-center'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PropertySearchForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
