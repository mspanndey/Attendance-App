import React from "react";
import GoBack from "../component/goBack";

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: "Attendance Reminder",
      description: "Don't forget to mark your attendance today!",
      date: "2024-12-15",
      type: "reminder", // types: reminder, alert, info
    },
    {
      id: 2,
      title: "Monthly Attendance Summary",
      description: "Your attendance for November: 85%. Keep it up!",
      date: "2024-12-01",
      type: "info",
    },
    {
      id: 3,
      title: "Missed Attendance",
      description: "You missed marking attendance on 2024-12-14.",
      date: "2024-12-14",
      type: "alert",
    },
  ];

  const getNotificationStyle = (type) => {
    switch (type) {
      case "reminder":
        return "bg-warning text-dark";
      case "alert":
        return "bg-danger text-white";
      case "info":
        return "bg-info text-white";
      default:
        return "bg-light text-dark";
    }
  };

  return (
    <section>
      <div className="container-fluid py-1">
        <div className="row">
          <GoBack name={"Notification"} />
        </div>
        <div className="row">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`col-12 p-3 mb-3 rounded ${getNotificationStyle(
                notification.type
              )}`}
            >
              <h5>{notification.title}</h5>
              <p className="mb-1">{notification.description}</p>
              <small className="text-muted">{notification.date}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotificationScreen;
