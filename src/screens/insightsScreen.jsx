import React, { useState } from "react";
import GoBack from "../component/goBack";

const InsightsScreen = () => {
  const [totalDays, setTotalDays] = useState(30); // Total days in the month
  const [presentDays, setPresentDays] = useState(21); // Days marked as present

  // Calculate attendance percentage
  const attendancePercentage = Math.round((presentDays / totalDays) * 100);

  return (
    <>
      <section>
        <div className="container-fluid py-1">
          <div className="row">
            <GoBack name={"Insights"} />
          </div>

          <div className="row my-4 d-flex justify-content-center align-items-center mt-5">
            <div className="col-12 col-md-6 text-center">
              {/* Circle Graph */}
              <div className="circle-graph">
                <svg viewBox="0 0 36 36" className="circular-chart blue">
                  <path
                    className="circle-bg"
                    d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="circle"
                    strokeDasharray={`${attendancePercentage}, 100`}
                    d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className="percentage">
                    {attendancePercentage}%
                  </text>
                </svg>
              </div>
              <p className="mt-3">
                You have attended <b>{presentDays}</b> out of <b>{totalDays}</b>{" "}
                days.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12 d-flex justify-content-end align-items-center py-2">
              <i class="fa-solid fa-circle colorG"></i>
              <p className="ms-2 pt-3">Arrived</p>
              <i class="fa-solid fa-circle colorY"></i>
              <p className="ms-2 pt-3">Leave</p>
              <i class="fa-solid fa-circle colorR"></i>
              <p className="ms-2 pt-3">Absent</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsightsScreen;
