import React from 'react';
import { 
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaDiscord} from 'react-icons/fa';

const Socials = () => {
    return (
        <div className='flex gap-x-[10px]'>
            <a  className='border border-white/20
             rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-black
              hover:border-black transition-all' href='/'><FaYoutube/></a>
            <a className='border border-white/20
             rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-black
              hover:border-black transition-all' href='/'><FaFacebookF/></a>
            <a className='border border-white/20
             rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-black
              hover:border-black transition-all' href='/'><FaInstagram/></a>
            <a className='border border-white/20
             rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-black
              hover:border-black transition-all' href='/'><FaPinterestP/></a>
            <a className='border border-white/20
             rounded-full w-[35px] h-[35px] flex items-center justify-center text-sm hover:text-black
              hover:border-black transition-all' href='/'><FaDiscord/></a>
        </div>
    )
}

export default Socials;