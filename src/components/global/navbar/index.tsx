"use client"

// import { Sheet } from '@/components/ui/sheet'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePath } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import { UserButton } from '@clerk/nextjs'
import { HelpDuoToneWhite } from '@/icons'
import SubscriptionPlan from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import { LogoSmall } from '@/svgs/logo-small'

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
            side='left'
            >
                <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e]bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safaribackdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>

        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-3">
            <Separator
            orientation="horizontal"
            className="bg-[#333336]"
            />
        </div>
        <div className="px-3 flex gap-x-3">
            {/* <ClerkAuthState /> */}
            <UserButton />
        <p className="text-[#9B9CA0]">Profile</p>
        </div>
        <div className="px-3 flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
        </div>
        <SubscriptionPlan type="FREE">
            <div className="flex-1 flex flex-col justify-end">
                <UpgradeCard />
            </div>
        </SubscriptionPlan>
      </div>
            </Sheet>
        </span>
    </div>
  </div>
}

export default Navbar