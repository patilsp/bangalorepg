'use client';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import addMessage from '@/app/actions/addMessage';
import SubmitMessageButton from './SubmitMessageButton';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";  

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const PropertyContactForm = ({ property }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const [state, formAction] = useFormState(addMessage, {});

  useEffect(() => {
    if (state.error) {
      setLoading(false);
      toast.error(state.error);
    }
    if (state.submitted) {
      setLoading(false);
      toast.success('Message sent successfully');
    }
  }, [state]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await formAction();
  };

  if (state.submitted) {
    return (
      <p className='text-green-500 mb-4'>
        Your message has been sent successfully
      </p>
    );
  }

  return (
    session && (

      <Dialog>
      <DialogTrigger asChild>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold h-10 w-[300px] mt-2 py-3 px-4 border rounded-lg flex items-center justify-center">Contact Property Manager</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Property Manager</DialogTitle>
          <DialogDescription>
            Add data here and Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className=''>
        <form onSubmit={handleSubmit}>
          <input
            type='hidden'
            id='property'
            name='property'
            defaultValue={property._id}
          />
          <input
            type='hidden'
            id='recipient'
            name='recipient'
            defaultValue={property.owner}
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Enter your name'
                required
              />
            </div>

            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                required
              />
            </div>

            <div className="w-full">
              <Label htmlFor='phone'>Phone</Label>
              <Input
                id='phone'
                name='phone'
                type='text'
                placeholder='Enter your phone number'
              />
            </div>
          </div>

          <div className='mb-4'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              id='message'
              name='message'
              placeholder='Enter your message'
              className='h-44'
            />
          </div>

          <div className='flex justify-end'>
            <Button type='submit' disabled={loading} className='relative'>
              {loading && <Spinner className='absolute left-3 top-1/2 transform -translate-y-1/2' />}
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>
      </DialogContent>
    </Dialog>
      
    )
  );
};

export default PropertyContactForm;
