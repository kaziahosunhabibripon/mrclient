import React from 'react';
import DesignSlider from '../DesignSlider/DesignSlider';

const DesignCard = ({ portfolioData }) => {

    return (
        <div className='border rounded-sm px-3 py-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl font-semibold'>{portfolioData?.name}</h3>
                </div>
                <div>
                    <h3 className='text-webPrimary text-xl font-semibold cursor-pointer'>All Design</h3>
                </div>
            </div>

            <div>
                <DesignSlider singleData={portfolioData?.portfolio} />
            </div>
        </div>
    );
};

export default DesignCard;