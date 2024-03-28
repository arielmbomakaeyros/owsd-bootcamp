"use client"; 
import React, { useState } from 'react'
import { NavigationBarType, NavigationElementType } from './navigationBar';
import { links } from './NavigationDataList';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import arrowLeftIcon from "../../../public/images/arrow-left.svg"; 
import { useClickOutside } from '@/app/hooks/useClickOutside';
import { useSideBarToggle } from '@/app/hooks/useSideBarToggle';
import { toggleSideBar } from '@/redux/features/navigation-bar-slice';

const NavigationBar = () => {
    const pathName = usePathname ()

    const { sideBartoggle, dispatch } = useSideBarToggle (); 

    // const [ toggleSideBar, setToggleSideBar ] = useState (false); 
    const [ toolTipInfo, setToolTipInfo ] = useState (false); 

    // const handleSideBarToggle = () => {
    //     setToggleSideBar ((toggleSideBar: boolean) => !toggleSideBar)
    // }

    const handleToggleTooltip = () => {
        setToolTipInfo ((toolTipInfo: boolean) => !toolTipInfo)
    }

    // const ref = useClickOutside(() => setToggleSideBar (true));
    const ref = useClickOutside(() => dispatch(toggleSideBar(true)))

  return (
        // {/* <div className=' flex justify-center fixed w-full '> */}
        <div ref={ ref } className={` ${ sideBartoggle ? "transform translate-x-[-100%]" : "transform translate-x-[0%]" } transition-transform duration-300 w-[250px] flex justify-center fixed h-screen z-30 bg-brokenWhite`}>
            {/* <ul className='flex flex-row md:justify-between justify-center gap-5 shadow-md rounded-2xl xl:w-[50%] lg:w-[70%] w-[100%] px-[1rem] md:px-[3rem] py-[1rem] bg-white top-5' >
                {
                    links && links.map((link: NavigationElementType) => {
                        return (
                            <Link key={ link?.id } href={link?.link} className={`${ pathName === link?.link ? "bg-slate-500 text-white" : "" } text-black flex flex-row items-center gap-1 md:gap-2 hover:bg-slate-500 hover:text-white px-5 md:py-5 py-3 rounded-3xl`} >
                                <div className='bg-black rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
                                    <Image
                                        // className="md:w-8 md:h-8 h-5 w-5"
                                        className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                                        src={ link?.icon }
                                        alt="icon"
                                    />
                                </div>
                                <div className='largeMobile:block hidden' >
                                    { link?.name }
                                </div>
                            </Link>
                        )
                    })
                }
            </ul> */}
            <ul className={` transition-transform duration-300 flex flex-col md:justify-between justify-center gap-5 shadow-md rounded-2xl xl:w-[50%] lg:w-[70%] w-[100%] px-[1rem] md:px-[3rem] py-[1rem] bg-white top-5`} >
                {
                    links && links.map((link: NavigationElementType) => {
                        console.log(pathName, `/${pathName.split("/")[1]}${link?.link}`)
                        return (
                            <Link key={ link?.id } href={ `/${pathName.split("/")[1]}${link?.link}` } className={`${ pathName === `/${pathName.split("/")[1]}${link?.link}` ? "bg-slate-500 text-white" : "" } text-black flex flex-row items-center gap-1 md:gap-2 hover:bg-slate-500 hover:text-white px-5 md:py-5 py-3 rounded-3xl`} >
                                <div className='bg-black rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] p-[1px] md:p-1 flex justify-center items-center cursor-pointer'>
                                    <Image
                                        // className="md:w-8 md:h-8 h-5 w-5"
                                        className="h-[20px] w-[20px] md:h-[30px] md:w-[30px]"
                                        src={ link?.icon }
                                        alt="icon"
                                    />
                                </div>
                                <div className='' >
                                    { link?.name }
                                </div>
                            </Link>
                        )
                    })
                }
            </ul>
            {/* <div onClick={ () => handleSideBarToggle () } onMouseEnter={ () => handleToggleTooltip () } onMouseLeave={ () => handleToggleTooltip () } className={`  ${ toggleSideBar ? "transform translate-x-[-500%]" : "transform translate-x-[0%]" } transition-transform duration-300 px-2 flex justify-center items-center ${ toggleSideBar ? "" : "bg-slate-100" }  h-screen w-[50px] absolute left-[100%] z-20 `}> */}
            <div className={` bg-transparent  transition-transform duration-300 px-2 flex justify-center items-center sm:h-screen w-[50px] absolute top-[2%] left-[100%] z-20 `} onClick={ () => dispatch(toggleSideBar(!sideBartoggle)) } onMouseEnter={ () => handleToggleTooltip () } onMouseLeave={ () => handleToggleTooltip () } >
                {/* ${ sideBartoggle ? "transform translate-x-[-500%]" : "transform translate-x-[0%]" } */}
                {/* ${ sideBartoggle ? "" : "bg-slate-100" } */}
                <div className='bg-black rounded-full h-[30px] w-[30px] md:h-[40px] md:w-[40px] p-[1px] md:p-1 flex justify-center items-center cursor-pointer relative'>
                    <Image
                        // className="md:w-8 md:h-8 h-5 w-5"
                        className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]"
                        src={ arrowLeftIcon }
                        alt="icon"
                    />
                    <div className={`text-white ml-2 w-[100px] bg-black ${ toolTipInfo ? "flex justify-center" : "hidden" } py-[.5rem] rounded-3xl absolute left-[100%]`}>
                        { sideBartoggle ? "Open" : "Close" }
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default NavigationBar