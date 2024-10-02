import React, { useState } from 'react'

const Attedance = ({ User }) => {

  const [selectedMonth, setSelectedMonth] = useState("");

  const averageAttendance = () => {
    const totalMonths = User.attendance.length;
    if (totalMonths === 0) return 0;

    let totalPresentDays = 0;
    let totalClassDays = 0;

    User.attendance.forEach((month) => {
      month.details.forEach((day) => {
        totalPresentDays += day.presentNo;
        totalClassDays += day.totalClass;
      });
    });

    if (totalClassDays === 0) return 0;

    return ((totalPresentDays / totalClassDays) * 100).toFixed(2);
  };

  const filterAttendanceByMonth = (month) => {
    if (month === "") return User.attendance || [];
    return User.attendance?.filter((record) => record.month === month);
  };

  const calculateSemesterTotalsForAllMonths = (s, subject) => {
    let totalPresentDays = 0;
    let totalClassDays = 0;

    s.attendance.forEach((month) => {
      month.details.forEach((day) => {
        if (day.subject === subject) {
          totalPresentDays += day.presentNo;
          totalClassDays += day.totalClass;
        }
      });
    });

    return {
      present: totalPresentDays,
      classes: totalClassDays,
      average: totalClassDays === 0 ? 0 : ((totalPresentDays / totalClassDays) * 100).toFixed(2),
    };
  };


  return (
    <>
    
    
    <section className="container mx-auto text-center my-4">
        <div className="border border-primary mb-3 rounded-md" >
          <div className="bg-transparent border-b border-primary p-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Attendance Records</h3>
            <select
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="form-select w-1/2 p-2 border border-gray-300 rounded"
            >
              <option value="">Overall Semester</option>
              {[
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December",
              ].map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="p-4">
            <div className="details flex flex-col text-gray-800 overflow-x-auto">
              {selectedMonth !== "" ? (
                <table className="min-w-full table-auto border border-primary ">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-2">Semester</th>
                      <th className="border border-gray-300 p-2">Subject</th>
                      <th className="border border-gray-300 p-2">Total Attended</th>
                      <th className="border border-gray-300 p-2">Total Class Conducted</th>
                      <th className="border border-gray-300 p-2">Attendance %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterAttendanceByMonth(selectedMonth).length !== 0 ? (
                      filterAttendanceByMonth(selectedMonth).map((s) =>
                        s.details?.map((details, index) => {
                          const avg = ((details.presentNo / details.totalClass) * 100).toFixed(2);
                          return (
                            <tr
                              key={index}
                              className={`${avg < 75 ? "bg-red-100" : "bg-green-100"}`}
                            >
                              <td className="border border-gray-300 p-2">{s.sem}</td>
                              <td className="border border-gray-300 p-2">{details.title}</td>
                              <td className="border border-gray-300 p-2">{details.presentNo}</td>
                              <td className="border border-gray-300 p-2">{details.totalClass}</td>
                              <td className="border border-gray-300 p-2">{avg}</td>
                            </tr>
                          );
                        })
                      )
                    ) : (
                      <tr>
                        <td colSpan="5" className="p-4 text-red-600">No Data Found for {selectedMonth}!</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full table-auto border border-primary">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-2">Subject</th>
                      <th className="border border-gray-300 p-2">Total Attended</th>
                      <th className="border border-gray-300 p-2">Total Class Conducted</th>
                      <th className="border border-gray-300 p-2">Attendance %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(
                      User.attendance.reduce((acc, month) => {
                        month.details.forEach((day) => {
                          if (!acc[day.subject]) {
                            acc[day.subject] = { present: 0, classes: 0 };
                          }
                          acc[day.subject].present += day.presentNo;
                          acc[day.subject].classes += day.totalClass;
                        });
                        return acc;
                      }, {})
                    ).map((subjectId, index) => {
                      const subjectDetail = User.subjects.find(
                        (subject) => subject.id === subjectId
                      );
                      const total = calculateSemesterTotalsForAllMonths(User, subjectId);
                      return (
                        <tr
                          key={index}
                          className={`${total.average < 75 ? "bg-red-100" : "bg-green-100"}`}
                        >
                          <td className="border border-gray-300 p-2">{subjectDetail.name}</td>
                          <td className="border border-gray-300 p-2">{total.present}</td>
                          <td className="border border-gray-300 p-2">{total.classes}</td>
                          <td className="border border-gray-300 p-2">{total.average}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          <div className={`p-4 ${averageAttendance() < 75 ? 'bg-red-100' : 'bg-green-100'} border-t border-primary`}>
            <span className={`text-lg font-bold `}>Overall Attendance %: {averageAttendance()}</span>
          </div>
        </div>
      </section>
    
    
    </>
  )
}

export default Attedance