import React from 'react'
import pic from "../../assets/pics/avataaars.svg"
export default function Home() {
    return (
        <div className="home flex justify-center items-center h-screen">
            <div className="container flex flex-col justify-center items-center">
                <div className="img flex justify-center">
                    <img className='' width={250} src={pic} alt="" />
                </div>
                <div className="home-text pt-7 text-center">
                    <h2 className='uppercase text-white text-4xl font-bold'>start Framework</h2>
                    <div className=" flex justify-center items-center mt-5 gap-3">
                        <p className='w-20 h-1 bg-white'></p>
                        <i className="fa-solid fa-star star text-white text-xl"></i>
                        <p className='w-20 h-1 bg-white'></p>
                    </div>
                    <p className='text-white mt-5'>Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </div>


        </div>
    )
}
