import React from 'react';
import DesignSlider from '../DesignSlider/DesignSlider';

const DesignCard = ({ singlePortfolioData }) => {

    return (
        <div className='border rounded-sm p-3 mb-4'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl font-semibold'>{singlePortfolioData?.name}</h3>
                </div>
                <div>
                    <h3 className='text-webPrimary text-xl font-semibold cursor-pointer'>All Design</h3>
                </div>
            </div>

            <div>
                {/* {
                    portfolioData?.portfolio.map((singleData, _idx) => (
                        <DesignSlider key={_idx} singleData={singleData} />
                    ))
                } */}

                <DesignSlider portfolio={singlePortfolioData?.portfolio} />
            </div>
        </div>
    );
};

export default DesignCard;