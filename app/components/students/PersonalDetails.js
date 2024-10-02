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
              <span><strong>Gender:</strong> {User.gender}</span>
              <span><strong>Date of Birth:</strong> {User.dob.substring(0, 10)}</span>
              <span><strong>10th Mark (%):</strong> {User.schoolMark}%</span>
              <span><strong>12th Mark (%):</strong> {User.intermediateMark}%</span>
              <span><strong>Academic Year:</strong> {User.academic}</span>
              <span><strong>Phone Number:</strong> {User.phone}</span>
              <span><strong>Registration Number:</strong> {User.redgno}</span>
              <span><strong>Branch:</strong> {User.branch}</span>
              <span><strong>Guardian Name:</strong> {User.guardianName}</span>
              <span><strong>Guardian Phone:</strong> {User.guardianContact}</span>
              <span><strong>Address:</strong> {User.address}</span>
              <span><strong>Skills:</strong> {User.skills.join(', ')}</span>
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