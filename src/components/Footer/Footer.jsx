
export default function Footer() {
    return (
        <>
            <div className="footer pb-11 w-full bg-gray-700  text-white py-20">
                <div className="flex justify-between items-center text-center">
                    <div className="text-center w-1/3">
                        <h3 className="font-bold text-xl">LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="text-center w-1/3">
                        <h3 className="font-bold text-xl">AROUND THE WEB</h3>
                        <div className="icons flex justify-center items-center gap-3 mt-2">
                            <div className="icons-inner flex justify-center items-center">
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </div>
                            <div className="icons-inner flex justify-center items-center">
                                <i className="fa-brands fa-x-twitter text-xl"></i>
                            </div>
                            <div className="icons-inner flex justify-center items-center">
                                <i className="fa-brands fa-linkedin text-xl"></i>
                            </div>
                            <div className="icons-inner flex justify-center items-center">
                                <i className="fa-solid fa-globe text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <div className="text-center w-1/3">
                        <h3 className="font-bold text-xl">ABOUT FREELANCER</h3>
                        <p className="w-80 mx-auto">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
                
            </div>
            <div className="second-footer bg-gray-800 w-full bottom-0 py-5">
                    <div className="text-center text-white">
                        <p>Copyright © Your Website 2021</p>
                    </div>

                </div>
            
            
            
            {/* <div className="second-footer bg-gray-800 bottom-0  w-full">
                <div className="text-center text-white pb-5 pt-3">
                    <p>Copyright © Your Website 2021</p>
                </div>

            </div> */}
        </>
    )
}
