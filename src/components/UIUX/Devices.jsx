export const DashboardDevices = () => {
    return (
        <div className='w-full h-screen grid grid-cols-7 font-[Poppins]'>
            {/* Sidebar colum, 1st colum, consist of smart home button, dashboard button, message button, devices button, settings button */}
            {/* side bar background */}
            <div className="sidebar col-span-1 flex top-0 bottom-0 h-screen left-0 p-2 text-center bg-[#09006F]  rounded-2xl">

                <div className="relative text-gray-100 text-xl">
                    {/* smart home button */}
                    <div className="p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <button type="button" className="ml-1">Smart Home</button>
                        </h1>
                    </div>

                    {/* dashboard button */}
                    <div className="p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                            <button type="button" className="ml-1">Dashboard</button>
                                                        
                        </h1>
                    </div>

                    {/* message button */}
                    <div className="p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <button type="button" className="ml-1">Messages</button>
                            
                        </h1>
                    </div>

                    {/* devices button */}
                    <div className="p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                            </svg>
                        <button type="button" className="ml-1">Devices</button>
                        </h1>
                    </div>

                    {/* settings button */}
                    <div className="p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <button type="button" className="ml-1">Settings</button>
                        </h1>
                    </div>

                    {/* Log out button */} 
                    <div className="absolute bottom-2 p-2.5 mt-6 flex items-center">
                        <h1 className="flex font-bold text-gray-200 text-[15px] ml-3 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                                <path fill="none" stroke="#e51f1f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                d="M22.5 4.742a13 13 0 1 1-13 0M16 3v10"/>
                            </svg>
                            <button type="button" className="ml-1">Log out</button>
                        </h1>
                    </div>
                </div>
            </div>

            {/* 2rd colum: search bar, hello boss, temperature line chart, camera screens in house */}
            <div className="h-screen flex-1 m-4 col-span-4">

                {/* search bar */}
                <div className="w-full max-auto mt-2 mb-2">
                    <div className="relative shadow-lg">
                        <div className="absolute search-icon inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>

                        <input type="search" id="search" className="block px-10 w-full p-4 ps-10 border-gray-400 rounded-2xl end-1.5 focus:outline-[#342aa1]" />
                        <button type="submit" className="text-white text-lg bg-gray-500 hover:bg-[#09006F] px-8 py-[8px] rounded-2xl absolute end-1.5 bottom-1.5">Search</button>
                    </div>
                </div>

                {/* Air conditioner section */}
                <div className='relative bg-slate-300 rounded-3xl'>

                </div>

                {/* Devices section */}
                <div className="relative grid grid-cols-2 grid-row-2 text-xl bg-slate-300 rounded-3xl">
                    {/* Temperature button */}
                    <div className='m-4 bg-[#09006F] rounded-2xl text-white'>
                        <div className='grid grid-cols-2 m-4'>
                            <div className='justify-center items-center text-left'>
                                <button type="button">Turn on</button>
                            </div> 
                            <div className='justify-center items-center flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
                                    <path fill="#0ff017" d="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm-10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z">
                                        <animate fill="freeze" attributeName="d" dur="0.2s" values="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm-10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z;M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/>
                                    </path>
                                </svg>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 m-4">
                            <div className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                                    <path fill="currentColor" 
                                        d="M20 10h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-10-1.816V7H8v13.184a3 3 0 1 0 2 0"/>
                                    <path fill="currentColor" 
                                        d="M30 4H12.974A4.983 4.983 0 0 0 4 7v11.11a7 7 0 1 0 10 0V7a5 5 0 0 0-.101-1H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"/>
                                </svg>
                            </div>
                            
                            <div className="justify-center items-center text-center">
                                <h1 className=''>Temperature</h1>
                            </div>
                        </div>
                    </div>

                    {/* Lights button */}
                    <div className='m-4 ml-0 mb bg-slate-400 rounded-2xl text-white'>
                        <div className='grid grid-cols-2 m-4'>
                            <div className='justify-center items-center text-left'>
                                <button type="button">Turn off</button>
                            </div> 
                            <div className='justify-center items-center flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
                                <path fill="black" d="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z">
                                    <animate fill="freeze" attributeName="d" dur="0.2s" values="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z;M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm-10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/>
                                </path>
                            </svg>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 m-4">
                            <div className="justify-center items-center">
                                <svg class="h-8 w-8 currentColor"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                                </svg>
                            </div>
                            <div className="justify-center items-center text-center">
                                <h1>Light</h1>
                            </div>
                        </div>
                    </div>

                    {/* Air conditioner button */}
                    <div className='m-4 mt-0 bg-slate-400 rounded-2xl text-white'>
                        <div className='grid grid-cols-2 m-4'>
                            <div className='justify-center items-center text-left'>
                                <button type="button">Turn off</button>
                            </div> 
                            <div className='justify-center items-center flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
                                <path fill="black" d="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z">
                                    <animate fill="freeze" attributeName="d" dur="0.2s" values="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z;M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm-10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/>
                                </path>
                            </svg>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 m-4">
                            <div className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class='size-8' viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                    <path d="M8 16a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v4M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <path d="M7 13v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>
                                    </g>
                                </svg>
                            </div>
                            
                            <div className="justify-center items-center text-center">
                                <h1>Air conditioner</h1>
                            </div>
                        </div>
                    </div>

                    {/* Refrigerator button */}
                    <div className='m-4 mt-0 ml-0 bg-slate-400 rounded-2xl text-white'>
                        <div className='grid grid-cols-2 m-4'>
                            <div className='justify-center items-center text-left'>
                                <button type="button">Turn off</button>
                            </div> 
                            <div className='justify-center items-center flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
                                <path fill="black" d="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z">
                                    <animate fill="freeze" attributeName="d" dur="0.2s" values="M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z;M17 7a5 5 0 0 1 0 10H7A5 5 0 1 1 7 7h10Zm-10 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"/>
                                </path>
                            </svg>
                            </div>
                        </div>
                        

                        <div className="grid grid-cols-2 m-4">
                            <div className="justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                                    d="M5 6c0-1.886 0-2.828.586-3.414S7.114 2 9 2h6c1.886 0 2.828 0 3.414.586S19 4.114 19 6v14c0 .943 0 1.414-.293 1.707S17.943 22 17 22H7c-.943 0-1.414 0-1.707-.293S5 20.943 5 20zm3 1h.009M8 13h.009M5 10h14" color="currentColor"/>
                                </svg>
                            </div>

                            <div className="justify-center items-center text-center">
                                <h1>Refrigerator</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 3nd colum: */}
            <div className="h-full flex-1 m-4 col-span-2">
                
                {/* Account current: Sir Alex Ferguson */}
                <div className="relative">
                    <img src="src\components\images\sir_alex.jpg" alt="Sir Alex Ferguson" 
                    className='w-16 self-start aspect-square rounded-full object-cover'/>
                    <div className='absolute font-bold text-xl inset-y-0 flex start-[5rem] items-center '>
                        <p className="mr-[3rem]">Sir Alex Ferguson</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                        </svg>
                    </div>
                </div>

                {/* Temperature section */}
                <div className='relative font-bold mt-4'>
                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                            <path fill="currentColor" 
                                d="M20 10h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-10-1.816V7H8v13.184a3 3 0 1 0 2 0"/>
                            <path fill="currentColor" 
                                d="M30 4H12.974A4.983 4.983 0 0 0 4 7v11.11a7 7 0 1 0 10 0V7a5 5 0 0 0-.101-1H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"/>
                        </svg>
                        
                        <h1 className='text-center text-xl ml-2'>Temperature</h1>
                    </div>
                
                    <h1 className='text-center text-3xl text-blue-700'>32 °C</h1>
                    <img src="src\components\images\daily-temperature-line-chart.png" alt="Temperature chart" 
                    className='mt-2 mb-2'/>
                </div>

                {/* Humidity section */}
                <div className="relative font-bold mt-4">
                    <div className="flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 30 30">
                            <path fill="currentColor" 
                            d="M7.56 17.19q0-1.32.72-3.03c.72-1.71 1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72c.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86s-.91 1.7-1.57 2.36s-1.45 1.19-2.37 1.58s-1.89.59-2.91.59c-1 0-1.95-.19-2.86-.57s-1.7-.89-2.36-1.55c-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93m2.26-2.93c0 .83.17 1.49.52 1.99c.35.49.88.74 1.59.74c.72 0 1.25-.25 1.61-.74c.35-.49.53-1.15.54-1.99c-.01-.84-.19-1.5-.54-2c-.35-.49-.89-.74-1.61-.74c-.71 0-1.24.25-1.59.74c-.35.5-.52 1.16-.52 2m1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32s.05-.16.09-.24s.09-.15.15-.18c.07-.04.14-.06.23-.06q.21 0 .33.12c.12.12.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52q-.015.18-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.34.34 0 0 1-.15-.18c-.04-.08-.07-.17-.09-.24c-.02-.08-.04-.19-.05-.32c-.01-.14-.02-.25-.02-.32zm.59 7.75h1.32l4.99-10.74h-1.35zm4.3-2.99c.01.84.2 1.5.55 2c.35.49.89.74 1.6.74c.72 0 1.25-.25 1.6-.74s.52-1.16.53-2c-.01-.84-.18-1.5-.53-1.99s-.88-.74-1.6-.74c-.71 0-1.25.25-1.6.74c-.36.49-.54 1.15-.55 1.99m1.57 0c0-.23 0-.4.01-.52q.015-.18.06-.45c.045-.27.09-.3.17-.38s.19-.12.33-.12q.135 0 .24.06c.07.04.12.1.16.19s.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32l-.05.32l-.1.24l-.16.19l-.24.06q-.21 0-.33-.12c-.12-.12-.14-.21-.17-.38q-.045-.27-.06-.45c-.015-.18-.01-.3-.01-.53"/>
                        </svg>
                        <h1 className='text-center text-xl ml-2'>Humidity</h1>
                    </div>
                        
                    <h1 className='text-center text-3xl text-blue-700'>92%</h1>
                    <img src="src\components\images\daily-humidity-chart.png" alt="Humidity chart" 
                    className="mt-1 mb-2"/>
                </div>
            </div>
        </div>
    )
}