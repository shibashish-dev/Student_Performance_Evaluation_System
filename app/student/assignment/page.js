"use client"
import React, { useEffect, useState } from 'react'
import Banner from '@/app/components/Banner';
import AssignmentResult from '@/app/components/students/AssignmentResult';
import AssignmentSubmit from '@/app/components/students/AssignmentSubmit';
import { useGlobalContext } from '@/contexts/GlobalContext';

const Assignment = () => { 
    const [selectedOption, setSelectedOption] = useState(null);
    const { key, setKey, logout , setUser , Teacher , User , getTeacher , getStudent , getUser, Student} = useGlobalContext();
    const [token, setToken] = useState(null);

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

  return (
    <>
       <Banner href={'/student/assignment'} text={'Student Assignment'} title={'Assignment'}/>

      <div className="flex justify-center my-8">
        <div className="flex space-x-4 p-4 w-full max-w-lg justify-center">
          <input
            type="radio"
            className="hidden"
            name="btnradio"
            id="btnradio1"
            checked={selectedOption === 'create'}
            onChange={() => setSelectedOption('create')}
          />
          <label
            className="px-4 py-2 border rounded-md text-sm font-semibold cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-200"
            htmlFor="btnradio1"
          >
            Assignment Submit
          </label>

          <input
            type="radio"
            className="hidden"
            name="btnradio"
            id="btnradio2"
            checked={selectedOption === 'submitted'}
            onChange={() => setSelectedOption('submitted')}
          />
          <label
            className="px-4 py-2 border rounded-md text-sm font-semibold cursor-pointer hover:bg-primary hover:text-white transition-all ease-in-out duration-200"
            htmlFor="btnradio2"
          >
            Submitted Results
          </label>
        </div>
      </div>

      {selectedOption === 'create' && <AssignmentSubmit User={User} />}
      {selectedOption === 'submitted' && <AssignmentResult User={User} />}
      {selectedOption === null && (
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Welcome to the Assignment Section
              </h2>
              <p className="text-lg text-gray-600">
                Here you can manage assignments. Create new assignments, review
                submitted assignments, and track student progress.
              </p>
            </div>
          </div>
        </section>
      )}

    </>
  )
}

export default Assignment