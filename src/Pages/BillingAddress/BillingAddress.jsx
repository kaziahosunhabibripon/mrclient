import React from 'react';
import Container from '../Shared/Container';
import { useForm } from 'react-hook-form';

const BillingAddress = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const countries = ["Country 1", "Country 2", "Country 3"]; // Update with your list of countries
    const cities = ["City 1", "City 2", "City 3"]; // Update with your list of cities

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
        // Handle form submission logic here
    };

    return (
        <div className='font-montserrat my-10 w-3/5 mx-auto'>
            <Container>
                <div className='shadow'>
                    <div className='bg-[#1C91E4] px-5 py-4'>
                        <h4 className='text-white font-medium'>Billing Address</h4>
                    </div>
                    <div className='p-5'>
                        {/* Image Input */}
                        <div className="mb-4 flex justify-center items-center">
                            <div className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden">
                                {/* Your image input here */}
                                {/* Example: */}
                                <input type="file" accept="image/*" {...register('image')} />
                            </div>
                        </div>

                        {/* Full Name Field */}
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Full Name"
                                {...register('fullName', { required: 'Full Name is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.fullName && <span className="text-red-500 text-xs mt-1">{errors.fullName.message}</span>}
                        </div>

                        {/* Username Field */}
                        <div className="mb-4">
                            <label htmlFor="username" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Username</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                {...register('username', { required: 'Username is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.username && <span className="text-red-500 text-xs mt-1">{errors.username.message}</span>}
                        </div>

                        {/* Industry Name Field */}
                        <div className="mb-4">
                            <label htmlFor="industryName" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Industry Name</label>
                            <input
                                type="text"
                                id="industryName"
                                placeholder="Industry Name"
                                {...register('industryName', { required: 'Industry Name is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.industryName && <span className="text-red-500 text-xs mt-1">{errors.industryName.message}</span>}
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            {/* Country Field (Select) */}
                            <div className="mb-4">
                                <label htmlFor="country" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Country</label>
                                <select
                                    id="country"
                                    {...register('country', { required: 'Country is required' })}
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                >
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && <span className="text-red-500 text-xs mt-1">{errors.country.message}</span>}
                            </div>

                            {/* City Field (Select) */}
                            <div className="mb-4">
                                <label htmlFor="city" className="block mb-1 ml-2 text-xs md:text-sm font-medium">City</label>
                                <select
                                    id="city"
                                    {...register('city', { required: 'City is required' })}
                                    className="w-full border border-gray-300 px-3 py-2 outline-none"
                                >
                                    {cities.map((city, index) => (
                                        <option key={index} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                                {errors.city && <span className="text-red-500 text-xs mt-1">{errors.city.message}</span>}
                            </div>
                        </div>

                        {/* Address Field */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Address"
                                {...register('address', { required: 'Address is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.type === 'required' ? 'Email is required' : 'Invalid email format'}</span>}
                        </div>

                        {/* Phone Number Field */}
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                placeholder="Phone Number"
                                {...register('phoneNumber', { required: 'Phone Number is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.phoneNumber && <span className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</span>}
                        </div>

                        {/* Language Field */}
                        <div className="mb-4">
                            <label htmlFor="language" className="block mb-1 ml-2 text-xs md:text-sm font-medium">Language</label>
                            <input
                                type="text"
                                id="language"
                                placeholder="Language"
                                {...register('language', { required: 'Language is required' })}
                                className="w-full border border-gray-300 px-3 py-2 outline-none"
                            />
                            {errors.language && <span className="text-red-500 text-xs mt-1">{errors.language.message}</span>}
                        </div>

                        {/* Save Changes Button */}
                        <div className='text-center'>
                            <button onClick={handleSubmit(onSubmit)} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold w-2/4 py-2 rounded-full'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BillingAddress;