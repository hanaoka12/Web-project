import React from 'react'
import { useLoaderData } from 'react-router-dom'

import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';

const SignleBook = () => {
    const data = useLoaderData();
    const { bookTitle, bookDescription, imageURL } = data;
    console.log(data)
    return (
        <div className='mt-20'>
            <Banner>
                <div className=" z-50 flex justify-between w-full py-12 px-4 border-b border-gray-200 bg-amber-400">
                    <div className="flex items-center mx-auto">
                        <p className="flex items-center text-2xl font-normal text-black">
                            <MdAnnouncement className='me-2 text-red-600' />
                            <span className='text-4xl font-semibold'>Book Name: {bookTitle}</span>
                        </p>
                    </div>
                    <Banner.CollapseButton color="gray" className="border-0 bg-transparent px-0">
                        <HiX className="h-4 w-4" />
                    </Banner.CollapseButton>
                </div>
            </Banner>

            {/* book details */}
            <div className='flex'>
                <img src={imageURL}/>
                <div className='flex-col ml-10 text-center'>
                <p className='text-2xl font-bold'>Description</p>
                <p className='ml-10'>{bookDescription}</p>
                    <div className='flex-col'>
                        
                <div className='mt-10'>
                <input type='number' min='1' defaultValue='1' className='border p-2 mr-4'/>
          <button className='bg-green-700 font-semibold text-white py-2 px-4 rounded'>Buy Now</button>
          <p className='mt-10 text-bold text-2xl'>Price: $10</p>
          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignleBook