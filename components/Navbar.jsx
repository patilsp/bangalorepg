'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';
import logo from '@/assets/images/logo-white.png';
import profileDefault from '@/assets/images/profile.png';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import UnreadMessageCount from './UnreadMessageCount';

const Navbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

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
      <div className='mx-auto px-1 text-black sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          {/* Left Side: Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              {/* <Image className='h-10 w-auto' src={logo} alt='PropertyPulse' /> */}
              Logo
            </Link>
          </div>

          {/* Center: Links (hidden on small screens) */}
          <div className='hidden md:flex space-x-4 px-4 bg-black text-white rounded-3xl p-1'>
            <Link
              href='/'
              className={`${
                pathname === '/' ? 'bg-gray-800' : ''
              } hover:bg-gray-700 rounded-3xl px-4 py-2 text-sm font-medium`}
            >
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathname === '/properties' ? 'bg-gray-700' : ''
              } hover:bg-gray-700 rounded-3xl px-4 py-2 text-sm font-medium`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === '/properties/add' ? 'bg-gray-700' : ''
                } hover:bg-gray-700 rounded-3xl px-4 py-2 text-sm font-medium`}
              >
                Add Property
              </Link>
            )}
          </div>

          {/* Right Side: Profile and Notification */}
          <div className='flex items-center'>
            <Link href='/messages' className='relative'>
              <button
                type='button'
                className='rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
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
            </Link>

            {session && (
              <div className='relative ml-3'>
                <button
                  type='button'
                  className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <Image
                    className='h-8 w-8 rounded-full'
                    src={profileImage || profileDefault}
                    alt='Profile'
                    width={40}
                    height={40}
                  />
                </button>

                {isProfileMenuOpen && (
                  <div
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-gray-700'
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='/properties/saved'
                      className='block px-4 py-2 text-sm text-gray-700'
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Saved Properties
                    </Link>
                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        signOut({ callbackUrl: '/' });
                      }}
                      className='block w-full text-left px-4 py-2 text-sm text-gray-700'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {!session && providers && (
              <div className='hidden md:flex items-center'>
                {Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='flex items-center text-white bg-gray-700 hover:bg-gray-900 rounded-md px-3 py-2 ml-4'
                  >
                    <FaGoogle className='text-white mr-2' />
                    <span>Login or Register</span>
                  </button>
                ))}
              </div>
            )}

            <button
              type='button'
              className='md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ml-4'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            <Link
              href='/'
              className={`${
                pathname === '/' ? 'bg-gray-700' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathname === '/properties' ? 'bg-gray-700' : ''
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href='/properties/add'
                className={`${
                  pathname === '/properties/add' ? 'bg-gray-700' : ''
                } text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Add Property
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
