import React from 'react'
import Treasurer from '../assets/ourThoughts/Treasurer.jpg'
import President from '../assets/ourThoughts/President.jpg'
function Our_thoughts() {
    return (
        // <Zoom>
            <div class=" flex flex-col items-center justify-center sm:p-0 sm:m-0">
                <div>
                    <h1 className='text-[red] text-center font-semibold sm:text-[20px] '>Our Thoughts</h1>
                </div><br /><br />
                <div class="row gap-[7rem]  justify-around items-center sm:w-[100%] w-[100%] sm:px-[10%] h-[280px]">
                    <div class="rounded-xl bg-white p-6 text-center sm:w-[350px] shadow-xl w-[500px] sm:px-0">
                        <div
                            class="mx-auto flex h-[100px] w-[100px] -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40 sm:h-[70px] sm:w-[70px]">
                                <img src={President} alt="" className='rounded-full ' />

                        </div>
                        <h1 class="text-darken mb-3 text-xl  lg:text-[20px] text-black sm:text-[16px]">Karthick M - President</h1>
                        <p class="px-4 text-gray-500 sm:text-[14px] text-[14px]"><span className='text-[red] font-semibold'>#SWARAM</span> is one big sprint among all the small steps with the great grandeur and glory that its has shown in all these years. <span className='text-[red] font-semibold'>#SWARAM</span> is an event that glimmers as joy and fun for everyone who has a role in it, be it us, the benefactors, the students, the audience, the celebrity-once you're a part of it be ready to be captivated and that's a word that you can take from me</p>
                    </div>
                    <div class="rounded-xl bg-white p-6 text-center shadow-xl w-[500px] sm:w-[350px] sm:p-0 h-[280px]">
                        <div
                            class="mx-auto flex h-[100px] w-[100px] -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40 sm:h-[70px] sm:w-[70px]">
                                <img src={Treasurer} alt="" className='rounded-full' />

                        </div>
                        <h1 class="text-darken mb-3 text-xl  lg:text-[20px] text-black sm:text-[16px]">Shreeram P V - Treasurer</h1>
                        <p class="px-4 text-gray-500 sm:text-[14px] text-[14px]">With a mind and heart of joy we feel contended and elated. That euphoric feeling is exactly what is waiting for you guys at <span className='text-[red] font-semibold'>#SWARAM</span>. The crowd filled with happiness and laughter is also going to bring smiles in the faces of many under-privileged who are going to be helped under the <span className='text-[red] font-semibold'>#SWARAM</span> fund.</p>
                    </div>
                    


                </div>

            </div>

        // </Zoom>
    )
}

export default Our_thoughts