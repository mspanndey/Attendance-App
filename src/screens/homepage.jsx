import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Homepage = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCameraCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Generate preview URL
      setCapturedImage(imageUrl);

      // Send to server logic here (optional)
    }
  };

  const openCamera = () => {
    const cameraInput = document.getElementById("cameraInput");
    if (cameraInput) cameraInput.click(); // Programmatically click the file input
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col xs={12} className="d-flex flex-row">
          <Image
            src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"
            style={{
              width: "100px",
              height: "100px",
            }}
          ></Image>
          <h3 style={{ fontStyle: "italic" }}>User Name</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="p-3">
          <Calendar />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          {/* Hidden file input for camera */}
          <input
            type="file"
            accept="image/*"
            capture="environment" // Rear camera on supported devices
            id="cameraInput"
            style={{ display: "none" }}
            onChange={handleCameraCapture}
          />

          {/* Check In Button */}
          <Button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 0",
              width: "80%",
            }}
            onClick={openCamera}
          >
            Check In
          </Button>

          {/* Captured Image Preview */}
          {capturedImage && (
            <div className="my-3">
              <h5>Captured Image:</h5>
              <Image
                src={capturedImage}
                alt="Captured"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
