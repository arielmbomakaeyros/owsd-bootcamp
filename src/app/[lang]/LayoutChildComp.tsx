"use client"; 
import NavigationBar from '@/components/navigation-bar/NavigationBar'
import React from 'react'
import { Providers } from '../common/nextui/providers'
import { useSideBarToggle } from '../hooks/useSideBarToggle';

const LayoutChildComp = ({
    childrenD,
  }: Readonly<{
    childrenD: React.ReactNode;
  }>) => {

    const { sideBartoggle, dispatch } = useSideBarToggle (); 
  return (
    <>
        <NavigationBar />
        <div className={`absolute right-0 bg-brokenWhite ${ sideBartoggle ? "w-screen transition-transform duration-300" : "w-screen superDesktop:w-[90%] transition-transform duration-300" } transition-transform duration-300 h-screen overflow-y-scroll`}>
            {/* border-blue-500 border-l-medium */}
            <Providers>
                {childrenD}
            </Providers>
        </div>
    </>
  )
}

export default LayoutChildComp