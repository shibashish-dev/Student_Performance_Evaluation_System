import React from 'react'
import Link from 'next/link';
const Banner = ({title,href,text}) => {
  return (
    <>
<section className=" slider bg-cover bg-center py-12">
  <div className="container mx-auto">
    <div className="text-center">
      <ul className="flex justify-center mb-0 space-x-4">
        <li>
          <Link
            href="/"
            className="text-sm tracking-widest text-white uppercase font-bold"
          >
            Home
          </Link>
        </li>
        <li>
          <span className="text-white">|</span>
        </li>
        <li>
          <Link
            href={href}
            className="text-sm tracking-widest text-pink-500 uppercase"
          >
           {title}
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl uppercase font-bold text-white mt-2">{text}</h1>
    </div>
  </div>
</section>
    </>
  )
}

export default Banner