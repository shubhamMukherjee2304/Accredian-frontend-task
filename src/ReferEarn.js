import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';
import { IoPersonAdd } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { Carousel } from 'react-responsive-carousel';

import './index.css';

function ReferEarn() {
  const { basename } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      referrerName: event.target[0].value,
      referrerEmail: event.target[1].value,
      friendName: event.target[2].value,
      friendEmail: event.target[3].value,
     
    };

    try {
      const response = await fetch(`http://localhost:5000/api/referrals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Referral submitted successfully!');
        setShowModal(false);
      } else {
        alert('Error submitting referral');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting referral');
    }
  };

  return (
    <div className="bg-gray-100">
      
      
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold">Accredian</div>
            <div className="ml-10 space-x-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">Courses</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Refer & Earn</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Resources</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Try for Free</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 ">
        <div className="text-center">

          {showModal ? (
            <div className="fixed inset-0 flex z-50 items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <h2 className="text-2xl mb-4">Referral Form</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-left mb-2">Your Name</label>
                    <input
                      type="text"
                      name="referrerName"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-left mb-2">Your Email</label>
                    <input
                      type="email"
                      name="referrerEmail"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-left mb-2">Friend's Name</label>
                    <input
                      type="text"
                      name="friendName"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-left mb-2">Friend's Email</label>
                    <input
                      type="email"
                      name="friendEmail"
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  {/* <div className="mb-4">
                    <label className="block text-left mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      className="w-full px-3 py-2 border rounded-md"
                      rows="3"
                    ></textarea>
                  </div> */}
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Carousel Section */}
      
      <div className="carousel-container shadow-lg w-4/5 container mx-auto px-4 ">
      <Carousel 
        showArrows={true}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div className="carousel-item">
        <div class="flex items-center bg-white shadow-lg rounded-lg">
            <div class="w-1/3">
              <h2 class="text-[50px] font-bold mb-2 mt-9 ml-4 text-slate-900">Let's Learn and Earn</h2>
              <p class="text-gray-900 text-[26px] mt-5 p-6">Get a chance to win upto <span className='text-blue-700 text-3xl font-bold'>Rs. 15,000</span> </p>

              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-3 mx-2 bg-blue-600 text-white rounded-md">
                Refer Now
              </button>
            </div>
            <div class="w-2/3 flex justify-center">
              <img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg__" alt="Card Image" class="rounded-lg ml-11"/>
            </div>
            </div>
        </div>

        <div className="carousel-item">
        <div class="flex items-center  bg-white shadow-lg rounded-lg">
        <div class="w-2/3 flex justify-center">
              <img src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg__" alt="Card Image" class="rounded-lg ml-6"/>
            </div>

            <div class="w-1/3">
              <h2 class="text-[50px] font-bold mb-2 mt-9 ml-4 text-slate-900">More Referrals.. More Benefits</h2>
              <p class="text-gray-900 text-[26px] mt-5 p-6">Share Quickly, Win Daily <span className='text-blue-700 text-3xl font-bold'>Rs. 15,000</span> </p>

              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-3 mx-2 bg-blue-600 text-white rounded-md">
                Refer Now
              </button>

            </div>

            

            </div>
        </div>

        
        

      </Carousel>
    </div>

      <h3 className='mt-14 mb-6 text-2xl' style={{"textAlign":"center"}}>How do I <span className='text-blue-600 font-bold tex-3xl'>refer</span> ?</h3>
      {/* Cards Section */}
      <div className='w-4/5 flex gap-32 mt-7 mx-auto'>
        <div className='w-1/4 h-[10rem] cardsh'>
        <IoPersonAdd className='text-blue-600 mx-auto text-2xl mt-6 mb-2'/>
        <p className='p-2 text-center'>Submit referrals easily via our website’s referral section.</p>
        </div>
        <div className='w-1/4 h-[10rem]  cardsh'>       
        <FaWallet className='text-blue-600 mx-auto text-2xl mt-6 mb-2'/>
        <p className='p-2 text-center'>Earn rewards once your referral joins an Accredian program.</p>
        </div>
        <div className='w-1/4 h-[10rem] cardsh'>
        <SlNote className='text-blue-600 mx-auto text-2xl mt-6 mb-2'/>
        <p className='p-2 text-center'>Both parties receive a bonus 30 days after program enrollment.</p>
        </div>

      </div>

      {/* Refer Now Button */}
      <div className="text-center py-8">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Refer Now
        </button>
      </div>
          <h2 className='text-[30px] mx-auto mb-2 mt-2' style={{"textAlign":"center"}}>What Are The Referal <span className='text-blue-500 font-semibold'>Benefits</span>  ? </h2>
      {/* Side Menu and Corresponding Card */}
      <div className="side-menu-section container mx-auto px-4 py-8 flex">
        <div className="side-menu w-1/4 bg-white p-4 shadow-lg rounded-md">
          <ul>
          <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg bg-blue-700 text-blue-100 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">All Programs</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Product Management</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Fintech</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Senior Amnagement</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Dat Science</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Digital Transformation</a></li>
            <li className="mb-2 p-2 rounded-lg"><a href="#" className="p-2 rounded-lg text-gray-700 active:bg-blue-700 active:text-blue-100  hover:bg-blue-700 hover:text-blue-100">Business Analytics</a></li>
            
          </ul>
        </div>
        <div className="corresponding-card w-3/4 rounded-lg shadow-lg  mx-auto px-4 py-4 flex ">
        <div className='w-3/5'>
        <ul>
          <li className='bg-blue-500 text-blue-100 mt-2 mb-2 p-2 rounded-tl-lg'>Programs</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Professional Certificate Program in Product Management</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>PG Certificate Program in Strategic Product Management</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Executive Program in Data Driven Product Management</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Executive Program in Product Management and Digital Transformation</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Executive Program in Product Management</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Advanced Certification in Product Managementr</li>
          <li className='text-grey-700 p-2 mb-2 mt-2'>Executive Program in Product Management and Project Management</li>
        </ul>

        </div>
        <div className='w-1/5 '>
          <ul>
            <li className='bg-blue-500 text-blue-100 mt-2 mb-2 p-2 '>Referrer Bonus</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 7,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 9,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 9, 000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 7,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
          </ul>

        </div>
        <div className='w-1/5 '>
        <ul>
            <li className='bg-blue-500 text-blue-100 mt-2 mb-2 p-2 rounded-tr-lg'> Referee Bonus</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 7,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 9,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 9, 000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 7,000</li>
            <li className='text-grey-700 p-2 mb-2 mt-2'>₹ 10,000</li>
          </ul>

        </div>
        
        </div>
      </div>

      {/* Refer Now Button */}
      <div className="text-center py-8">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Refer Now
        </button>
      </div>

      <h2 className='text-[30px] mx-auto mb-2 mt-2' style={{"textAlign":"center"}}>Frequently Asked <span className='text-blue-500 font-semibold'>Questions</span></h2>
      <div className='container mx-auto flex w-3/4 py-8 px-4'>
      <div className='w-1/5 p-2'>
        <button className='p-2 w-full block shadow-md border-gray-500 border-2 mt-3  active:text-blue-500'>Eligibility</button>
        <button className='p-2 w-full block shadow-md border-gray-500 border-2 mt-3  active:text-blue-500'>How to use?</button>
        <button className='p-2 w-full block shadow-md border-gray-500 border-2 mt-3  active:text-blue-500'>Terms and Conditions</button>
      </div>
      <div className='w-4/5 p-2 mt-4'>
          <p className='text-blue-500'>Do I need to have prior Product Management and Project Management experience to enroll in the program?</p>
          <p className='mt-2'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
          suitable for individuals from any field of work.</p>
      </div>

      </div>

      {/* Footer */}
      
      <footer className="bg-gray-800 text-white py-4">
        <div className='flex w-4/5 mx-auto gap-[50rem]'>
          <h1 className='font-bold text-[40px]'>accredian</h1>
          <button className='bg-blue-500 p-1 rounded-sm  w-full '>Schedule call</button>
        </div>
        <div className='w-4/5 mx-auto flex gap-4 mt-4'>
        <div className='w-1/3 text-left'>
        <ul>
          <li className='font-bold text-2xl'>Programs</li>
          <li className='mt-4'>Data Science and AI</li>
          <li className='mt-2'>Business Analytics</li>
          <li className='mt-2'>Product Management</li>
          <li className='mt-2'>Fintech</li>
          <li className='mt-2'>Strategy and Leadership</li>

        </ul>
        </div>
        <div className='w-1/3 text-left'>
        <h4 className='font-bold text-xl'>Contact Us</h4>
        <p className='mt-4'><span className='font-bold'>Address:- </span>4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
        Haryana 122015</p>
        <h5 className='mt-2'><span className='font-bold'>Phone No:- </span>+91 9625811095</h5>
        <h5 className='mt-2'>Email us (For Data Science Queries): admissions@accredian.com</h5>
        <h5 className='mt-2'>Email us (For Product Management Queries):pm@accredian.com</h5>
        </div>
        <div className='w-1/3 text-left'>
        <ul>
          <li className='font-bold text-xl'>Accredian</li>
          <li className='mt-4'>About</li>
          <li className='mt-2'>Carrier</li>
          <li className='mt-2'>Blog</li>
          <li className='mt-2'>Admission Policy</li>
        </ul>
        </div>
        </div>
        
       
      </footer>
    </div>
  );
}

export default ReferEarn;
