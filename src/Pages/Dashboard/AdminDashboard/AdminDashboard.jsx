import Container from '@/Pages/Shared/Container';
import React from 'react';
import { useForm } from 'react-hook-form';

const AdminDashboard = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='my-10'>
            <Container>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        {/* Search Bar Start */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='flex justify-between items-center border shadow p-5'>
                                <h4 className='text-lg font-bold text-webPrimary'>Active Project - 12 ($840)</h4>

                                {/* Select Option */}
                                <select className='border outline-none px-5 py-1' {...register('projectStatus')}>
                                    <option value="Active Projects">Active Projects</option>
                                    <option value="Revision">Revision</option>
                                    <option value="Ongoing">Ongoing</option>
                                    <option value="Waiting">Waiting</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div>B</div>
                </div>
            </Container>
        </div>
    );
};

export default AdminDashboard;