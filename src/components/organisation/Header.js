import Link from 'next/link';

export const Header = () => {
  return (
    <div className='fixed top-0 w-full h-24'>
      <ul className='flex items-center justify-around w-3/5 h-full mx-auto'>
        <li className='text-xl'>
          <Link href='/'>
            <a className='hover:border-b-2 hover:border-black'>HOME</a>
          </Link>
        </li>
        <li className='text-xl'>
          <Link href='/profile'>
            <a className='hover:border-b-2 hover:border-black'>PROFILE</a>
          </Link>
        </li>
        <li className='text-xl'>
          <Link href='/skills'>
            <a className='hover:border-b-2 hover:border-black'>SKILLS</a>
          </Link>
        </li>
        <li className='text-xl'>
          <Link href='/works'>
            <a className='hover:border-b-2 hover:border-black'>WORKS</a>
          </Link>
        </li>
        <li className='text-xl'>
          <Link href='/contact'>
            <a className='hover:border-b-2 hover:border-black'>CONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
