import React from 'react';
import { useForm } from 'react-hook-form';

const AdminRegister = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission with the form data
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto bg-white">

            <h2 className="text-2xl text-center font-bold mt-5">Admin Register</h2>

            <div className="flex justify-center items-center mt-5">
                <label htmlFor="imageInput" className="cursor-pointer">
                    <div className="w-32 h-32 rounded-full overflow-hidden border">
                        {/* Placeholder for the image input */}
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            {...register('image', { required: true })}
                            className="w-full h-full opacity-0 cursor-pointer"
                        />
                    </div>
                </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-semibold">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        {...register('name', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block mb-1 font-semibold">
                        Phone Number:
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        placeholder="Enter your phone number"
                        {...register('phoneNumber', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.phoneNumber && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-1 font-semibold">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter your address"
                        {...register('address', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.address && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register('email', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1 font-semibold">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register('password', { required: true })}
                        className="border border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminRegister;