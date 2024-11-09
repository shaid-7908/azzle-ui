import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/img_placeholder/logo-dark.png";

const LogoDark = () => {
  return (
    <Link href='/'>
      <span className='text-2xl font-bold tracking-wide'>Xanther</span>
    </Link>
  );
};

export default LogoDark;
