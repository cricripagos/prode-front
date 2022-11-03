import React, { useState } from "react";
import Link from 'next/link';

function Landing() {
  // Creating a function to connect user's wallet
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      // Checking if user have Metamask installed
      if (!ethereum) {
        // If user doesn't have Metamask installed, throw an error
        alert("Please install MetaMask");
        return;
      }

      // If user has Metamask installed, connect to the user's wallet
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      // At last save the user's wallet address in browser's local storage
      localStorage.setItem("walletAddress", accounts[0]);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Creating a hero component with black background and centering everything in the screen */}
      <section className="relative bg-black flex flex-col h-screen justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Decentralized
                </span>
                {" "} Qatar prode 

              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-400 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                FIFA WorldCup social betting in web3. 
                Play a tournament with your group of people. 
                Onboard friends to crypto with a fun excuse.
                Have fun winning and loosing.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                    <div className="rounded-md shadow">
                      <Link href="/blockchain" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">web3</Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href='/fixtures' className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">fixtures</Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href='/table' className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-blue-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">Table</Link>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
