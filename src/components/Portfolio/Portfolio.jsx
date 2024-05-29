import React from 'react';
// import img1 from '../../../public/iamge/capture.JPG'
// import img2 from '../../../public/iamge/capture2.JPG'
import img1 from '../../../public/iamge/room-1.jpg'
import img2 from '../../../public/iamge/room-2.jpg'
import img3 from '../../../public/iamge/project1.jpg'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='relative  bg-[#1d1d1d] min-h-[600px]'>
            <div className="xl:mx-24 portfolio-container pt-16">
                <div className="">
                    <h2 className='text-7xl mb-5 text-[#ffdd40]'>My Projects</h2>
                    <hr />
                </div>
                <div className="grid xl:grid-cols-2 gap-16 mt-20">
                    <div className=" bg-black p-14 parent">
                        <div className="">
                            <img className='w-full child' src={img1} alt="" />
                        </div>
                        <div className="flex justify-between mt-10">
                            <h1 className='text-[#ffdd40] text-4xl uppercase'>Royal King Resort</h1>
                            <div className="flex gap-6">
                                <Link to={`https://github.com/rokonrkn/royelking-cllient`}><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <FaGithub className='text-5xl hover:text-[#ffdd40] ' />
                                </h1></Link>
                                <Link to={`https://66560dea1994c5609b55c4e8--royelking-resort.netlify.app/`}><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <AiOutlineGlobal className='text-5xl hover:text-[#ffdd40]' />
                                </h1></Link>
                            </div>
                        </div>
                        <p className='text-white text-2xl'>Create a fully functional royal king resort web site your <br /> vacation tour destination select and select your fevorite room then booking.  </p>
                    </div>
                    <div className=" bg-black p-14 parent">
                        <div className="">
                            <img className='w-full child' src={img1} alt="" />
                        </div>
                        <div className="flex justify-between mt-10">
                            <h1 className='text-[#ffdd40] text-4xl uppercase'>Home Movers</h1>
                            <div className="flex gap-6">
                                <Link to={`https://github.com/rokonrkn/home-movers-client`}><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <FaGithub className='text-5xl hover:text-[#ffdd40] ' />
                                </h1></Link>
                                <Link to={`https://6656fba920f20c8c1a2d8fcc--genuine-paletas-05f364.netlify.app/`}><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <AiOutlineGlobal className='text-5xl hover:text-[#ffdd40]' />
                                </h1></Link>
                            </div>
                        </div>
                        <p className='text-white text-2xl'>Create a fully functional home movers web site this is <br /> website fully dynamic</p>
                    </div>
                    {/* <div className=" bg-black p-14 parent">
                        <div className="">
                            <img className='w-full child' src={img1} alt="" />
                        </div>
                        <div className="flex justify-between mt-10">
                            <h1 className='text-[#ffdd40] text-4xl uppercase'>Kids School</h1>
                            <div className="flex gap-6">
                                <Link><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <FaGithub className='text-5xl hover:text-[#ffdd40] ' />
                                </h1></Link>
                                <Link><h1 className='bg-gray-400 p-4 rounded-full'>
                                    <AiOutlineGlobal className='text-5xl hover:text-[#ffdd40]' />
                                </h1></Link>
                            </div>
                        </div>
                        <p className='text-white text-2xl'>Create a fully functional kids school web site</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;