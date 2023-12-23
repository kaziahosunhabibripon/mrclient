import React from 'react';
import { useForm } from 'react-hook-form';
import {
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa';
import Container from '../Shared/Container';
import { CiFacebook } from "react-icons/ci";

const SocialMedia = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted links:', data);
        // Handle the submitted data here
    };

    return (
        <div className='font-montserrat my-10 w-3/6 mx-auto'>
            <Container>
                <div className='shadow-md'>
                    <div className='bg-[#1C91E4] px-5 py-4'>
                        <h4 className='text-white font-semibold'>Social Media Links</h4>
                    </div>

                    <div className='p-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* <div className='mb-4 relative flex items-center'>
                                <FaFacebook className='text-gray-500 mr-2' />
                                <input
                                    type='text'
                                    placeholder='Facebook URL'
                                    {...register('facebook')}
                                    className='border border-gray-300 rounded-md p-2 w-full'
                                />
                            </div>
                            {/* Add similar input fields for other social media platforms */}
                            {/* Example: Instagram */}
                            {/* <div className='mb-4 relative flex items-center'>
                                <FaInstagram className='text-gray-500 mr-2' />
                                <input
                                    type='text'
                                    placeholder='Instagram URL'
                                    {...register('instagram')}
                                    className='border border-gray-300 rounded-md p-2 w-full'
                                />
                            </div> */}
                            {/* Repeat similar structures for other social media platforms */}

                            {/* Facebook Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="password" className="block mb-1 text-sm md:text-base font-normal">Facebook</label>
                                <div className="flex items-center border border-gray-300 p-2 pl-3">
                                    <CiFacebook className='text-gray-500 text-2xl' />
                                    <input
                                        type="text"
                                        id="password"
                                        required
                                        placeholder="https://"
                                        {...register('password', { required: 'Password is required' })}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-semibold w-2/4 py-2 rounded-full'>Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SocialMedia;
