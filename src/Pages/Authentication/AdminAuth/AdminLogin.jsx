import React from 'react';
import { useForm } from 'react-hook-form';

const AdminLogin = () => {
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
            <h2 className="text-2xl text-center font-bold mt-5">Admin Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register('email', { required: true })}
                        className="border border-gray-300 px-3 py-2 w-full outline-none"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block mb-2 font-semibold">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register('password', { required: true })}
                        className="border border-gray-300 px-3 py-2 w-full outline-none"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-full text-white px-4 py-2 hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;