"use client"
import Banner from '@/app/components/Banner'
import BlinkingLink from '@/app/components/BlinkingLink';
import Attedance from '@/app/components/students/Attedance';
import Performance from '@/app/components/students/Performance';
import PersonalDetails from '@/app/components/students/PersonalDetails';
import UserProfile from '@/app/components/students/UserProfile';
import Workspace from '@/app/components/students/Workspace';
import { useGlobalContext } from '@/contexts/GlobalContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react'
import { GrDocumentPerformance } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { FaUserEdit } from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";

const Dashboard = () => {

  const [activeLink, setActiveLink] = useState("");    
  const { key, setKey, logout , setUser , Teacher , User , getTeacher , getStudent , getUser, Student} = useGlobalContext();
  const [token, setToken] = useState(null);
  const router = useRouter();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    const getCurrentTime = () => {
        
      const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
          return "Good morning";
        } else if (currentHour >= 12 && currentHour < 18) {
          return "Good afternoon";
        } else {
          return "Good evening";
        }
    };

    const greeting = getCurrentTime();

      useEffect(() => {
        if (typeof window !== "undefined") {
          const savedToken = window.localStorage.getItem("token");
          setToken(savedToken);
        }
        if(token){
          getUser(token)
        }else {
          setUser(null); // Clear user if there's no token
        }
      }, [token]);


      const logOut = () => {
        logout();
        setKey(Math.random());
        router.push("/");
      };


  return (
    <>
        <Banner href={'/student/dashboard'} text={'Student Dashboard'} title={'Dashboard'}/>
        <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="bg-white border border-b-0 w-full md:w-60">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="px-4 py-6 text-center border-b flex justify-center items-center flex-col">
                <Image src={User?.img || '/default'} alt={User?.name || 'Default'} width={100} height={50} className="my-2 rounded-full" />
                <h1 className="text-xl font-bold"><span className="text-black">{User?.name}</span></h1>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => handleLinkClick('personal-details')}
                      className={`${activeLink === 'personal-details' ? 'bg-primary  hover:bg-primary': ''} flex  gap-3 items-center hover:bg-secondary  rounded-xl font-bold text-sm text-black py-3 px-4 w-full`}
                    >
                      <PiStudentBold className='text-xl'/>

                      Personal Details
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('user-profile')}
                      className={`${activeLink === 'user-profile' ? 'bg-primary  hover:bg-primary': ''} flex gap-3  hover:bg-secondary  rounded-xl font-bold text-sm text-gray-900 py-3 px-4 w-full`}
                    >
                     <FaUserEdit className='text-xl'/>
                     Update Profile
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('performance')}
                      className={` ${activeLink === 'performance' ? 'bg-primary hover:bg-primary' : ''} flex  gap-3 hover:bg-secondary rounded-xl font-bold text-sm text-gray-900 py-3 px-4 w-full`}
                    >
                      <GrDocumentPerformance className='text-xl'/>

                     Performance
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('attedance')}
                      className={` ${activeLink === 'attedance' ? 'bg-primary hover:bg-primary' : ''} flex gap-3  hover:bg-secondary  rounded-xl font-bold text-sm text-gray-900 py-3 px-4 w-full`}
                    >
                      <IoBarChart className='text-xl'/>

                      Attedance
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleLinkClick('workspace')}
                      className={` ${activeLink === 'workspace' ? 'bg-primary hover:bg-primary' : ''} flex gap-3 hover:bg-secondary  rounded-xl font-bold text-sm text-gray-900 py-3 px-4 w-full`}
                    >
                      <FaTasks className='text-xl'/>

                     Work Space
                    </button>
                  </li>
                  {/* Add other sidebar links similarly */}
                </ul>
              </div>
            </div>
            <div className="p-4">
              <button
                type="button"
                onClick={logOut}
                className="flex items-center justify-center w-full h-9 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <span className="ml-2">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 max-h-screen overflow-auto">
          <div className="container mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <div className="flex flex-col">

              <h1 className="text-3xl font-bold mb-10 text-center">Welcome to your dashboard</h1>
              <div className="flex items-center flex-col md:flex-row  justify-between">

              <h1 className="text-3xl font-bold mb-10">{greeting} !</h1>
              <BlinkingLink text={"Performance Report"} Icon={GrDocumentPerformance} href={'/student/performance_report'}/>
              </div>
              </div>

              {/* Stats and Tasks Section */}
             

              <div className="col-md-10 col-sm-11 display-table-cell v-align ">
              <div className="user-dashboard ">
                <div className="container m-3 flex justify-evenly">
                  {/* <h1 className="text-3xl font-bold mb-10">{greeting} ! </h1> */}
                   
                  {/* <h1 className="mt-1">
                    <span className="text-capitalize">{User?.gender === 'Male'? "Mr." : User?.gender==='Female'?"Ms.":""} {User?.name}</span>
                  </h1> */}
                  <div className=" p-3">
                  </div>
                </div>
                {activeLink === "personal-details" ? (
                  <PersonalDetails User={User}/>
                ): activeLink === "user-profile" ? (
                  <UserProfile User={User}/>
                ) : activeLink === "performance" ? (
                  <Performance User={User}/>
                ) : activeLink === "attedance" ? (
                  <Attedance User={User}/>
                ) : activeLink === "workspace" ? (
                  <Workspace User={User}/>
                )  :(
                  <>
                    <div className="container text-dark ">
                      <p>

                      Dear student, as you embark on your academic journey,
                      remember that success is not merely a destination but a
                      continuous journey of growth and learning. Challenges may
                      come your way, but they are opportunities in disguise.
                      Each day is a chance to discover your strengths, overcome
                      obstacles, and reach new heights. Embrace the process,
                      stay resilient, and believe in your abilities. Your
                      education is a powerful tool that opens doors to endless
                      possibilities. Keep pushing yourself, stay focused on your
                      goals, and always remember that you have the potential to
                      achieve greatness. Your hard work today will shape the
                      success of tomorrow. Keep shining bright, and never
                      underestimate the impact you can make on the world. You
                      are capable of achieving anything you set your mind to.
                      Keep striving for excellence, and success will undoubtedly
                      follow.
                      </p>
                    </div>
                    {/* <img src={"/images/motivation.jpg"} className="w-75 align-item-center" alt="" />                  */}
                  </>
                )}
              </div>
            </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard