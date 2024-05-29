import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import '../Header/Header.css'
import TsParticles from '../Particles/TsParticles';
import resume from '../../../public/iamge/Rokonujjaman_CV1.pdf'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Home.css'
import { VscGithub } from 'react-icons/vsc';

const Home = () => {

    // const handleType = (count: number) => {
    //     // access word count number
    //     console.log(count)
    // }

    // const handleDone = () => {
    //     console.log(`Done after 5 loops!`)
    // }

    return (
        <div className=''>
            <div className="relative xl:mx-60 sm:mx-28">
                <div className="">
                    <div className="xl:mt-80 sm:mt-36 textstyle flex justify-center">
                        <h3 className='text-yellow-500 text-7xl ' >Hello, <span className=''> I'm </span></h3>
                        <h3 className='text-yellow-500 text-7xl ml-10'>Rokonujjaman.</h3>

                    </div>
                    <div className='App flex justify-center'>
                        <h1 style={{ paddingTop: '0rem', color: 'red', margin: 'auto 0', fontWeight: 'normal', fontSize: '40px' }}>
                            <span>I'm a</span>{' '}
                            <span style={{ color: 'yellow', fontSize: '40px' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Web Developer', 'Front End Developer', 'Mern Stack Developer', 'React Developer!']}
                                    loop={100}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                                />
                            </span>
                        </h1>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Link to={`/contact`}><button className="relative h-16 w-44 origin-top transform rounded-lg border-2 border-yellow-500 text-2xl text-yellow-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-500">Hire Me</button></Link>
                        <a href={resume} download="Resume" ><button className="relative ml-10 h-16 w-[160px] origin-top transform rounded-lg border-2 border-yellow-500 text-2xl text-yellow-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-500">Download Resume</button> </a>
                    </div>
                    <div className="flex justify-center mt-8">
                        <Link to={`https://www.facebook.com/rk.rokonujjaman.3/`}><FaFacebookF className='text-7xl icon-box  rounded-md hover:bg-gray-950 hover:text-yellow-500  bg-yellow-500 icon text-white p-3' /></Link>
                        <Link to={`https://www.linkedin.com/in/md-rokonujjaman-4960092b9`}><FaLinkedinIn  className='text-7xl icon-box rounded-md hover:bg-gray-950 hover:text-yellow-500 ml-5 bg-yellow-500 icon text-white p-3' /></Link>
                        <Link to={`https://github.com/rokonrkn`}><VscGithub  className='text-7xl icon-box hover:bg-gray-950 hover:text-yellow-500 rounded-md ml-5 bg-yellow-500 icon text-white p-3' /></Link>
                        <Link to={`https://twitter.com/MdRokonujj91443`}><FaTwitter  className='text-7xl icon-box hover:bg-gray-950 hover:text-yellow-500 rounded-md ml-5  bg-yellow-500 icon text-white p-3' /></Link>
                    </div>
                </div>
                {/* <TsParticles></TsParticles> */}
            </div>
        </div>
    );
};

export default Home;