import React, { useState } from "react";

const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [attendance, setAttendance] = useState({}); // Store attendance status for each day

  // Helper to get days in the current month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const handleDayClick = (day) => {
    const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    setAttendance((prev) => ({
      ...prev,
      [key]: prev[key] === "Present" ? "Absent" : "Present",
    }));
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
      {/* Calendar Header */}
      <div>
        <button onClick={goToPreviousMonth}>◀</button>
        <span style={{ margin: "0 15px" }}>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button onClick={goToNextMonth}>▶</button>
      </div>

      {/* Calendar Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "5px",
          marginTop: "20px",
        }}
      >
        {/* Days of the week */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} style={{ fontWeight: "bold" }}>
            {day}
          </div>
        ))}

        {/* Empty cells before the first day */}
        {Array.from({
          length: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
          ).getDay(),
        }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }).map((_, day) => {
          const dayNumber = day + 1;
          const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${dayNumber}`;
          const status = attendance[key] || "None";

          return (
            <div
              key={dayNumber}
              onClick={() => handleDayClick(dayNumber)}
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                backgroundColor:
                  status === "Present"
                    ? "#c8e6c9"
                    : status === "Absent"
                    ? "#ffcdd2"
                    : "#f5f5f5",
                cursor: "pointer",
              }}
            >
              <p style={{ margin: 0 }}>{dayNumber}</p>
              <small>{status}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
