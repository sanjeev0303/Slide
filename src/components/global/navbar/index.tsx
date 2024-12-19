"use client"

// import { Sheet } from '@/components/ui/sheet'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'

type NavbarProps = {
    slug: string
}

const Navbar = ({ slug }: NavbarProps) => {

    const { page } = usePath()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

  return currentPage && <div className='flex flex-col'>
    <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
        <span className='lg:hidden flex items-center flex-1 gap-x-2'>
            <Sheet
            trigger={<Menu />}
            className="lg:hidden"
            >
                
            </Sheet>
        </span>
    </div>
  </div>
}

export default Navbar
