import React from 'react'

export default function About() {
    return (
        <div className="about-section h-screen flex justify-center items-center">
            <div className="w-4/5 flex flex-col justify-center items-center text-white pt-10">
                <div className="about-text text-center">
                    <h2 className='uppercase font-bold text-4xl'>about component</h2>
                    <div className=" flex justify-center items-center mt-5 gap-3">
                        <p className='w-20 h-1 bg-white'></p>
                        <i className="fa-solid fa-star star text-white text-xl"></i>
                        <p className='w-20 h-1 bg-white'></p>
                    </div>
                </div>
                <div className="text flex justify-center items-center mt-10">
                    <div className="div">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="div">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
