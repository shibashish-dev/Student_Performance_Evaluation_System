import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="footer">
        <div className="container px-4 sm:px-8">
        <h1 className="text-black font-bold text-3xl mb-4 text-capitalize">Educ<span className='text-primary'>Tin</span></h1>

          <p className="mb-8 lg:max-w-3xl lg:mx-auto">
          It is a web-based platfom that facilitates student & teacher interactions. It includes features for marks management, attedance tracking and accademic communication.
            {/* <a
              className="text-indigo-600 hover:text-gray-500"
              href="mailto:email@domain.com"
            >
              email@domain.com
            </a> */}
          </p>
         
        
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-facebook-f fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-twitter fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-pinterest-p fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-instagram fa-stack-1x" />
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x" />
                <i className="fab fa-youtube fa-stack-1x" />
              </a>
            </span>
          </div>{" "}
          {/* end of social-container */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of footer */}
      {/* end of footer */}
      {/* Copyright */}
      <div className="copyright">
        <div className="container px-4 sm:px-8 flex flex-col md:flex-row justify-center lg:justify-between">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
            <a href="http://www.gcekjr.ac.in/" rel="noreferrer" target='_blank'>GCE,Kjr</a>
            </li>
            <li className="mb-2">
            <Link href="/contact">Contact us</Link>
            </li>
            <li className="mb-2">
            <Link href="http://www.bputexam.in/studentsection/resultpublished/studentresult.aspx">BPUT Results</Link>
            </li>
            <li className="mb-2">
            <Link href="https://www.bput.ac.in/" rel="noreferrer" target='_blank'>BPUT </Link>
            </li>
            <li className="mb-2">
              <a href="terms.html">Terms &amp; Conditions</a>
            </li>
            <li className="mb-2">
              <a href="privacy.html">Privacy Policy</a>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{" "}
            <a href="#your-link" className="no-underline">
              eductin.in
            </a>
          </p>
          <p className="pb-2 p-small statement">
           Developed By: 
            <Link href={'/team'} className="no-underline"> SPRGS Team @GCE Kjr</Link>
          </p>
        </div>
        {/* end of container */}
      </div>{" "}
      {/* end of copyright */}
      {/* end of copyright */}
    </>
  );
};

export default Footer;
