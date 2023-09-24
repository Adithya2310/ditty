"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { dashboard, logo } from '@/assets'
import { NavLinks } from '@/constants'
import { useRouter } from 'next/navigation'

const MenuItems=({name,icon,handleClick,active})=>{
    return (
        <div className={` py-3 rounded-[10px] p-1 cursor-pointer items-center mx-1 px-1 my-3 flex gap-4 ${name==active&&` bg-slate-200`}`} onClick={handleClick}>
        <div className='mx-1'>
            <Image width={28} height={32} src={dashboard} alt={name}/>
        </div>
        <span>{name}</span>
        </div>
    )
}
const SideBar = () => {
    // to router from the SideBar
    const router=useRouter();
    const [isActive,setIsActive]=useState("dashboard");
  return (
    <div className='bg-[#ccffff] h-[100vh] min-w-[150px] w-full max-w-[200px]'>
    <div className=' ml-3 my-6 flex flex-col gap-1'>
        {
            NavLinks.map((link)=>{
                return (
                    <MenuItems
                        key={link.name}
                        name={link.name}
                        icon={link.svg}
                        active={isActive}
                        handleClick={()=>{
                            setIsActive(link.name);
                            router.push(link.link);
                            console.log("clicked");
                        }}
                    />
                )
            })
        }
    </div>
    </div>
  )
}

export default SideBar;