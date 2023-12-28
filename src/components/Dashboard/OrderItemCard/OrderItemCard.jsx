import React from 'react';

const OrderItemCard = ({ data }) => {

    const { id, projectImage, clientImage, clientName, price, time, status } = data;

    const handleView = (id) => {
        console.log(id);
    }

    return (
        <div className='flex justify-between items-center shadow border mb-5 p-3'>

            <div className='flex items-center gap-5'>
                <img className='w-20' src={projectImage} alt="" />
                <img className='w-8 h-8 rounded-full' src={clientImage} alt='Client' />
                <h4 className='text-sm font-semibold'>{clientName}</h4>
            </div>

            <div className='text-center'>
                <span className='text-sm'>Price</span>
                <h4 className='text-sm font-semibold'>${price}</h4>
            </div>

            <div className='text-center'>
                <span className='text-sm'>Time</span>
                <h4 className='text-sm font-semibold'>{time}</h4>
            </div>

            <div className='text-center'>
                <span className='text-sm'>Status</span>
                <h4 className={`text-sm font-semibold ${status === 'Revision' ? 'text-red-500' : status === 'Ongoing' ? 'text-green-500' : status === 'Waiting' ? 'text-purple-500'  : status === 'Delivered'  ? 'text-teal-500' : status === 'Completed'  ? 'text-green-500'  : status === 'Canceled' ? 'text-red-600' : ''}`}>
                    {status}
                </h4>
            </div>

            <button onClick={() => handleView(id)} className='text-sm text-webPrimary font-semibold'>View</button>
        </div>
    );
};

export default OrderItemCard;