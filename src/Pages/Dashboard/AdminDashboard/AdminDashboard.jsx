import Container from '@/Pages/Shared/Container';
import OrderItemCard from '@/components/Dashboard/OrderItemCard/OrderItemCard';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const AdminDashboard = () => {
    const [activeProjects, setActiveProjects] = useState('Active Projects');
    const [allTimes, setAllTimes] = useState('All Times');
    const [searchInput, setSearchInput] = useState('');
    const [visitors, setVisitors] = useState('Today');
    const [customers, setCustomers] = useState('Today');

    // ======================>
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('admindashboard.json')
            .then(res => res.json())
            .then(resData => setData(resData))
    }, [])
    // ======================>

    // Function to handle active projects select change
    const handleActiveProjectsChange = (event) => {
        setActiveProjects(event.target.value);
        console.log(event.target.value);
    };

    // Function to handle all times select change
    const handleAllTimesChange = (event) => {
        setAllTimes(event.target.value);
        console.log(event.target.value);
    };

    // Function to handle all times select change
    const handleVisitorsChange = (event) => {
        setVisitors(event.target.value);
        console.log(event.target.value);
    };

    // Function to handle all times select change
    const handleCustomersChange = (event) => {
        setCustomers(event.target.value);
        console.log(event.target.value);
    };

    // Function to handle input change
    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Function to handle search icon click
    const handleSearchClick = () => {
        console.log('Search Input:', searchInput); // Log the search input value
    };

    return (
        <div className='my-10'>
            <Container>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='md:col-span-2'>
                        {/* Search Bar Start */}
                        <div className='flex justify-between items-center border shadow p-5'>
                            <h4 className='text-lg font-bold text-webPrimary'>Active Project - 12 ($840)</h4>

                            {/* Select Active Projects Option */}
                            <select className='border text-base font-medium outline-none px-5 py-1' value={activeProjects} onChange={handleActiveProjectsChange}>
                                <option value="Active Projects">Active Projects (12)</option>
                                <option value="Revision">Revision (3)</option>
                                <option value="Ongoing">Ongoing (4)</option>
                                <option value="Waiting">Waiting (2)</option>
                                <option value="Delivered">Delivered (3)</option>
                                <option value="Completed">Completed (125)</option>
                                <option value="Canceled">Canceled (0)</option>
                            </select>
                        </div>
                        {/* Search Bar End */}

                        <div className='my-5'>
                            {
                                data.map((singleData, idx) => (
                                    <OrderItemCard key={idx} data={singleData} />
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#F2F9FF] p-5'>
                            <h5 className='text-lg font-semibold text-webPrimary border-b border-webPrimary pb-2'>This Month</h5>

                            <div className='flex justify-between items-center mt-3'>
                                <p className='font-medium'>Completed Projects</p>
                                <span className='font-bold'>90</span>
                            </div>

                            <div className='flex justify-between items-center my-2'>
                                <p className='font-medium'>Earnings</p>
                                <span className='font-bold'>$1250</span>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='font-medium'>Cancelled Projects</p>
                                <span className='font-bold'>1 ($35)</span>
                            </div>
                        </div>

                        <div className='bg-[#FEF0F0] p-5 mt-5'>

                            <div className='flex justify-between items-center border-b border-webPrimary pb-2'>
                                <h5 className='text-lg font-semibold text-webPrimary'>All Times</h5>

                                {/* Select All Times Option */}
                                <select className='border text-sm font-medium outline-none' value={allTimes} onChange={handleAllTimesChange}>
                                    <option value="All Times">All Times</option>
                                    <option value="Last Month">Last Month</option>
                                    <option value="Last 3 Months">Last 3 Months</option>
                                    <option value="Last 6 Months">Last 6 Months</option>
                                    <option value="This Year">This Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                </select>
                            </div>

                            {/* ====================================================== */}
                            <div className='my-3'>
                                <p className='font-medium mb-1'>Completed Projects</p>
                                <span className='font-bold'>950</span>
                            </div>

                            <div className='mb-3'>
                                <p className='font-medium mb-1'>Earnings</p>
                                <span className='font-bold'>$15,750.20</span>
                            </div>

                            <div className='mb-3'>
                                <p className='font-medium mb-1'>Cancelled Projects</p>
                                <span className='font-bold'>9 ($230)</span>
                            </div>

                            <div>
                                <p className='font-medium mb-1'>Avg. Selling Price</p>
                                <span className='font-bold'>$32.55</span>
                            </div>
                        </div>

                        {/* Search Bar Start */}
                        <div className='bg-[#F2F9FF] p-5 mt-5'>
                            <h5 className='text-lg font-semibold text-webPrimary'>Search Project</h5>

                            {/* Input for search */}
                            <div className='relative mt-2 flex items-center'>
                                <input
                                    type='text'
                                    className='border rounded-sm px-3 py-2 outline-none w-full'
                                    placeholder='Type Project Number'
                                    value={searchInput}
                                    onChange={handleInputChange}
                                />
                                {/* Background color for the search icon */}
                                <span className='absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={handleSearchClick}>
                                    <div className='bg-blue-500 rounded-sm text-white p-3'>
                                        <AiOutlineSearch />
                                    </div>
                                </span>
                            </div>
                        </div>

                        {/* Visitors */}
                        <div className='bg-[#FEF0F0] p-5 mt-5'>
                            <div className='flex justify-between items-center border-b border-webPrimary pb-2'>
                                <h5 className='text-lg font-semibold text-webPrimary'>New Visitors</h5>

                                {/* Select All Times Option */}
                                <select className='border text-sm font-medium outline-none' value={visitors} onChange={handleVisitorsChange}>
                                    <option value="Today">Today</option>
                                    <option value="Last 7 Days">Last 7 Days</option>
                                    <option value="This Month">This Month</option>
                                    <option value="Last Month">Last Month</option>
                                    <option value="Last 3 Months">Last 3 Months</option>
                                    <option value="This Year">This Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="All Times">All Times</option>
                                </select>
                            </div>

                            <div className='flex justify-center items-center h-16 mt-5'>
                                <span className='text-3xl font-bold'>573</span>
                            </div>
                        </div>

                        {/* Customers */}
                        <div className='bg-[#F2F9FF] p-5 mt-5'>
                            <div className='flex justify-between items-center border-b border-webPrimary pb-2'>
                                <h5 className='text-lg font-semibold text-webPrimary'>Customers</h5>

                                {/* Select All Times Option */}
                                <select className='border text-sm font-medium outline-none' value={customers} onChange={handleCustomersChange}>
                                    <option value="Today">Today</option>
                                    <option value="Last 7 Days">Last 7 Days</option>
                                    <option value="This Month">This Month</option>
                                    <option value="Last Month">Last Month</option>
                                    <option value="Last 3 Months">Last 3 Months</option>
                                    <option value="This Year">This Year</option>
                                    <option value="2022">2022</option>
                                    <option value="2021">2021</option>
                                    <option value="All Times">All Times</option>
                                </select>
                            </div>

                            <div>
                                Customers
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AdminDashboard;