import React, { useState } from 'react';
import bg from '../assets/bg.jpg';
import insert from '../assets/insert.png';
import Navbar from './Navbar';

const InsertCardPage = ({ handleAccountNumber }) => {
    const [accountNumber, setAccountNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the parent element's function to handle the account number
        handleAccountNumber(accountNumber);
    };

    return (
        <>
            <Navbar style={{
                position: "realative",
                top: "0",
            }} />
            <div className="flex flex-col items-center justify-center" style={{
                background: `url(${bg})`,
                width: "80vw",
                height: "80vh",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0 0 10px 10px",
            }}>
                <div 
                style={{
                    borderRadius: "15px",
                    boxShadow: "0px 0px 20px 3px rgb(136 136 136 / 29%)",
                    border: "2px dotted #D89216",
                }}
                className='p-10 flex flex-col items-center justify-center'
                >
                    <h2 className="text-4xl font-bold mb-8 text-white">Wecome to KCT Bankers</h2>
                    <img src={insert} alt="insert" className="w-1/4 mb-8 mt-0 p-2 rounded" style={{
                        backdropFilter: "blur(10px)",
                    }} />
                    <form onSubmit={handleSubmit} className="w-64 flex flex-col">
                        <input
                            type="number"
                            id="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
                            placeholder='Enter your Account Number'
                        />
                        <button
                            type="submit"
                            className=" text-white font-bold py-2 px-4 items-center justify-center rounded-full"
                            style={{
                                color: "#D89216",
                                border: "2px solid #D89216",
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default InsertCardPage;