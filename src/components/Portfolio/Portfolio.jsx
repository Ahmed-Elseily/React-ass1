import React from 'react'
import pic1 from "../../assets/pics/poert1.png"
import pic2 from "../../assets/pics/port2.png"
import pic3 from "../../assets/pics/port3.png"
export default function Portfolio() {
    return (
        <div className="portfolio-section  flex flex-col justify-center items-center pt-16">
            <div className="contact-text text-center pt-20">
                    <h2 className='text-slate-800 uppercase text-4xl font-bold'>portfolio component</h2>
                    <div className=" flex justify-center items-center mt-5 gap-3">
                        <p className='w-20 h-1 bg-slate-800'></p>
                        <i className="fa-solid fa-star star text-slate-800 text-xl"></i>
                        <p className='w-20 h-1 bg-slate-800'></p>
                    </div>
                </div>
            <div className="container flex flex-wrap justify-center items-center py-5">


                {/* <!-- Modal toggle --> */}
                
                <div   data-modal-target="default-modal" data-modal-toggle="default-modal" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic1} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic1} alt="" />
                           

                        </div>
                    </div>
                </div>
                {/* <!-- Modal toggle --> */}
                
                <div  data-modal-target="default-modal2" data-modal-toggle="default-modal2" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic2} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal2" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic2} alt="" />
                           

                        </div>
                    </div>
                </div>
                {/* <!-- Modal toggle --> */}
                
                <div  data-modal-target="default-modal3" data-modal-toggle="default-modal3" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic3} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal3" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic3} alt="" />
                           

                        </div>
                    </div>
                </div>
                <div   data-modal-target="default-modal" data-modal-toggle="default-modal" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic1} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic1} alt="" />
                           

                        </div>
                    </div>
                </div>
                {/* <!-- Modal toggle --> */}
                
                <div  data-modal-target="default-modal2" data-modal-toggle="default-modal2" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic2} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal2" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic2} alt="" />
                           

                        </div>
                    </div>
                </div>
                {/* <!-- Modal toggle --> */}
                
                <div  data-modal-target="default-modal3" data-modal-toggle="default-modal3" className="block p-5 text-white w-1/3 rounded-xl overflow-hidden cursor-pointer" type="button">
                    <img className='rounded-xl' src={pic3} alt="" />
                </div>

                {/* <!-- Main modal --> */}
                <div id="default-modal3" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-blue-400 bg-opacity-50">
                    <div className="relative p-4 w-full max-w-2xl max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <img className='w-full' src={pic3} alt="" />
                           

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
