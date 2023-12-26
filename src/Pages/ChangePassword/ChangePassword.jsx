import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from "react-icons/io"; // Import eye icons
import Container from '../Shared/Container';

const ChangePassword = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
        // Handle form submission logic here
    };

    const currentPassword = watch('currentPassword', '');
    const newPassword = watch('newPassword', '');

    const toggleShowCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    };

    const toggleShowNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='font-montserrat my-10 w-3/5 mx-auto'>
            <Container>
                <div className='shadow'>

                    <div className='bg-[#1C91E4] px-5 py-4'>
                        <h4 className='text-white font-semibold'>Change Password</h4>
                    </div>

                    <p className='text-xs text-center mt-6'>8 characters or longer. Combine upper and lowercase letters, numbers, and special characters.</p>

                    <div className='p-5'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Current Password Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="currentPassword" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Current Password</label>
                                <div className="flex items-center border border-gray-300">
                                    <input
                                        type={showCurrentPassword ? 'text' : 'password'}
                                        id="currentPassword"
                                        {...register('currentPassword', { required: 'Current Password is required' })}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                    <div className='p-2 cursor-pointer' onClick={toggleShowCurrentPassword}>
                                        {showCurrentPassword ? <IoIosEyeOff className='text-[#1C91E4] text-xl' /> : <IoIosEye className='text-[#1C91E4] text-xl' />}
                                    </div>
                                </div>
                                {errors.currentPassword && <span className="text-red-500 text-xs mt-1">{errors.currentPassword.message}</span>}
                            </div>

                            {/* New Password Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="newPassword" className="block mb-1 ml-2 text-xs md:text-sm font-medium">New Password</label>
                                <div className="flex items-center border border-gray-300">
                                    <input
                                        type={showNewPassword ? 'text' : 'password'}
                                        id="newPassword"
                                        {...register('newPassword', { required: 'New Password is required', minLength: 8 })}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                    <div className='p-2 cursor-pointer' onClick={toggleShowNewPassword}>
                                        {showNewPassword ? <IoIosEyeOff className='text-[#1C91E4] text-xl' /> : <IoIosEye className='text-[#1C91E4] text-xl' />}
                                    </div>
                                </div>
                                {errors.newPassword && <span className="text-red-500 text-xs mt-1">{errors.newPassword.message}</span>}
                            </div>

                            {/* Confirm Password Field */}
                            <div className="mb-4 relative">
                                <label htmlFor="confirmPassword" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Confirm Password</label>
                                <div className="flex items-center border border-gray-300">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        {...register('confirmPassword', {
                                            validate: (value) => value === newPassword || 'Passwords do not match'
                                        })}
                                        className="w-full ml-2 text-sm outline-none"
                                    />
                                    <div className='p-2 cursor-pointer' onClick={toggleShowConfirmPassword}>
                                        {showConfirmPassword ? <IoIosEyeOff className='text-[#1C91E4] text-xl' /> : <IoIosEye className='text-[#1C91E4] text-xl' />}
                                    </div>
                                </div>
                                {errors.confirmPassword && <span className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</span>}
                            </div>

                            {/* Submit Button */}
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

export default ChangePassword;
