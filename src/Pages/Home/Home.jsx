import { useGetAdminUserByIdQuery } from '@/redux/features/adminUser/adminUserApi';
import React from 'react';

const Home = () => {
    const {data} = useGetAdminUserByIdQuery("800213d1-6d89-4109-8f0e-08a6760fab95")
    console.log(data)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;