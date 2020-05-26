import React from "react";

function AptCard(props) {
  const {
    id,
    name,
    owner,
    date,
    time,
    appointment,
    onChecked,
    onCalled,
  } = props;

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
        border: "1px solid #3F6CC0",
        listStyleType: "none",
        margin: "30px",
        padding: "20px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: " space-between",
            marginBottom: "20px",
            borderBottom: "2px solid #3F6CC0",
          }}
        >
          <h1
            style={{
              color: "#3F6CC0",
              fontSize: "40px",

              fontWeight: "bold",
            }}
          >
            <span
              style={{
                color: "white",
                backgroundColor: "#3F6CC0",
                borderRadius: "50%",
              }}
              className="badge badge-primary"
            >
              {id + 1}
            </span>
            <span style={{ marginLeft: "20px" }}></span>
            {name}
          </h1>
          <div style={{ display: "flex", justifyContent: " space-between" }}>
            <h1 style={{ color: "#000", fontSize: "15px", padding: "15px" }}>
              Date : {date}
            </h1>
            <h1 style={{ color: "#000", fontSize: "15px", padding: "15px" }}>
              Time: {time}
            </h1>
          </div>
        </div>
      </div>

      <h3
        style={{
          color: "#3F6CC0",
          fontSize: "20px",
          paddingTop: "15px",
        }}
      >
        Owner : {owner}
      </h3>
      <p style={{ color: "#000", fontSize: "15px", padding: "20px" }}>
        <span
          style={{ color: "#3F6CC0", fontSize: "25px", fontWeight: "bold" }}
        >
          Note :
        </span>{" "}
        {appointment}{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => {
              onCalled(id);
            }}
            style={{ marginRight: "20px" }}
            className="btn btn-success"
          >
            Edit
          </button>
          <div>
            <button
              onClick={() => {
                onChecked(id);
              }}
              className="btn btn-primary "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AptCard;
