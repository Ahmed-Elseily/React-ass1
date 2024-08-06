import React, { useState } from 'react'
import pic1 from "../../assets/pics/poert1.png"
import pic2 from "../../assets/pics/port2.png"
import pic3 from "../../assets/pics/port3.png"
export default function Portfolio() {

    const [modal, setModal] = useState(false)

    const [selectedImg, setSelectedImg] = useState("")

    const [picArray, setPicArray] = useState([
        { img: pic1, id: 1 },
        { img: pic2, id: 2 },
        { img: pic3, id: 3 },
        { img: pic1, id: 4 },
        { img: pic2, id: 5 },
        { img: pic3, id: 6 },
    ])

    const handleModal = (e) => {
        if (e.target == e.currentTarget) {
            setModal(false)
        }
    }
    return (
        <>
            <div className="portfolio-section pt-20">
            <div className="contact-text text-center p-16">
                    <h2 className='text-slate-800 uppercase text-4xl font-bold'>Portfolio section</h2>
                    <div className=" flex justify-center items-center mt-5 gap-3">
                        <p className='w-20 h-1 bg-slate-800'></p>
                        <i className="fa-solid fa-star star text-slate-800 text-xl"></i>
                        <p className='w-20 h-1 bg-slate-800'></p>
                    </div>
                </div>
                <div className="container flex flex-wrap justify-center items-center ">
                    {picArray.map((pic) => {
                        return (
                            <div key={pic.id} onClick={() => {
                                setSelectedImg(pic.img)
                                setModal(true)
                            }} className="card w-1/3 p-5 ">
                                <div className="card-inner relative ">
                                    <img className='w-full rounded-xl' src={pic.img} alt="" />
                                    <div className="card-cover flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 hover:bg-green-500 duration-300 opacity-50 group">
                                        <i className="fa-solid fa-plus !hidden text-white text-8xl group-hover:!block duration-500"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div onClick={handleModal} className={`${modal ? "block" : "hidden"} big-layer fixed z-20 top-0 bottom-0 left-0  right-0 bg-blue-500 bg-opacity-50 flex justify-center items-center`}>
                <img width={600} src={selectedImg} alt="" />
            </div>

        </>
    )
}
