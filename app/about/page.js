import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image';
const About = () => {
  return (
    <>
      <Banner text={'About Us'} title={'About Us'} href={'/about'}/>
        <section className="about py-12">
  <div className="container mx-auto">
    <div className="flex flex-col m-10 lg:flex-row items-center">
      <div className="m-3 lg:w-5/12 w-full p-0">
        <Image
          width = {200}
          height = {200}
          src="/images/team.jpg"
          alt="Team SPRGS"
          className="rounded-md shadow-xl w-5/6 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="lg:w-6/12 w-full m-5 lg:mt-0">
      <div className="about-item relative"><span className="text-lg text-gray-500">Est:2023</span>
          <h2 className="text-3xl font-bold mt-1 mb-3">
            Team <span className="text-primary" >SPRGS</span>
          </h2>
          <p className="mb-4">
            Welcome to Team SPRGS, a dedicated group of professionals committed
            to revolutionizing the landscape of student performance evaluation.
            Our team is driven by a shared vision of creating an innovative and
            efficient system that enhances the educational experience for
            students and empowers educators.
          </p>
        </div>
      </div>
    </div>
    <div className="about-item relative m-10">
      <span className="text-lg text-blue-500">Our Mission</span>
      <p className="mb-4">
        At the heart of our mission is the belief that every student deserves a
        fair and comprehensive evaluation of their academic journey. We aim to
        provide a cutting-edge platform that not only simplifies the evaluation
        process but also fosters a culture of continuous improvement in learning
        outcomes.
      </p>
    </div>
    <div className="about-item relative m-10 ">
      <span className="text-lg text-blue-500">Join Us on the Journey</span>
      <p className="mb-4">
        Whether you're an educator looking for a more effective evaluation tool
        or a student seeking a fair and insightful assessment of your academic
        progress, we invite you to join us on this journey. Together, let's
        shape the future of education through innovation and excellence.
      </p>
      <p className="mb-4">
        Thank you for being a part of the <span className="text-black">Educ</span
        ><span className="text-primary">Tin</span> community!
      </p>
    </div>
  </div>
</section>

    </>
  )
}

export default About