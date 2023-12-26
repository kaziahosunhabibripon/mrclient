import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../Shared/Container';
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebookCircular, TiSocialGooglePlusCircular, TiSocialLinkedinCircular, TiSocialPinterestCircular, TiSocialTwitterCircular, TiSocialYoutubeCircular } from 'react-icons/ti';
import { LiaYelp } from "react-icons/lia";
import { BiLogoTiktok } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const SocialMedia = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Submitted links:', data);
        // Handle the submitted data here
    };

    return (
        <div className='font-montserrat my-10 w-3/5 mx-auto'>
            <Container>
                <div className='shadow'>
                    <div className='bg-[#1C91E4] px-5 py-4'>
                        <h4 className='text-white font-semibold'>Social Media Links</h4>
                    </div>

                    <div className='p-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Facebook Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="facebook" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Facebook</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialFacebookCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="facebook"
                                        placeholder="https://"
                                        {...register('facebook')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Instagram Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="instagram" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Instagram</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <FaInstagram className='text-gray-500 text-xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="instagram"
                                        placeholder="https://"
                                        {...register('instagram')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Linkedin Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="linkedin" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Linkedin</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialLinkedinCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="linkedin"
                                        placeholder="https://"
                                        {...register('linkedin')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Twitter Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="twitter" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Twitter</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialTwitterCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="twitter"
                                        placeholder="https://"
                                        {...register('twitter')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Pinterest Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="pinterest" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Pinterest</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialPinterestCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="pinterest"
                                        placeholder="https://"
                                        {...register('pinterest')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Google Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="google" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Google</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialGooglePlusCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="google"
                                        placeholder="https://"
                                        {...register('google')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Youtube Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="youtube" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Youtube</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <TiSocialYoutubeCircular className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="youtube"
                                        placeholder="https://"
                                        {...register('youtube')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Yelp Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="yelp" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Yelp</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <LiaYelp className='text-gray-500 text-2xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="yelp"
                                        placeholder="https://"
                                        {...register('yelp')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Tiktok Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="tiktok" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Tiktok</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <BiLogoTiktok className='text-gray-500 text-xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="tiktok"
                                        placeholder="https://"
                                        {...register('tiktok')}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Nextdoor Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="nextdoor" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Nextdoor</label>
                                <div className="flex items-center border border-gray-300">
                                    <div className='border-r p-2'>
                                        <SiNextdotjs className='text-gray-500 text-xl' />
                                    </div>
                                    <input
                                        type="text"
                                        id="nextdoor"
                                        placeholder="https://"
                                        {...register('nextdoor')}
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
