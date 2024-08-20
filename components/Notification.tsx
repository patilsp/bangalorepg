"use client";

import { motion } from 'framer-motion';
import { Bell, MessageCircle, User, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import MessageCard from '@/components/MessageCard';
import { convertToSerializeableObject } from '@/utils/convertToObject';
import { getSessionUser } from '@/utils/getSessionUser';

const Notification = async () => {
  await connectDB();
  
  const sessionUser = await getSessionUser();
  
  const { userId } = sessionUser;
  console.log(userId);

  const readMessages = await Message.find({ recipient: userId, read: true })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  const unreadMessages = await Message.find({
    recipient: userId,
    read: false,
  })
    .sort({ createdAt: -1 })
    .populate('sender', 'username')
    .populate('property', 'name')
    .lean();

  // Convert to serializable object
  const messages = [...unreadMessages, ...readMessages].map((messageDoc) => {
    const message = convertToSerializeableObject(messageDoc);
    message.sender = convertToSerializeableObject(messageDoc.sender);
    message.property = convertToSerializeableObject(messageDoc.property);
    return message;
  });

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-slate-900">Notifications</CardTitle>
        <CardDescription>
          Stay updated with recent activities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className='bg-white'>
          <div className='container m-auto py-24 max-w-6xl'>
            <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
              <h1 className='text-3xl font-bold mb-4'>Your Messages</h1>
              <div className='space-y-4'>
                {messages.length === 0 ? (
                  <p>You have no messages</p>
                ) : (
                  messages.map((message) => (
                    <MessageCard key={message._id} message={message} />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notification;
