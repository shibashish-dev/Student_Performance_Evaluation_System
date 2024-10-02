"use client";
import { useGlobalContext } from '@/contexts/GlobalContext';
import Link from 'next/link';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Panel } from 'primereact/panel';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const AssignmentSubmit = ({ User }) => {
  const { register, handleSubmit, setValue, formState: { isSubmitted }, reset } = useForm();
  const [file, setFile] = useState(null);  // To store the selected file

  // Handle form submission
  const onSubmitHandler = async (data, ass) => {
    const formData = new FormData();
    formData.append("file", file);  // Append the selected file
    formData.append("assignmentId", ass._id);  // Send the assignment ID
    formData.append("userId", "user_id");  // You can replace with actual user ID

    try {
      const response = await fetch("/api/submit-assignment", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Handle success (e.g., show a message or update the state)
        alert("Assignment submitted successfully!");
        reset(); // Reset the form after successful submission
      } else {
        alert("Failed to submit the assignment.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting the assignment.");
    }
  };
  // Dummy assignments data
  const assignments = [
    {
      _id: "1",
      title: "Math Assignment 1",
      desc: "Solve the algebraic equations provided in the document.",
      teacher: { name: "Mr. John Doe" },
      file: "https://example.com/math-assignment-1.pdf",
      isCompleted: false,
      grade: null
    },
    {
      _id: "2",
      title: "Science Assignment 1",
      desc: "Complete the lab report on chemical reactions.",
      teacher: { name: "Ms. Jane Smith" },
      file: "https://example.com/science-assignment-1.pdf",
      isCompleted: true,
      grade: 85
    },
  ];



  const headerTemplate = (options) => {
    const className = `${options.className} border-b border-primary rounded-t-md flex items-center p-3 bg-gray-200 justify-content-space-between`;

    return (
      <div className={className}>
        <div className="flex align-items-center gap-2">
          <span className="font-bold">#{options?.index + 1} {options?.ass?.title} </span>
        </div>
        <div>
          {/* <Menu model={items} popup ref={configMenu} id="config_menu" /> */}
          <button className="p-panel-header-icon p-link mr-2" onClick={(e) => configMenu?.current?.toggle(e)}>
            <span className="pi pi-cog"></span>
          </button>
          {options.togglerElement}
        </div>
      </div>
    );
  };


  return (
    <>

      <div className="container mx-auto my-4">
        <div className="accordion" id="accordionExample">
          {assignments?.map((ass, index) => (

            <div className="card border border-primary rounded-md mx-5 my-5" key={index}>

              <Panel header={`#${index + 1} ${ass?.title}`} headerTemplate={headerTemplate({ index, ass })} toggleable>
                <div className="m-0 flex flex-col gap-3 ">
                  <strong className="block text-gray-800">{ass?.desc} (Status: {ass.isCompleted ? "Completed" : "Incomplete"}{ass.isCompleted ? `, Grade: ${ass.grade} ` : ''})</strong>

                  <code>Assigned By: {ass.teacher.name}</code>
                  <form
                    onSubmit={handleSubmit((data) => onSubmitHandler(data, ass))}
                    className="mt-4 space-y-4 "
                  >
                    <div className='flex flex-col gap-3'>
                      <label className="block text-gray-700">Upload Your Assignment Document</label>
                      <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded"
                        {...register("file", { required: "Please upload a file" })}
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                      disabled={isSubmitted}
                    >
                      Upload
                    </button>
                  </form>
                </div>
              </Panel>
            </div>



          ))}
        </div>
      </div>
    </>
  );
};

export default AssignmentSubmit;
