import { MenuItem } from "./MenuItem"
import { AiFillHome }  from 'react-icons/ai'

export const Header = () => {
    return (
        <div>
            <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
        </div>
    )
}