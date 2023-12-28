import DesignCard from '@/components/TopDesign/DesignCard/DesignCard';
import React, { useEffect, useState } from 'react';

const TopDesign = () => {

    const [portfolioData, setPortfolioData] = useState([]);

    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => {
                const topFive = data.slice(0, 5); // Extracts the top 5 items
                setPortfolioData(topFive);
            });
    }, []);

    return (
        <div>
            {
                portfolioData.map((singlePortfolioData, _idx) => (
                    <DesignCard key={_idx} singlePortfolioData={singlePortfolioData} />
                ))
            }
        </div>
    );
};

export default TopDesign;