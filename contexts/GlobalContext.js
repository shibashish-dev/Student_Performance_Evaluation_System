"use client"
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const GlobalContext = createContext();

// Create a provider component
export function GlobalProvider({ children }) {

  const [key, setKey] = useState(0)
  const [Teacher, setTeacher] = useState(null)
  const [Student, setStudent] = useState(null)
  const [User, setUser] = useState(null)
  const isClient = () => typeof window !== 'undefined';
  // const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);  // Track role (student or teacher)


  // useEffect(() => {
  //   if (isClient()) {
  //     const storedToken = window.localStorage.getItem('token');
  //     if (storedToken) {
  //       setToken(storedToken);
  //       setUser(null); 
  //       const decodedToken = JSON.parse(atob(storedToken.split('.')[1]));
  //       setRole(decodedToken?.user?.role); // Assuming your token has role information
  //     }
  //   }
  // }, [token]);

  const logout = () => {
    if (isClient()) {
      window.localStorage.removeItem('token')
      setUser(null);
      setTeacher(null);
      setStudent(null);

    }
  }


  const getTeacher = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login`, {
        method: 'GET',
        headers: {
          'auth-token': token,
        },
      }
      )
      const teacher = await response.json()

      setUser(teacher?.user)
    } catch (err) {
      setUser(null)
    }

  }
  const getStudent = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login`, {
        method: 'GET',
        headers: {
          'auth-token': token,
        },
      }
      )
      const student = await response.json()

      setUser(student?.user)
    } catch (err) {
      setUser(null)
    }


  }
  const getUser = async (token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/login`, {
        method: 'GET',
        headers: {
          'auth-token': token,
        },
      }
      )
      const user = await response.json()
      console.log(user)
      setUser(user?.user)
    } catch (err) {
      setUser(null)
    }
  };

  const getAssignments = async(sem)=>{
    try {
      const res = await  fetch(`http://localhost:5000/api/assignment/allassign/${sem}`)
      const assignments =await res.json()
      // setStudent(student)i
      if(assignments.success){
        
        setAssignments(assignments.assignment)
      }
    } catch (error) {
      console.error(error)
    }
   }
  
  return (
    <GlobalContext.Provider value={{ key, setKey, logout, setUser, getUser, getTeacher, getStudent, Student, Teacher, User }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Create a custom hook to use the context
export function useGlobalContext() {
  return useContext(GlobalContext);
}
