import DesignCard from '@/components/TopDesign/DesignCard/DesignCard';
import React from 'react';

const TopDesign = ({ portfolioData }) => {

    return (
        <div>
            <DesignCard portfolioData={portfolioData[0]} />
        </div>
    );
};

export default TopDesign;