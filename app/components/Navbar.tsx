import Link from 'next/link';

export const NavBar = () => {
  return (
    <nav className='w-full h-10 bg-slate-500 flex px-4 py-2 gap-2'>
      <h1 className='font-bold mr-4'>Demo App</h1>
      <Link href="/">
        Home
      </Link>
      <Link href="/scan">
        Scan
      </Link>
    </nav>
  );
};