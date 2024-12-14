import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-orange-400 w-full text-blue-900 text-center h-14 flex justify-center items-center font-extrabold">
      <div className="flex gap-6 hover:text-red-900 ">
        <Link href="/">HOME</Link>
        <Link href="/intro">INTRODUCTION</Link>
        <Link href="/skills">SKILLS</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/contact">CONTACT US</Link>
        
      </div>
    </div>
  );
}
