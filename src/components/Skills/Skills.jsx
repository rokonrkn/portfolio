import React from 'react';
import './skill.css'
import { FaBootstrap, FaChrome, FaCss3Alt, FaFigma, FaGitSquare, FaGithubSquare, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiAdobephotoshop, SiExpress } from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';
import Marquee from "react-fast-marquee";
import { VscVscode } from 'react-icons/vsc';
import { BiLogoNetlify } from 'react-icons/bi';

const Skills = () => {
    return (
        <div className='relative bg-[#1d1d1d] min-h-[600px]'>
            <div className="xl:mx-24 sill-container pt-16">
                <div className="">
                    <h2 className='text-7xl mb-5 text-[#ffdd40]'>My Skills</h2>
                    <hr />
                </div>
                <div className="grid xl:grid-cols-6 skills  xl:gap-20 mt-20">
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><FaHtml5 className=' text-[70px] icon-centr  xl:ml-[44px]  text-[#C40C0C]' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>HTML5</h4>
                    </div>
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><FaCss3Alt className=' text-[70px] icon-centr xl:ml-[44px]  text-blue-700' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>CSS3</h4>
                    </div>
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><FaBootstrap className=' text-[70px] icon-centr xl:ml-[44px]  text-[#10439F]' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>Bootstrap</h4>
                    </div>
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><RiTailwindCssFill className=' text-[70px] icon-centr xl:ml-[44px]  text-teal-500' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>Tailwind</h4>
                    </div>
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><RiJavascriptFill className=' text-[70px] icon-centr xl:ml-[44px]  text-yellow-500' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>JavaScript</h4>
                    </div>
                    <div className="border__all text-center py-10 shadow-2xl">
                        <h2><FaReact className=' text-[70px] icon-centr xl:ml-[44px]  text-blue-500' /></h2>
                        <h4 className='text-4xl mt-6 text-white'>React js</h4>
                    </div>
                </div>
                <div className="headline">
                    <div className="grid xl:grid-cols-3 skills  xl:gap-20 mt-20">
                        <div className="border__all text-center py-10 shadow-2xl">
                            <h2><FaNodeJs className=' text-[70px]  icon-centr xl:ml-[44px]  text-[#3c873a]' /></h2>
                            <h4 className='text-4xl mt-6 text-white'>Node js</h4>
                        </div>
                        <div className="border__all text-center py-10 shadow-2xl">
                            <h2><SiExpress className=' text-[70px] icon-centr xl:ml-[44px]  text-[#68a063]' /></h2>
                            <h4 className='text-4xl mt-6 text-white'>Express js</h4>
                        </div>
                        <div className="border__all text-center py-10 shadow-2xl">
                            <h2><IoLogoFirebase className=' text-[70px] icon-centr xl:ml-[44px]  text-orange-500' /></h2>
                            <h4 className='text-4xl mt-6 text-white'>Firebase</h4>
                        </div>
                    </div>
                    <div className="mt-20 tools">
                        <h2 className='text-4xl text-[#ffdd40]'>Tools: </h2>
                        <Marquee>
                            <div className="grid grid-cols-7 gap-7 mt-5">
                                <div className="text-center  shadow-2xl">
                                    <h2><FaGitSquare  className=' text-[55px]  md:ml-[60px] sm:ml-[20px] xl:ml-[24px]  text-[#C40C0C]' /></h2>
                                </div>
                                <div className="text-center shadow-2xl">
                                    <h2><VscVscode className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-blue-700' /></h2>
                                </div>
                                <div className="text-center  shadow-2xl">
                                    <h2><FaFigma className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-[#10439F]' /></h2>
                                </div>
                                <div className="text-center  shadow-2xl">
                                    <h2><SiAdobephotoshop  className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-[#10439F]' /></h2>
                                </div>
                                <div className="text-center  shadow-2xl">
                                    <h2><BiLogoNetlify   className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-[#10439F]' /></h2>
                                </div>
                                <div className="text-center  shadow-2xl">
                                    <h2><FaGithubSquare  className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-[#10439F]' /></h2>
                                </div>
                                <div className="text-center  shadow-2xl">
                                    <h2><FaChrome   className=' text-[55px] md:ml-[60px] sm:ml-[24px] xl:ml-[24px]  text-[#10439F]' /></h2>
                                </div>
                            </div> 
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;