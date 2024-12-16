import React, { useEffect, useState } from "react";
import GoBack from "../component/goBack";

const AttendanceScreen = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDay, setStartDay] = useState(0); // Track the start day (0 for Sunday, 1 for Monday, etc.)
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(startDay);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDay(date.getDay()); // Get the start day (0 for Sunday, 1 for Monday, etc.)
  }, [currentDate]);

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const prevMonth = (e) => {
    e.preventDefault();
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = (e) => {
    e.preventDefault();
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Group the days into weeks
  const weeks = [];
  let currentWeek = [];

  // Push empty days for the starting space before the 1st day
  for (let i = 0; i < startDay; i++) {
    currentWeek.push(null); // Empty space for days before the 1st day
  }

  daysInMonth.forEach((date) => {
    currentWeek.push(date);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });

  // If the last week has fewer than 7 days, add empty spaces to make the row complete
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null); // Add empty spaces for the remaining days
    }
    weeks.push(currentWeek);
  }

  return (
    <section>
      <div className="container-fluid py-1">
        <div className="row">
          <GoBack name={"Attendance"} />
        </div>
        <div className="row ps-5 bg-primary">
          <div
            className="col-12 d-flex justify-content-start align-items-end pt-4 ps-0"
            style={{ height: "90px" }}
          >
            <i className="fa-solid fa-clock-rotate-left Csize"></i>
            <p className="mb-0 ms-5 text-white">
              Attendance <span className="headingSize"> 21</span> Days
            </p>
          </div>
        </div>
        <div className="row my-2 ">
          <div className="col-12 d-flex justify-content-start p-1 align-items-center">
            <i className="fa-solid fa-arrow-left ms-2 " onClick={prevMonth}></i>
            <h2 className="margin-right">
              {currentDate.toLocaleDateString("en-US", { month: "long" })},
              {currentDate.getFullYear()}
            </h2>
            <i className="fa-solid fa-arrow-right" onClick={nextMonth}></i>
          </div>
          <hr />
          <div className="col d-flex">
            {dayNames.map((day, idx) => (
              <div key={idx} className="col text-center">
                <p className="m-0 daysSize">{day}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Render the weeks */}
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="row">
            {week.map((date, idx) => (
              <div
                key={idx}
                className={`col text-center p-2 ${date ? "bg-white" : ""}`}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  date && handleDateClick(date.toISOString().split("T")[0])
                }
              >
                {date ? (
                  <>
                    <p className="m-0">{date.getDate()}</p>
                  </>
                ) : (
                  <p className="m-0"> </p> // Empty space for non-existent days
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center py-2">
            <i class="fa-solid fa-circle colorB"></i>
            <p className="ms-2 pt-3">Arrived</p>
            <i class="fa-solid fa-circle colorY"></i>
            <p className="ms-2 pt-3">Leave</p>
            <i class="fa-solid fa-circle colorR"></i>
            <p className="ms-2 pt-3">Absent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceScreen;
