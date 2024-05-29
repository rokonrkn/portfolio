import React, { useRef, useState } from 'react';
import './Contact.css'
import { IoIosMail } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaPhoneSquareAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { VscGithub } from 'react-icons/vsc';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const [success, setSuccess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g828ul8', 'template_kkmrxpj', form.current, {
                publicKey: 'n6UgUusRq6Cr6FdXj',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess('Massage Send Successfully ')
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='relative bg-[#1d1d1d] min-h-[600px]'>
            <div className="xl:mx-24 contact-container pt-16">
                <div className="">
                    <h2 className='text-7xl mb-5 text-[#ffdd40]'>Contact Me</h2>
                    <hr />
                </div>
                <div className="contact__grid mt-20">
                    <div className="">
                        <h3 className='text-4xl text-[#ffdd40]'>DON'T BE SAY!</h3>
                        <p className='text-white text-2xl mt-4'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="flex mt-8">
                            <div className="">
                                <IoIosMail className='text-5xl text-[#ffdd40]' />
                            </div>
                            <div className="flex items-center text-white text-3xl ml-5">
                                rokonislam195@gmail.com
                            </div>
                        </div>
                        <div className="flex mt-3">
                            <div className="">
                                <FaPhoneSquareAlt className='text-5xl text-[#ffdd40]' />
                            </div>
                            <div className="flex items-center text-white text-3xl ml-5">
                                +8801756647124
                            </div>
                        </div>
                        <div className="flex icon mt-20">
                            <Link to={`https://www.facebook.com/rk.rokonujjaman.3/`}><FaFacebookF className='text-7xl icon-box  rounded-md hover:bg-gray-950 hover:text-yellow-500  bg-yellow-500  text-white p-3' /></Link>
                            <Link to={`https://www.linkedin.com/in/md-rokonujjaman-4960092b9`}><FaLinkedinIn className='text-7xl icon-box rounded-md hover:bg-gray-950 hover:text-yellow-500 ml-5 bg-yellow-500 icon text-white p-3' /></Link>
                            <Link to={`https://github.com/rokonrkn`}><VscGithub className='text-7xl icon-box hover:bg-gray-950 hover:text-yellow-500 rounded-md ml-5 bg-yellow-500 icon text-white p-3' /></Link>
                            <Link to={`https://twitter.com/MdRokonujj91443`}><FaTwitter className='text-7xl icon-box hover:bg-gray-950 hover:text-yellow-500 rounded-md ml-5  bg-yellow-500 icon text-white p-3' /></Link>
                        </div>
                    </div>
                    <div className="shadow p-16">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="xl:flex">
                                <div className="">
                                    <p className='text-3xl pb-3 text-gray-300 uppercase'>Your Name</p>
                                    <input className="rounded-lg text-2xl border w-[100%] xl:w-[300px] h-16 border-yellow-500 bg-transparent px-4 py-2 text-[#ffffff] focus:outline-none" type="text" name='user_name' required/>
                                </div>
                                <div className="">
                                    <p className='text-3xl xl:ml-10 pb-3 text-gray-300 uppercase'>Phone Number</p>
                                    <input className="rounded-lg h-16 xl:ml-10 w-[100%] xl:w-[300px]  border border-yellow-500 bg-transparent text-2xl px-4 py-2 text-[#ffffff] focus:outline-none" type="number" name='user_number' required/>
                                </div>
                            </div>
                            <div className="mt-10">
                                <p className='text-3xl pb-3 text-gray-300 uppercase'>Email</p>
                                <input className="rounded-lg text-2xl border w-[92%] h-16 border-yellow-500 bg-transparent px-4 py-2 text-[#ffffff] focus:outline-none" name='user_email' type="email" required/>

                                <p className='text-3xl mt-8 pb-3 text-gray-300 uppercase'>Subject</p>
                                <input className="rounded-lg text-2xl border w-[92%] h-16 border-yellow-500 bg-transparent px-4 py-2 text-[#ffffff] focus:outline-none" name='subject' type="text" required/>

                                <p className='text-3xl mt-8 pb-3 text-gray-300 uppercase'>Massage</p>
                                <textarea id="message" rows="4" className="rounded-lg text-2xl border w-[92%] h-44 border-yellow-500 bg-transparent px-4 py-2 text-[#ffffff] focus:outline-none" type='massage' name='massage' required></textarea>
                            </div>
                            <p className='py-7 text-green-600'>{success}</p>
                            <button className="relative mt-20  h-16 w-[92%] origin-top transform rounded-lg border-2 border-yellow-500 text-2xl text-yellow-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-500" name='submit' type='submit' value="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;