import React, { useState } from 'react'
import BannerCard from '../shared/BannerCard'
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    let navigate = useNavigate();
    
    const handleSearch = (e) => {
      e.preventDefault();
      navigate(`/shop?search=${searchTerm}`);
    }



    return (
        <div className=' bg-teal-100  px-4 lg:px-24 flex items-center'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-12 py-40'>
                {/* right side */}
                <div className='md:w-1/2 h-full'>
                    <BannerCard />
                </div>

                {/* left side */}
                <div className='md:w-1/2 space-y-8 bg-teal-100'>
                    <h1 className='lg:text-6xl text-5xl font-bold text-black mb-5 lg:leading-tight leading-snug'>Buy your books <span className='text-blue-700'>for the best prices</span></h1>
                    <p>Find and read more books you'll love, and keep track of the books you want to read. Be part of the world's largest community of book lovers on Goodreads.</p>
                    <div>
                        <form onSubmit={handleSearch}>
                        <input type="search"  placeholder='Search a book here' className='py-2 px-2 rounded-s-sm' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}  />
                        <button type="submit"  className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                         </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
