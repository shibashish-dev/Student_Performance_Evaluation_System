import React from 'react'

const PersonalDetails = ({ User }) => {
  return (
    <>
        <section className='container mx-auto text-center my-2'>
        <div className="border border-primary mb-3 rounded-md" style={{ maxWidth: '100%' }}>
          <div className="bg-transparent border-b border-primary p-2">
            <h3 className='capitalize font-bold'>{User.name}</h3>
          </div>
          <div className="p-4">
            <span><strong>Email:</strong> {User.email}</span>
            <div className="details flex flex-col text-gray-800">
            <span> <strong>Gender :</strong> {User.gender}</span>
            <span> <strong>Date of Join :</strong> {User.doj.substring(0, 10)}</span>
            <span> <strong>Qualification :</strong> {User.qualification}</span>
            <span> <strong>Phone Number :</strong> {User.phone}</span>
            <span> <strong>Designation :</strong> {User.designation}</span>
            <span> <strong>Employee Number :</strong> {User.empcode}</span>
            <span> <strong>Branch :</strong> {User.branch}</span>
            <span> <strong>Subjects Taken :</strong>{User.subjects.map((subject,index) =>{
              return (

                <span key={index}>  {subject.name}{index < User.subjects.length - 1 && ", "} </span>
              )
            })}</span>
            </div>
          </div>
          <div className="bg-transparent border-t border-primary p-2 uppercase">
            <span><strong>Id:</strong> {User._id}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default PersonalDetails