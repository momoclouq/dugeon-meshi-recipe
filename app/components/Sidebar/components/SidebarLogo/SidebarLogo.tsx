import Link from 'next/link';
import { BookOpenText } from 'lucide-react';


export const SidebarLogo = () => {
  return (
    <div><Link href='/'><BookOpenText /></Link></div>
  );
};