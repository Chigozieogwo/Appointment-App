import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Button, Card, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import AptCard from "./aptcard";

function AppointmentDetails() {
  const appointab = {
    border: "0.5px solid #3F6CC0",
    borderTop: "0px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  };

  const [aptdetail, setAptDetail] = useState({
    petName: "",
    petOwner: "",
    date: "",
    time: "",
    appointment: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setAptDetail((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const [aptLists, setAptList] = useState([]);

  function addItem() {
    setAptList((prevValue) => {
      return [...prevValue, aptdetail];
    });

    setAptDetail({
      petName: "",
      petOwner: "",
      date: "",
      time: "",
      appointment: "",
    });
  }

  function handleDelete(id) {
    console.log(id);

    setAptList((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });

    // Use this to know what is going on under the hood

    // setAptList((prevValue) => {
    //   return [
    //     prevValue.filter((value, index) => {
    //       return [index !== id];
    //     }),
    //   ];
    // });
  }
  // const [aptEdit, setAptEdit] = useState({
  //   petName: "",
  //   petOwner: "",
  //   date: "",
  //   time: "",
  //   appointment: "",
  // });

  function handleEdit(id) {
    console.log(id);
    const filterItem = aptLists.filter((value, index) => {
      return index !== id;
    });
    console.log(filterItem);

    const selectedItem = aptLists.filter((value, index) => {
      return index === id;
    });
    console.log(selectedItem);

    setAptList([...filterItem]);

    setAptDetail({
      petName: selectedItem.petName,
      petOwner: selectedItem.petOwner,
      date: selectedItem.date,
      time: selectedItem.time,
      appointment: selectedItem.appointment,
    });

    // setAptDetail([...selectedItem]);
    // setAptList((prevValue) => {
    //   return prevValue.filter((value, index) => {
    //     return index !== id;
    //   });
    // });
  }

  return (
    <div className="wrapper">
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header style={{ padding: "0" }}>
            <Accordion.Toggle
              as={Button}
              variant="btn btn-custom btn-block"
              eventKey="1"
            >
              <span>
                {" "}
                <span style={{ size: "20px" }}> + </span> Add Appointments{" "}
              </span>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={appointab}>
              <div>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    <h6
                      style={{
                        paddingLeft: "60px",
                        fontWeight: "bold",
                        fontFamily: " McLaren cursive",
                      }}
                    >
                      {" "}
                      Pet's Name
                    </h6>
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      name="petName"
                      value={aptdetail.petName}
                      placeholder="Pet's Name"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    <h6
                      style={{
                        paddingLeft: "60px",
                        fontWeight: "bold",
                        fontFamily: " McLaren",
                      }}
                    >
                      {" "}
                      Pet's Owner
                    </h6>
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      name="petOwner"
                      value={aptdetail.petOwner}
                      placeholder="Pet's Owner"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    <h6
                      style={{
                        paddingLeft: "60px",
                        fontWeight: "bold",
                        fontFamily: " McLaren",
                      }}
                    >
                      {" "}
                      Date{" "}
                    </h6>
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      name="date"
                      value={aptdetail.date}
                      placeholder="dd/mm/yy"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label column sm="2">
                    <h6
                      style={{
                        paddingLeft: "60px",
                        fontWeight: "bold",
                        fontFamily: " McLaren",
                      }}
                    >
                      {" "}
                      Time
                    </h6>
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      onChange={handleChange}
                      name="time"
                      value={aptdetail.time}
                      placeholder="--:--:-- am"
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column sm="2">
                    <h6
                      style={{
                        paddingLeft: "60px",
                        fontWeight: "bold",
                        fontFamily: " McLaren",
                      }}
                    >
                      {" "}
                      Apt. Notes
                    </h6>
                  </Form.Label>
                  <Col sm="10">
                    <textarea
                      className="form-control"
                      onChange={handleChange}
                      name="appointment"
                      value={aptdetail.appointment}
                      rows="3"
                      placeholder="Appointment Notes"
                    ></textarea>
                  </Col>
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button variant="btn btn-custom" onClick={addItem}>
                    <span>Add Appointment</span>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div
        style={{
          marginTop: "30px",
        }}
      >
        <h1
          style={{
            color: "#3F6CC0",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          List of Appointments
        </h1>
        <ul style={{ listStyleType: "none" }}>
          {aptLists.map((item, index) => (
            <AptCard
              key={index}
              id={index}
              name={item.petName}
              owner={item.petOwner}
              date={item.date}
              time={item.time}
              appointment={item.appointment}
              onChecked={handleDelete}
              onCalled={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentDetails;
