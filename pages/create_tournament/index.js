import React from 'react';
import Button from '@components/Button/Button';
import Blur from '@components/Blur/Blur';

function CreateTournament() {
    return (
        <title>Create Tournament</title>,
        <div class="bg-black" style={{height: "100%"}}>
            <div style={{display: "flex", justifyContent: 'right', padding: 30}}>
                <Button style={{justifyContent: 'right'}}>0x3e....34kd3</Button>
            </div>
            <div className="flex justify-center h-max relative">
                <div className="bg-gradient-to-tr from-[#48316D] to-[#1F1F20] w-[450px] h-[950px] justify-center p-[35px] rounded-md mb-[50px]">
                    <h1 class="text-[36px] text-[#00E5AE]">Create your tourney</h1>
                    <p className="text-[22px] font-light text-white pt-[30px]">Name</p>
                    <input type="text" name="email" class="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Mundialito" />
                    <h3 className="text-[22px] text-white pt-[30px]">Buy-in</h3>
                    <div className='relative'>
                        <input type="text" name="email" class="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 relative" placeholder="10 DAI">
                        
                        </input>

                    </div>
                    <h3 className="text-[22px] text-white pt-[30px]">Earnings</h3>
                    <div className="bg-[#262333] w-full h-[160px] rounded-md mt-[10px] p-[20px] drop-shadow-md">
                        <div class="flex grid grid-cols-2">
                            <div className="text-[22px] font-light text-white pt-[10px] col-start-1">50%</div>
                            <div className="text-[22px] font-light text-white pt-[10px] col-end-3">Winner</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-1">20%</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-end-3">Runner up</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-1">10%</div>
                            <div className="text-[22px] font-light text-white pt-[20px] col-start-2">3rd place</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-end">
                        <div className="text-[22px] text-white pt-[30px]">Hidden Tourney</div>

                    </div>
                    <div class="grid grid-cols-5">
                        <h3 className="col-start-1 col-span-5 text-[22px] text-white pt-[30px] pb-[10px]">UBI donation</h3>
                        
                        <input id="steps-range" type="range" min="0" max="100" value="50" step="25" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-[#7C3AED] col-start-1 col-span-5 mt-[15px]" enabled/>

                        <div className="col-start-1 pt-[10px]">5%</div>
                        <div className="col-start-2 pt-[10px]">25%</div>
                        <div className="col-start-3 pt-[10px]">50%</div>
                        <div className="col-start-4 pt-[10px]">75%</div>
                        <div className="col-start-5 pt-[10px]">100%</div>
                    </div>
                    <div className="grid grid-cols-3 items-end">
                        <div className="text-[22px] text-white pt-[30px]">Format</div>
                        <label for="default-toggle2" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="default-toggle2" class="sr-only peer" />
                            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#E4168F]"></div>
                        </label>
                    </div>
                    <h3 className="text-[22px] text-white pt-[30px]">Allowed addresses</h3>
                    <input type="text" name="email" class="mt-1 px-3 py-2 mt-[10px] bg-[#262333] drop-shadow-md placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="0x1973077Cc2Bac3C6622cf2D8383D71124A268acc" />
                    <div style={{display: "flex", justifyContent: 'center'}}>
                        <Button style={{justifyContent: 'center', margin:30}}>Launch</Button>
                    </div>
                </div>
                <Blur className="absolute bottom-0 left-0" />
            </div>
        
        </div>
    )
  }
  
  export default CreateTournament
