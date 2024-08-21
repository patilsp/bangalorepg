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
import CommandMenu  from "@/components/command-menu";
import MobileNav  from "@/components/mobile-nav";
import MainNav  from "@/components/main-nav";
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
          <div className='block sm:hidden flex-shrink-0'>
            <MobileNav />
          </div>
          <div className='hidden md:flex flex-shrink-0'>
            <MainNav />
          </div>
         
          <div className='flex items-center'>           

            <CommandMenu className="border size-[30px] hover:bg-gray-100 shadow-sm rounded-sm  mr-1" />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button variant="ghost" className="p-1 rounded-md border-input bg-transparent border shadow-sm hover:bg-accent hover:text-slate-900">                
                    <Bell className="bell hover:fill-black" size={20}  />
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
                    className='flex items-center text-white text-sm bg-black hover:bg-gray-900 rounded-md px-2 py-1 ml-1'
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
