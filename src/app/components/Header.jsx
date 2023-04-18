import { MenuItem } from "./menuitem"
import { AiFillHome }  from 'react-icons/ai'
import { BsInfoCircleFill }  from 'react-icons/bs'
import Link from "next/link"
import { DarkModeSwitch } from "./darkModeswitch"

export const Header = () => {
    return (
        <div className="flex justify-between mx-2 max-w-6xl sm:max-auto items-center py-6">
            <div className="flex">
                <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
                <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}/>
            </div>
            <div className="flex space-x-2 items-center">
                <DarkModeSwitch/>
                <Link href='/'>
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDb</span>
                        <span className="text-xl hidden sm:inline">Clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}