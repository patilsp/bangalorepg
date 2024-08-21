'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import logo from '@/assets/images/logo.jpg';
import profileDefault from '@/assets/images/profile.png';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import UnreadMessageCount from './UnreadMessageCount';
// import { CommandMenu } from "@/components/command-menu";
import { Search } from 'lucide-react';

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Bell,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Notification } from "@/components/Notification"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const UserName = session?.user?.name;
  const UserEmail = session?.user?.email;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();

    // Close mobile menu if the viewport size changes
    window.addEventListener('resize', () => {
      setIsMobileMenuOpen(false);
    });
  }, []);

  return (
    <nav className="w-full">
      <div className='mx-auto px-1 text-black md:px-2'>
        <div className='flex items-center justify-between h-16'>
          {/* Left Side: Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              {/* <Image 
                className='h-10 w-auto rounded-full' 
                src={logo} 
                alt='PropertyPulse' /> */}
                <h1 className="font-bold text-xl">Namma PG</h1>
            </Link>
          </div>

          {/* Center: Links (hidden on small screens) */}
          <div className='hidden md:flex space-x-4 px-4 bg-black text-white rounded-3xl p-1'>
            <Link
              href='/'
              className={`${
                pathname === '/' ? 'bg-black' : ''
              } hover:bg-black rounded-3xl px-4 py-2 text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathname === '/properties' ? 'bg-black' : ''
              } hover:bg-black rounded-3xl px-4 py-2 text-sm font-medium`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === '/properties/add' ? 'bg-black' : ''
                } hover:bg-black rounded-3xl px-4 py-2 text-sm font-medium`}
              >
                Add Property
              </Link>
            )}


            <Search className="mt-2" />
          </div>

          {/* Right Side: Profile and Notification */}
          <div className='flex items-center'>
            {/* <Link href='/messages' className='relative'>
              <button
                type='button'
                className='rounded-full bg-gray-200 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>
              <UnreadMessageCount />
            </Link> */}


            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button variant="ghost" className="p-1 rounded-md border-input bg-transparent border shadow-sm hover:bg-accent hover:text-slate-900 mr-1 ">                
                    <Bell className="bell" size={20}  />
                    <UnreadMessageCount />
                  </button>
                </DropdownMenuTrigger>      
                <DropdownMenuContent className="w-100" align="end" forceMount>
                <Card className="border-none shadow-none">
                  <CardHeader className="pb-3">
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>
                      Choose what you want to be notified about.
                    </CardDescription>
                  </CardHeader>
                  {/* <Notification /> */}
                </Card>
              </DropdownMenuContent>
            </DropdownMenu>
        



            {session && (
              <div className='relative ml-3'>
                


                
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button variant="outline">Open</Button> */}

                <button
                  type='button'
                  className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <Image
                    className='h-8 w-8 rounded-full'
                    src={profileImage || profileDefault}
                    alt='Profile'
                    width={40}
                    height={40}
                  />
                </button>

              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-0 md:mr-10">
                <div className="flex flex-col p-1">
                  <DropdownMenuLabel>{UserName}</DropdownMenuLabel>
                  <p className="text-sm ml-2">{UserEmail}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Theme</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                 
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                
                </DropdownMenuGroup>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' });
                      }}
                      className='flex items-center'
                    >
                      <LogOut  className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </button>
                  
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

              </div>
            )}

            {!session && providers && (
              <div className='flex items-center'>
                {Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='flex items-center text-white bg-black hover:bg-gray-900 rounded-md px-3 py-2 ml-4'
                  >
                    <FaGoogle className='text-white mr-2' />
                    <span>Login</span>
                  </button>
                ))}
              </div>
            )}

           
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
