import React from 'react'
import Progressbar from '../Progressbar'
import { Fieldset } from 'primereact/fieldset';

const Performance = ({ User }) => {

  const averageMark = () => {
    const maxInternalMark = 50;
    // Calculate normalized marks for each subject
    const normalizedMarks = User.marks.map(subject => ({
      internalMark: (subject.mark / maxInternalMark) * 100,


    }));
    // const totalMarks = Student.marks.reduce((sum, mark) => sum + mark.mark, 0);
    const totalInternalMarks = normalizedMarks.reduce((total, subject) => total + subject.internalMark, 0);
    return totalInternalMarks / User.marks.length;
  };
  return (
    <>

      <section className="container mx-auto text-center my-2">
        <div className="border border-primary mb-3 rounded-md" style={{ maxWidth: "100%" }}>
          <div className="border-b border-primary p-2">
            <h2 className="text-2xl font-bold text-primary">Performance Evaluation</h2>
          </div>
          <div className="p-4">
            <div className="details flex flex-col text-gray-800">
              <section className="pt-4">
                <div className="container flex justify-center flex-wrap">
                  <div className="container mx-auto my-4 p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {User.marks.map((entry) => (
                        <div key={entry._id} className="bg-white shadow-md rounded-lg p-4 border border-primary">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{entry.title}</h3>
                          <p className="text-gray-600 my-1"><strong>Internal Marks:</strong> {entry.mark}</p>
                          <p className="text-gray-600 my-1"><strong>Quiz & Surprise:</strong> {entry.qas}</p>

                          {/* Progress Bar */}
                          <div className="my-3">
                            <Progressbar value={entry.mark} maxValue={50} color="#eb427e" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-white shadow-md rounded-lg border border-primary">
                      <div className="text-center mb-2">
                        <h3 className="text-xl font-bold text-gray-800">Overall Performance</h3>
                      </div>
                      <div className="text-center text-lg font-medium text-gray-700 mb-3">
                        <p>Average Mark: {averageMark()}%</p>
                      </div>

                      {/* Progress Bar for Average */}
                      <div className="my-3">
                        <Progressbar value={averageMark()} color="#594cda" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="border-t border-primary p-2 uppercase">
            <span><strong>EducTin Score:</strong> {User.performanceScore}</span>
          </div>
        </div>
      </section>

    </>
  )
}

export default Performance