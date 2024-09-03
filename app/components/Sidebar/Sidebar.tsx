'use client';

import { X, Menu } from 'lucide-react';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { GrowItem } from '../common/flexbox-utils/GrowItem';
import { SidebarLogo } from './components/SidebarLogo/SidebarLogo';
import { UserDetail } from './components/UserDetail/UserDetail';
import { ContactSection } from './components/ContactSection/ContactSection';
import Link from 'next/link';
import { memo, useCallback, useState } from 'react';
import { cn } from '@/lib/utils';

const Sidebar = memo(() => {
  const [open, setOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    // must set grow-0 and shrink-0 to certain value to avoid flexbox messing with actual width
    <>
      <div className={cn('fixed top-1 left-1 transition-all ease-in-out duration-200', {
        'hidden': open
      })}>
        <Menu className='cursor-pointer' onClick={openSidebar} />
      </div>
      <div className={cn('overflow-y-auto overflow-x-hidden transition-all ease-in-out duration-200 basis-0 grow-0 shrink-0 border-r min-h-screen flex flex-col', {
        'basis-[300px]': open
      })}>
        <div className='p-3 flex flex-col grow'>
          <div className='flex justify-between items-center'>
            <SidebarLogo />
            <X className='cursor-pointer' onClick={closeSidebar} />
          </div>
          <div><UserDetail /></div>
          <div>
            <Command>
              <CommandList>
                <CommandGroup heading='Recipes'>
                  <Link href='/recipes'><CommandItem>Category</CommandItem></Link>
                  <Link href='/recipes?option=random'><CommandItem>Surprise me!</CommandItem></Link>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading='Manage'>
                  <Link href='/manage/recipes'><CommandItem>Recipes</CommandItem></Link>
                  <Link href='/manage/user'><CommandItem>User information</CommandItem></Link>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
          <GrowItem />
          <div><ContactSection /></div>
        </div>
      </div>
    </>

  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;