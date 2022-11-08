import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


function SearchTournament() {
  return (
    <div>
        <div> 
            <form className='flex flex-col flex-grow'>
                <h2 className='pl-10'>Search tournament</h2>
                <div className='flex w-full mt-5 px-5 py-3'>
                    <input type="text" className='rounded-md flex-grow max-w-xs text-[#262333] focus:outline-none'/>
                    <MagnifyingGlassIcon className="h-5 m-2 bg-[#E4168F]" />
                    <h2>or</h2>
                    <button className='bg-green-300 text-[#262333]' type="submit">Create your own</button>
                </div>
            </form>
        </div>
        <div>
            <div>
                <h2 className='pl-10 mt-5'>List of tourneys</h2>
            </div>
            <div>
                <button className='bg-[#333647] text-white' type="submit">Create your own</button>
                <button className='bg-[#333647] text-white' type="submit">Create your own</button>
                <button className='bg-[#333647] text-white' type="submit">Create your own</button>
            </div>
        </div>
        
        <div class="rounded-t-xl items-center overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
  
            <table class="table-auto">
                <thead>
                <tr>
                    <th class="px-4 py-2 text-emerald-600">Title</th>
                    <th class="px-4 py-2 text-emerald-600">Author</th>
                    <th class="px-4 py-2 text-emerald-600">Views</th>
                    <th class="px-4 py-2 text-emerald-600">Views</th>
                    <th class="px-4 py-2 text-emerald-600">Views</th>
                    <th class="px-4 py-2 text-emerald-600">Views</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Intro to CSS</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">858</td>
                </tr>
                <tr class="bg-emerald-200">
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">A Long </td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Adam</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">112</td>
                </tr>
                <tr>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Intro to JavaScript</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">Chris</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                    <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">1,280</td>
                </tr>
                
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default SearchTournament