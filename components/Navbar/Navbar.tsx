import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TfiClose } from 'react-icons/tfi';
import Button from '../Micro/Button/Button';

const Navbar = () => {
  const [navigation, setNavigation] = React.useState(false);
  return (
    <nav className='bg-black py-3'>
      <div className='2xl:container 2xl:mx-auto flex lg:px-8 px-5 justify-between items-center text-white'>
        <div>
          <Link href='/'>
            <Image
              src='/assets/navbar/Logo.svg'
              alt='logo'
              width={153}
              height={65}
              className='hidden lg:block cursor-pointer'
            />
          </Link>
          <div className='lg:hidden flex'>
            <Image
              src='/assets/navbar/Logo.svg'
              alt='logo'
              width={84}
              height={34}
              className='block lg:hidden cursor-pointer'
            />
          </div>
        </div>
        <ul className='lg:flex justify-between w-52 cursor-pointer hidden'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/#about' onClick={() => setNavigation(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>

        <ul
          className={`${
            navigation
              ? 'lg:hidden absolute w-full h-96 py-14 left-0 top-14 bg-black flex flex-col justify-between items-center  cursor-pointer '
              : 'hidden'
          }`}
        >
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/#about' onClick={() => setNavigation(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
        <div>
          <Button className='w-[129px] h-[35px] cursor-pointer bg-primary lg:block hidden rounded-full'>
            Contact Us
          </Button>
        </div>
        <div className='lg:hidden block' onClick={() => setNavigation(!navigation)}>
          {navigation ? <TfiClose className='text-white w-9 h-5' /> : <AiOutlineMenu className='text-white w-10 h-6' />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
