import "./form.css";
import { useState,useEffect } from "react";
function Form() {

  return (
    <div id="form">
      <h1 style={{textAlign:"center"}}>Form</h1>
      <Left />
    </div>
  );
}


function Right(props) {
  return (
    <div  id="right">
      <h1>Leave Letter</h1>
      <h2>
        Respected Sir/Madam,<br></br>I am {props.name}, studying in{" "}
        {props.Class} class. I am suffering from {props.disease} and I am unable
        to attend the school. So, I request you to grant me leave for {props.days}{" "}
        days from {props.fdate} to {props.tdate}.<br></br>
      </h2>
    </div>
  );
}


function Left() {
  const [name, setName] = useState("______");
  const [Class, setClass] = useState("______");
  const [disease, setDisease] = useState("______");
  const [days, setDays] = useState("______");
  const [fdate, setFdate] = useState("______");
  const [tdate, setTdate] = useState("______");
  useEffect(() => {
    console.log("Hi I am john, my age is 17");
  },[name]);
  return (
    <div id="center">
      <Right
        name={name}
        Class={Class}
        disease={disease}
        days={days}
        fdate={fdate}
        tdate={tdate}
      />
      <div id="inputGroups">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
        ></input>
        <input
          type="text"
          onChange={(e) => setClass(e.target.value)}
          placeholder="Enter your Class"
        ></input>
        <input
          type="text"
          onChange={(e) => setDisease(e.target.value)}
          placeholder="Enter your Disease"
        ></input>
        <input
          type="text"
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter your Days"
        ></input>
        <input
          type="date"
          onChange={(e) => setFdate(e.target.value)}
          placeholder="Enter your From Date"
        ></input>
        <input
          type="date"
          onChange={(e) => setTdate(e.target.value)}
          placeholder="Enter your To Date"
        ></input>
      </div>
    </div>
  );
}
export default Form;
