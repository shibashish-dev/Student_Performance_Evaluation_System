import { Chips } from 'primereact/chips';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

const UserProfile = ({ User }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: User.email,
      phone: User.phone,
      address: User.address,
      skills: User.skills.join(', '),
    },
  });
  const [skills, setSkills] = useState(User.skills); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const onsubmit = async (data) => {
    data.skills = skills; 
    data.id = User._id; 

    try {
      const response = await fetch('/api/students/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage('Profile updated successfully!');
        reset(); // Reset form after successful submission
      } else {
        setMessage(result.error || 'Error updating profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <>

      <section className='container mx-auto text-center my-2 '>
        <div className="border border-primary mb-3 rounded-md" style={{ maxWidth: '100%' }}>
          <div className="bg-transparent border-b border-primary p-2">
            <h3 className='font-bold'>Edit Your Details</h3>
          </div>
          <div className="p-4">
            <div className="details flex flex-col text-gray-800">
              <form onSubmit={handleSubmit(onsubmit)}>

                {/* Phone Number */}
                <div className="flex mb-3">
                  <label htmlFor='phone' className="w-1/4 p-2 my-auto mx-2 bg-gray-200">Phone</label>
                  <input
                    type="number"
                    className="w-3/4 p-2 border"
                    {...register('phone')}
                  />
                </div>

                {/* Address */}
                <div className="flex mb-3">
                  <label htmlFor='address' className="w-1/4 p-2 my-auto mx-2 bg-gray-200">Address</label>
                  <textarea
                    className="w-3/4 p-2 border"
                    {...register('address')}
                  />
                </div>

                {/* Skills */}
                <div className="flex mb-3  flex-wrap gap-3">
                  <label htmlFor='skills' className="w-1/4 p-2 text-center my-auto mx-2 bg-gray-200">Skills</label>
                  <Chips
                    value={skills}
                    onChange={(e) => setSkills(e.value)}
                    separator=","
                    className=" p-2 border outline-none active:outline-none focus:outline-none"
                  />


                  {/* <input
                  type="text"
                  className="w-3/4 p-2 border"
                  {...register('skills')}
                /> */}
                </div>

                {/* Submit */}
                <div className="mb-3">
                  <button className="mt-3 btn-solid-reg bg-primary hover:secondary cursor-pointer " type="submit">Update</button>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-transparent border-t border-primary p-2">
            <span><strong>Id:</strong> {User._id}</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile