import React from 'react';
import './About.css'
import resume from '../../../public/iamge/Rokonujjaman_CV1.pdf'
import rokon from '../../../public/iamge/rokon (2).png'


const About = () => {
    return (
        <div className='relative'>
            <section className="flex min-h-[600px]   bg-[#181818]">
                <div className="about mt-28 about-container xl:mx-24">
                    <div className="">
                        <h4 className='text-7xl  text-[#ffdd40] '>About Me</h4>
                        <hr className='mt-8' />
                        <div className="mt-10">
                            <h3 className='text-5xl text-[#ffdd40]'>Front End Developer</h3>
                            <p className='text-red-500 text-2xl mt-4'>Professional Front End Developer & Full Stack Developer Having 6 Month Of Experience</p>
                            <p className='text-2xl text-white mt-10'>My name is <span className='font-bold'>Md.Rokonujjaman</span>, I am 21 years old fresher Web Developer. I am from Sirajganj, Rajshahi, Bangladesh. I have completed for a Diploma in CSE, Shariatpur Polytechnic Institute . I am passionate about web development and want to create user-friendly websites and applications. I am always try to explore new technologies to further enhance my skills and contribute to the field of web development.As a passionate developer, I believe in hard work. Last one year I consistently learn MERN stack development. I learn a lot of technology in that time and did almost 18 projects. Also, I continuously seek out opportunities to enhance my skills and stay up-to-date with the latest trends in web development. Now I am seeking an opportunity to start my professional development career.</p>
                        </div>
                        <div className="mt-20">
                            <div className="personal text-2xl text-gray-200">
                                <div className="flex mt-5">
                                    <h2>Name: <span className='ml-10'>Rokonujjaman</span></h2>
                                    <h2 className='ml-28'>Age: <span className='ml-10'>21 years</span></h2>
                                </div>
                                <div className="xl:flex mt-3">
                                    <h2>Email: <span className='ml-10'>rokonislam195@gmail.com</span></h2>
                                    <h2 className='ml-6'>Address: <span className='ml-10'>#H-25, #R-08, Sector-13 Utara,Dhaka.</span></h2>
                                </div>
                            </div> <hr className='mt-2 text-white' />
                            <a href={resume} download="Resume" ><button className="relative button mt-10 h-16 w-[160px] origin-top transform rounded-lg border-2 border-yellow-500 text-2xl text-yellow-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-500">Download Resume</button> </a>
                        </div>
                    </div>
                    <div className="relative ">
                        <img src={rokon} className="relative md:h-[600px]  sm:h-[400px] xl:h-[500px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;