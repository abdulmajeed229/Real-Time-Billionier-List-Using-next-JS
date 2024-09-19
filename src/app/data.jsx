import React, { useEffect, useState } from 'react';

function Data() {
    const [billionaires, setBillionaires] = useState([]);

    useEffect(() => {
        fetchBillionaires();
    }, []);

    const url = 'https://forbes400.onrender.com/api/forbes400/';

    const fetchBillionaires = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setBillionaires(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="p-4">
            {billionaires.length > 0 ? (
                billionaires.map(billionaire => {
             
                    const finalWorth = parseFloat(billionaire.finalWorth);
                    const worthInBillions = (finalWorth / 1_000).toFixed(2); 

                    return (
                        <div key={billionaire.rank} className=" text-black flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                            <img src={billionaire.squareImage} alt={billionaire.personName} className="w-24 h-auto mr-4" />
                            <div className="flex-grow">

                                <div className='flex justify-between'>
                                <p className='font-extrabold'> {billionaire.rank}</p>

                                <h3 className="text-lg font-semibold">{billionaire.personName}</h3>
                                <p className="text-lg font-semibold">${worthInBillions} B</p>
                           
                                <p className="text-lg font-semibold"> {billionaire.source}</p>
                                <p className="text-lg font-semibold"> {billionaire.countryOfCitizenship}</p>
                               
                               
                                </div>
                                
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}

export default Data;
