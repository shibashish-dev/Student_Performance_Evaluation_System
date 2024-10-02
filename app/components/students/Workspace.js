import Link from 'next/link'
import React from 'react'

const Workspace = () => {
  return (
    <>
      <section className="container mx-auto text-center my-4">
        <div className="border border-primary mb-3 rounded-md" style={{ maxWidth: "100%" }}>
          <div className="bg-transparent border-b border-primary p-4">
            <h3 className="text-xl font-bold text-capitalize">Workspace</h3>
          </div>
          <div className="p-4">
            <div className="text-gray-800">
              <section className="pt-4">
                <div className="container mx-auto flex flex-wrap justify-center">
                  <div className="w-full lg:w-1/2 xl:w-1/4 mb-5">
                    <div className="bg-light border border-primary p-4">
                      <h3 className="text-lg font-semibold border-b mb-3">Assignment</h3>
                      <div className="text-center">
                        {/* <ScrollingText text="Pending..." className="text-red-500" /> */}
                        <Link href="/student/assignment" className="text-blue-500 underline">
                          ASSIGNMENT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 xl:w-1/4 mb-5">
                    <div className="bg-light border border-primary p-4">
                      <h3 className="text-lg font-semibold border-b mb-3">Seminar</h3>
                      <div className="text-center">
                        {/* <ScrollingText text="Pending..." className="text-red-500" /> */}
                        <Link href="/student/seminar" className="text-blue-500 underline">
                          SEMINAR
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 xl:w-1/4 mb-5">
                    <div className="bg-light border border-primary p-4">
                      <h3 className="text-lg font-semibold border-b mb-3">Practical Record</h3>
                      <div className="text-center">
                        {/* <ScrollingText text="Pending..." className="text-red-500" /> */}
                        <Link href="/student/practical" className="text-blue-500 underline">
                          RECORD
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="border-t border-primary p-4 text-uppercase">
            <span className="text-sm">
              <code className='text-secondary'>Best of Luck</code>
            </span>
          </div>
        </div>
      </section>

    </>
  )
}

export default Workspace