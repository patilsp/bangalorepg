'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { Button }  from "@/components/ui/button";

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  return (
    <motion.div
      className={`h-full ${props.popular ? 'dark' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div class="w-full h-full  p-6 bg-indigo-500 text-white shadow-lg rounded-lg">
      {/* <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5"> */}
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5 ">
          <div className="flex justify-between gap-2">
            <div className="text-white text-xl dark:text-slate-200 font-semibold mb-1">
              {props.planName}
            </div>
            <div className="inline-flex items-baseline mb-2">
              <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                ₹
              </span>
              <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                {props.yearly ? props.price.yearly : props.price.monthly}
              </span>
              <span className="text-red-400 font-bold">/mo</span>
            </div>
          </div>
          <div className="text-sm text-white mb-5">{props.planDescription}</div>
         
        </div>
        <div className="text-white font-bold dark:text-slate-200 mb-3">
          Features:
        </div>
        <ul className="text-gray-50 dark:text-white text-sm space-y-4 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center ">
                <svg
                  className="bg-gray-50 text-white mr-3 size-6 p-2 shadow-lg rounded-full"
                  viewBox="0 0 12 12"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
        <Button
            className="w-full mt-4"
            href="#0"
          >
            Book Now
          </Button>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div>
      <div className="flex flex-col justify-center container m-auto mb-8 my-10 lg:mb-16">

      <div className="my-4">
        <h1 className="font-bold text-center text-2xl"> Pricing </h1>

        </div>

        <div className="relative w-[300px] flex justify-center m-auto p-1 gap-4 bg-green-400 dark:bg-slate-900 rounded-full">
          <span className="absolute inset-0 m-1 pointer-events-none " aria-hidden="true">
            <span
              className={` bg-indigo-500 w-full m-auto rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                isAnnual ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? 'text-white bg-green-500' : 'text-slate-500'
            }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Yearly <span className={`${isAnnual ? 'text-white' : 'text-slate-400  dark:text-slate-500'}`}></span>
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8  rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? 'text-slate-500 dark:text-slate-400 ' : 'text-white bg-green-500'
            }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="w-full mx-auto grid gap-6 m-2 p-4 lg:grid-cols-3 items-start lg:max-w-none">
        {/* Pricing tab 1 */}
        <PricingTab
          yearly={isAnnual}
          planName="Single Room PG"
          price={{ yearly: 40000, monthly: 5000 }}
          planDescription="Comfortable single room with all basic amenities."
          features={[
            'Free Wi-Fi',
            'Attached Bathroom',
            '24/7 Water Supply',
            'Daily Housekeeping',
            'No Parking',
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          yearly={isAnnual}
          popular={true}
          planName="Double Sharing PG"
          price={{ yearly: 120000, monthly: 10000 }}
          planDescription="Ideal for friends or colleagues, with all essential facilities."
          features={[
            'Air Conditioning',
            'Common TV Room',
            'Laundry Service',
            'Gym Access',
            'Near IT Parks',
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          yearly={isAnnual}
          planName="Triple Sharing PG"
          price={{ yearly: 85000, monthly: 7500 }}
          planDescription="Affordable option with shared amenities."
          features={[
            'Meals Included',
            'Common Kitchen',
            'Parking Available',
            'CCTV Surveillance',
            'Close to Metro Station',
          ]}
        />
      </div>
    </div>
  );
}
