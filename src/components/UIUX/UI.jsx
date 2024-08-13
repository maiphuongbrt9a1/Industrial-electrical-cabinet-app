export const DashboardHome = () => {
    return (
        <div className="w-full h-screen grid grid-cols-7 font-[Poppins]">
        
            {/* Sidebar colum, 1st colum: consist of smart home button, dashboard button, message button, devices button, settings button */}
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
                
                {/* hello boss */}
                <div className="relative">
                    <img src="src\components\images\good_afternoon.jpg" alt="Good Afternoon" 
                    className="rounded-2xl self-start aspect-[3/1] object-cover"/>
                    <div className="absolute text-white bottom-2 left-2">
                        <h1>Hi, Alex! Good afternoon...</h1>
                    </div>
                </div>

                {/* temperature line chart */}
                <div className="relative mt-2 bg-slate-300 rounded-2xl">
                    <div className='w-full max-auto'>
                        <div className='relative items-center'>
                            <div className='mb-2 flex font-bold'>
                                <svg class="h-6 w-6 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" 
                                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z"/>  
                                  <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  
                                  <line x1="10" y1="9" x2="14" y2="9" />
                                </svg>
                                <p className='ml-1'>Temperature</p>  
                            </div>

                            <div className='flex font-bold absolute inset-y-0 end-1.5 bottom-1.5'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                <p className='ml-1'>This year</p>
                            </div>
                        </div>
                    </div>

                    <img src="src\components\images\temperature_line_chart.png" alt="Temperature line chart..." 
                    className="rounded-2xl self-start aspect-[4/2] object-cover"/>
                    
                </div>

                {/* camera screens in house */}
                <div className='relative bg-slate-300 rounded-2xl'>
                    {/* title */}
                    <div className='w-full max-auto'>
                        <div className='relative items-center'>

                            <div className="mb-2 flex font-bold ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                                <p className='ml-1'>Camera</p>
                            </div>

                            <div className="flex font-bold absolute inset-y-0 end-1.5 bottom-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className='ml-1'>Setting camera</p>
                            </div>
                        </div>
                    </div>

                    {/* screen for every room */}
                    <div className='relative grid grid-cols-3 rounded-2xl'>
                        <div className="flex mr-2">
                            <img src="src\components\images\bedroom.jpg" alt="Bedroom" className='rounded-2xl'/>
                            <div className="absolute text-white bottom-0 ml-4">
                                <h1>Bedroom</h1>
                            </div>
                        </div>

                        <div className="flex mr-2">
                            <img src="src\components\images\kitchen.jpg" alt="Kitchen" className='rounded-2xl'/>
                            <div className="absolute text-white bottom-0 ml-4">
                                <h1>Kitchen</h1>
                            </div>
                        </div>
                        
                        <div className="flex">
                            <img src="src\components\images\living_room.jpg" alt="Living Room" className='rounded-2xl'/>
                            <div className="absolute text-white bottom-0 ml-4">
                                <h1>Living Room</h1>
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

                {/* Members of application */}
                <div className='relative mt-2 bg-slate-300 rounded-2xl'>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <h1 className='ml-2 font-bold mr-[5rem]'>Members</h1>                        
        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                        <h1 className='ml-2 font-bold hover:text-blue-600'>Add member</h1>
                    </div>

                    {/* User List */}
                    <div className='relative grid grid-cols-5 gap-2 mt-2 mb-2 w-full max-auto'>
                        <div className='text-center'>
                            <img src="src\components\images\user1.jpg" alt="User 1" 
                            className='w-16 self-start aspect-square rounded object-cover'/>
                            <h1>Mr.Lee</h1>
                        </div>

                        <div className='text-center'>
                            <img src="src\components\images\user2.jpg" alt="User 2" 
                            className='w-16 self-start aspect-square rounded object-cover'/>
                            <h1>Mr. Han</h1>
                        </div>

                        <div className='text-center'>
                            <img src="src\components\images\sir_alex.jpg" alt="User 3" 
                            className='w-16 self-start aspect-square rounded object-cover'/>
                            <h1>Mr. Alex</h1>
                        </div>

                        <div className='text-center'>
                            <img src="src\components\images\user3.jpg" alt="User 4" 
                            className='w-16 self-start aspect-square rounded object-cover'/>
                            <h1>Ms. Tho</h1>
                        </div>

                        <div className='text-center'>
                            <img src="src\components\images\user4.jpg" alt="User 5" 
                            className='w-16 self-start aspect-square rounded object-cover'/>
                            <h1>Ms. Thi</h1>
                        </div>
                    </div>
                </div>

                {/* Notification box */}
                <div className='relative mt-2 bg-slate-300 rounded-2xl'>
                    <div className='flex font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" 
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>
                        <h1 className='ml-2'>Notifications</h1>
                    </div>

                    <div className='text-center'>
                        <p>+ [10-05-2024] Mr. Lee turn off light.</p>
                        <p>+ [22-06-2024] Mr. Han turn off light.</p>
                        <p>+ [22-07-2024] Ms. Thi turn off light.</p>
                        <p>+ [30-07-2024] Mr. Lee turn off door.</p>
                        <p>+ [02-08-2024] Ms. Alex turn off fan.</p>
                    </div>
                </div>

                {/*Set living room Door */}
                <div className='relative mt-2 bg-slate-300 rounded-2xl'>
                    <div className='flex font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                        <p className='ml-2'>Doors</p>
                    </div>

                    <div className='relative grid grid-cols-2 font-bold rounded-2xl gap-4'>
                        <div className='relative mt-2 ml-6 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Open door</button>
                            <div className='absolute top-[40%] right-[40%] bg-green-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\open_door.png" alt="open door" 
                            className=' w-32 self-start aspect-square rounded object-cover'/>
                        </div>

                        <div className='relative mt-2 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Close door</button>
                            <div className='absolute top-[40%] right-[50%] bg-red-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\close_door.jpeg" alt="turn off" 
                            className='w-32 self-start aspect-square rounded object-cover'/>
                        </div>
                    </div>
                </div>

                {/*Set living room light */}
                <div className='relative mt-2 bg-slate-300 rounded-2xl'>
                    <div className='flex font-bold'>
                        <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                        <p className='ml-2'>Lights</p>
                    </div>

                    <div className='relative grid grid-cols-2 font-bold rounded-2xl gap-4'>
                        <div className='relative mt-2 ml-6 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Turn on</button>
                            <div className='absolute top-[40%] right-[40%] bg-green-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\hanging_light.jpg" alt="turn on light" 
                            className=' w-32 self-start aspect-square rounded object-cover'/>
                        </div>

                        <div className='relative mt-2 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Turn off</button>
                            <div className='absolute top-[40%] right-[50%] bg-red-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\wall_lamp.jpg" alt="turn off light" 
                            className='w-32 self-start aspect-square rounded object-cover'/>
                        </div>
                    </div>
                </div>

                {/*Set living room Air conditioner */}
                <div className='relative mt-2 bg-slate-300 rounded-2xl'>
                    <div className='flex font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" class='size-6' viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                            <path d="M8 16a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v4M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <path d="M7 13v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>
                            </g>
                        </svg>
                        <p className='ml-2'>Air Conditioner</p>
                    </div>

                    <div className='relative grid grid-cols-2 font-bold rounded-2xl gap-4'>
                        <div className='relative mt-2 ml-6 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Turn on</button>
                            <div className='absolute top-[40%] right-[40%] bg-green-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" 
                                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\air_conditioner.jpg" alt="turn on air conditioner" 
                            className=' w-32 self-start aspect-square rounded object-cover'/>
                        </div>

                        <div className='relative mt-2 mb-2'>
                            <button type="button" className='absolute ml-8 bottom-0 text-white'>Turn off</button>
                            <div className='absolute top-[40%] right-[50%] bg-red-500 rounded-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>

                            </div>
                            <img src="src\components\images\air_conditioner.jpg" alt="turn off air conditioner" 
                            className='w-32 self-start aspect-square rounded object-cover'/>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

    )
}
