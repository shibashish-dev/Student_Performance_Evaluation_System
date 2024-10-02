"use client";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoadingBar from "react-top-loading-bar";
import { useGlobalContext } from "@/contexts/GlobalContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const loadingBarRef = useRef(null);
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const { key, setKey, logout , setUser , Teacher , User , getTeacher , getStudent , getUser, Student} = useGlobalContext();
 
  const logOut = () => {
    logout();
    setKey(Math.random());
    setCurrentUser(null);
    router.push("/");
  };
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  useEffect(() => {
    setIsOpen(false); 
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  useEffect(() => {
    loadingBarRef.current?.continuousStart();
    setTimeout(() => {
      loadingBarRef.current?.complete();
    }, 500); 

    setIsOpen(false);
  }, [pathname]);


  // Only access localStorage on the client side
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

  useEffect(() => {
    setCurrentUser(User);
  }, [User,currentUser]);
  
  console.log("User : " , User)
  return (
    <>
      <LoadingBar color="#eb427e" ref={loadingBarRef} shadow={true} />

      <nav
        className={`navbar w-full fixed top-0 z-10 p-0 flex justify-center items-center transition-colors duration-300 ease-in-out ${
          scrolled || isOpen ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
          <a
            className="flex justify-center items-center text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="/"
          >
            <img src="/eductin.png" alt="alternative" className="h-20" />
            <span className="text-white">
              Educ<span className={"text-primary"}>Tin</span>
            </span>
          </a>
          <button
            className="mx-3 text-white background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden"
            type="button"
            onClick={toggleNavbar}
          >
            <span> &#9776; </span>
          </button>
          <div
            className={`w-full p-5 text-center gap-6   lg:w-auto lg:flex lg:flex-grow lg:items-center transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row gap-3">
              <li
                className={`border lg:border-0 ${
                  pathname === "/" ? "active" : ""
                }`}
              >
                <Link
                  className={`nav-link page-scroll ${
                    pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`border lg:border-0 ${
                  pathname === "/about" ? "active" : ""
                }`}
              >
                <Link
                  className={`nav-link page-scroll ${
                    pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li
                className={`border lg:border-0 ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link
                  className={`nav-link page-scroll ${
                    pathname === "/contact" ? "active" : ""
                  }`} href="/contact" >
                  Contact
                </Link>
              </li>
              {token && <li
                className={`border lg:border-0 ${
                  pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <Link
                  className={`nav-link page-scroll ${
                    pathname === "/dashboard" ? "active" : ""
                  }`}
                  href={User?.role === "teacher" ? "/teacher/dashboard" : "/student/dashboard"}
                >
                  Dashboard 
                  {User?.name}
                </Link>
              </li>}
            </ul>
            <div>
              <div className="relative inline-block text-left">
                <div className="group">
                  {token ? (
                    <button
                      className="btn-solid-reg bg-primary hover:secondary hover:cursor-pointer"
                      onClick={logOut}
                    >
                      Log Out
                    </button>
                  ) : (
                    <button
                      className="btn-solid-reg hover:secondary hover:cursor-pointer text-white"
                      style={{
                        letterSpacing: "5px",
                        outline: "none",
                        zIndex: 800,
                      }}
                    >
                      SignUp/Login
                    </button>
                  )}
                  {!token && (
                    <ul className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <li>
                        <Link
                          className="block px-4 py-2 text-sm hover:bg-gray-700"
                          href="/teacher/login"
                        >
                          Teacher
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-4 py-2 text-sm hover:bg-gray-700"
                          href="/student/login"
                        >
                          Student
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end of navbar-collapse */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
