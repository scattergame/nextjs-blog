'use client';
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import {useTheme} from 'next-themes'

export const DarkModeSwitch = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    let currentTheme = "light"
    return (
        <div className='flex'>
            {currentTheme === "dark" ? <MdLightMode onClick={()=>setTheme("light")}/> : 
            <BsFillMoonFill onClick={()=>setTheme("dark")}/> 
            }
        </div>
    )
}