import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className='w-full h-12 items-center bg-blue-500 flex px-4 py-2 gap-2 sticky top-0 z-50'>
      <h1 className='font-bold mr-4'>Demo App</h1>
      <Link href="/" className='btn btn-sm btn-ghost hover:bg-blue-700/50'>
        Home
      </Link>
      <Link href="/scan" className='btn btn-sm btn-ghost hover:bg-blue-700/50'>
        Scan
      </Link>
      <Link href="/qrcode" className='btn btn-sm btn-ghost hover:bg-blue-700/50'>
        QR code
      </Link>
    </nav>
  );
};