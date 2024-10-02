import Banner from './components/Banner';
import Carousel from "./components/Carousel";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link'

export default async function Home() { 
  let contact = 0;
  let teacher = 0;
  let student = 0;
  let subject = 0;
  let allTeacher = null;
  let response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/v1` ,{
    method: 'GET'
  })
  if(response.ok){
   const res = await response.json()
    teacher = res.teacher
    contact = res.contact
    student = res.student
    subject = res.subject
    allTeacher = res.allTeacher
  }else{
    console.log("ERROR")
  }

 return (
      <> 
  <section id="" className="text-center  slider">
  <div className= "">
    <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12 w-full ">
    <span className="subed text-sm font-semibold text-white uppercase  mb-4  text-center w-fit p-2 my-32" >
    Student's Performance Hub
  </span>
      <h1 className="h1-large text-4xl md:text-5xl font-bold text-white  m-5 uppercase">Success whispers secrets to those who listen with a <span className="text-pink-500">student's heart !!!</span></h1>
      {/* <p className="p-large mb-8">Start getting things done together with your team based on Pavo's revolutionary team management features</p> */}
      {/* <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple" />Download</a>
      <a className="btn-solid-lg secondary" href="#your-link"><i className="fab fa-google-play" />Download</a> */}
      <a
    href="#dashboards"
    className="bg-pink-500  text-white py-3 px-6 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-pink-600"
  ><span className="mx-2">Get Started</span>  <FaArrowRight />  </a>
    </div>



  </div> 
</section>
<div>






  {/* Features */}
  <div id="features" className="cards-1">
    <div className="container px-4 sm:px-8 xl:px-4">
      {/* Card */}
      <div className="card">
        <div className="card-image">
          <img src="images/features-icon-1.svg" alt="alternative" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Student Performance</h5>
          <p className="mb-4">Analyzing student performance involves evaluating academic achivements beahviourial patterns and overall engagement in learning activities.</p>
        </div>
      </div>
      {/* end of card */}
      {/* Card */}
      <div className="card">
        <div className="card-image">
          <img src="images/features-icon-2.svg" alt="alternative" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Attendance</h5>
          <p className="mb-4">Maintaining an updated attedance record on our website is essential for ensuring clarity and communication between students and teachers.</p>
        </div>
      </div>
      {/* end of card */}
      {/* Card */}
      <div className="card">
        <div className="card-image">
          <img src="images/features-icon-3.svg" alt="alternative" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Work Space</h5>
          <p className="mb-4">Students can upload their assignments or any kind of tasks directly to their respective courses.</p>
        </div>
      </div>
      {/* end of card */}
      
     
    
    </div> {/* end of container */}
  </div> {/* end of cards-1 */}
  {/* end of features */}
  {/* Details 1 */}
  <div id="details" className="pt-12 pb-16 lg:pt-16">
    <div className="container md:flex justify-center items-center px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-5">
        <div className=" mb-16 lg:mb-0 xl:mt-16">
          <h2 className="mb-6 text-3xl  font-bold">GOVERMENT COLLEGE OF ENGINEERING, KEONJHAR</h2>
          <p className="mb-4 text-justify">
         <strong>Government College of Engineering, Keonjhar</strong> stands in pride and honour imparting the true colours of learning and wisdom. Having its footsteps in one of the oldest Technical Institute, the <strong>Orissa School of Mining Engineering, Keonjhar (OSME)</strong>,  it is only the Government College providing Engineering and Technical education in North Odisha. <strong>Government College of Engineering, Keonjhar (GCE, Keonjhar)</strong> was established in year  1995, having Mining Engineering as the only branch and subsequently in year 1997 two more branches were added to the curriculum i.e Electrical Engineering and Mechanical Engineering. In the year 2006, the Government of Odisha declared it as a constituent college of Biju Patnaik University of Technology, Odisha under self-sustaining mode to develop it as a centre of excellence in the field of Engineering &amp; Technology.            </p>
        </div>
      </div> {/* end of col */}
      <div className="lg:col-span-7">
        <div className="xl:ml-14">
          <Image width={1000} height={200} className="inline rounded-md shadow-3xl" src="/images/gce.jpg" alt="GCE KJR" />
        </div>
      </div> {/* end of col */}
    </div> {/* end of container */}
  </div>
  {/* end of details 1 */}
  {/* Details 2 */}
  <div className="py-24">
    <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
        <div className="mb-12 lg:mb-0 xl:mr-14">
          <Image width={500} height={200} className="inline" src="/images/students.png" alt="alternative" />
        </div>
      </div> {/* end of col */}
      <div className="lg:col-span-5">
        <div className="xl:mt-12">
          <h2 className="mb-6 text-3xl  font-bold">Student Dashboard</h2>
          <ul className="list mb-7 space-y-2">
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Personalized growth preview</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Grades and Feedbacks</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Regular Attedance</div>
            </li>
          </ul>
          <Link className="btn-solid-reg popup-with-move-anim mr-1.5" href="/student/dashboard">Dashboard</Link>
          {/* <a className="btn-outline-reg" href="article.html">Details</a> */}
        </div>
      </div> {/* end of col */}
    </div> {/* end of container */}
  </div>
  {/* end of details 2 */}
  {/* Details Lightbox */}
  {/* Lightbox */}
  <div id="details-lightbox" className="lightbox-basic zoom-anim-dialog mfp-hide">
    <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <button title="Close (Esc)" type="button" className="mfp-close x-button">×</button>
      <div className="lg:col-span-8">
        <div className="mb-12 text-center lg:mb-0 lg:text-left xl:mr-6">
          <Image width={500} height={200} className="inline rounded-lg" src="/images/teachers.png" alt="alternative" />
        </div>
      </div> {/* end of col */}
   
    </div> {/* end of row */}
  </div> {/* end of lightbox-basic */}
  {/* end of lightbox */}
  {/* end of details lightbox */}
  {/* Details 3 */}
  <div className="pt-16 pb-12">
    <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-5">
        <div className="mb-16 lg:mb-0 xl:mt-16">
          <h2 className="mb-6 text-3xl  font-bold">Teacher Dashboard</h2>
          <p className="mb-4">Get a glimpse of what this app can do for your marketing automation and understand why current users are so excited when using Pavo
            together with their teams.</p>
          <p className="mb-4">We will promptly answer any questions and honor your requests based on the service level agreement</p>
        </div>
        <Link className="btn-solid-reg popup-with-move-anim mr-1.5 bg-primary" href="/teacher/dashboard">Dashboard</Link>

      </div> {/* end of col */}
      <div className="lg:col-span-7">
        <div className="ml-14">
          <Image width={500} height={200} className="inline rounded-lg" src="/images/teachers.png" alt="alternative"/>
        </div>
      </div> {/* end of col */}
    </div> {/* end of container */}
  </div>
  {/* end of details 3 */}
  {/* Statistics */}
  <div className="counter">
    <div className="container px-4 sm:px-8">
      {/* Counter */}
      <div id="counter">
        <div className="cell">
          <div className="counter-value number-count" data-count={231}>{student}</div>
          <p className="counter-info">Students</p>
        </div>
        <div className="cell">
          <div className="counter-value number-count" data-count={385}>{teacher}</div>
          <p className="counter-info">Teachers</p>
        </div>
        <div className="cell">
          <div className="counter-value number-count" data-count={159}>{subject}</div>
          <p className="counter-info">Subjects</p>
        </div>
        <div className="cell">
          <div className="counter-value number-count" data-count={211}>{contact}</div>
          <p className="counter-info">Feedbacks</p>
        </div>
      </div>
      {/* end of counter */}
    </div> {/* end of container */}
  </div> {/* end of counter */}
  {/* end of statistics */}




  
  {/* Testimonials */}
  <div className="container text-center font-bold ">

<h1 className="text-4xl uppercase">Deaprtment faculty members</h1>
<div className="mx-auto mt-2 w-1/4 h-1 bg-blue-600"></div>

</div>
  <Carousel teachers={allTeacher}/>
  {/* end of testimonials */}







  {/* Pricing */}
  <div id="dashboards" className="cards-2">
    <div className="absolute bottom-0 h-40 w-full bg-white" />
    <div className="container px-4 pb-px sm:px-8">
      <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">Pricing options for all budgets</h2>
      <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto"> Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying so much about costs. They are flexible and work for any type of industry </p>
      {/* Card*/}
      <div className="card">
        <div className="card-body">
          <div className="card-title">STANDARD</div>
          <div className="price"><span className="currency">$</span><span className="value">29</span></div>
          <div className="frequency">monthly</div>
          <p>This basic package covers the marketing needs of small startups</p>
          <ul className="list mb-7 space-y-2 text-left">
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>List building and relations</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Seamless platform integration</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Great performance on devices</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Community support and videos</div>
            </li>
          </ul>
          <div className="button-wrapper">
            <a className="btn-solid-reg page-scroll" href="#download">Download</a>
          </div>
        </div>
      </div> {/* end of card */}
      {/* end of card */}
      {/* Card*/}
      <div className="card">
        <div className="card-body">
          <div className="card-title">ADVANCED</div>
          <div className="price"><span className="currency">$</span><span className="value">39</span></div>
          <div className="frequency">monthly</div>
          <p>This is a more advanced package suited for medium companies</p>
          <ul className="list mb-7 space-y-2 text-left">
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>List building and relations</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Seamless platform integration</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Great performance on devices</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Community support and videos</div>
            </li>
          </ul>
          <div className="button-wrapper">
            <a className="btn-solid-reg page-scroll" href="#download">Download</a>
          </div>
        </div>
      </div> {/* end of card */}
      {/* end of card */}
      {/* Card*/}
      <div className="card">
        <div className="card-body">
          <div className="card-title">COMPLETE</div>
          <div className="price"><span className="currency">$</span><span className="value">49</span></div>
          <div className="frequency">monthly</div>
          <p>This is a comprehensive package designed for big organizations</p>
          <ul className="list mb-7 text-left space-y-2">
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>List building and relations</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Seamless platform integration</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Great performance on devices</div>
            </li>
            <li className="flex">
              <i className="fas fa-chevron-right" />
              <div>Community support and videos</div>
            </li>
          </ul>
          <div className="button-wrapper">
            <a className="btn-solid-reg page-scroll" href="#download">Download</a>
          </div>
        </div>
      </div> {/* end of card */}
      {/* end of card */}
    </div> {/* end of container */}
  </div> {/* end of cards-2 */}
  {/* end of pricing */}
  {/* Conclusion */}
    <div className="container text-center font-bold ">

      <h1 className="text-4xl uppercase">From HOD's Desk</h1>
      <div className="mx-auto mt-2 w-24 h-1 bg-blue-600"></div>
      <p className='mt-2'>Some Valuable Words From our Head Of Department</p>

    </div>
  <div id="download" className="basic-5 ">
    <div className="flex flex-col md:flex-row  items-center md:items-center justify-center md:justify-beetween px-4 sm:px-8 lg:grid lg:grid-cols-2">
      <div className="mb-16 lg:mb-0 drop-shadow-2xl flex justify-center ">
         <Image
          width = {200}
          height = {200}
          src="/images/mukesh_bathre.jpeg"
          alt="mukesh_bathre"
          className="rounded-full shadow-xl w-1/2 object-cover"
          loading="lazy"
        />
      </div>
      <div className="lg:mt-24 xl:mt-44 xl:ml-12">
        <h2 className="text-4xl uppercase font-bold">Dr. Mukesh Bathre</h2>
        <h3 className=" text-primary text-3xl my-2"> HOD &amp; Assistant Professor , CSE department</h3>
        <p className="mb-9 text-gray-800 ">
        Welcome to the Computer Science and Engineering branch. We're excited to embark on this academic journey with you. Prepare to explore cutting-edge technology and innovative ideas in the world of computing. Best wishes for a successful and fulfilling experience ahead.
          </p>
      </div>
    </div> {/* end of container */}
  </div> {/* end of basic-5 */}
  {/* end of conclusion */}

  
</div>

      </>
  );


}
