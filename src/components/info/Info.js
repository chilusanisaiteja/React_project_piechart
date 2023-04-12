import "./Info.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Info() {
  const [college, setcollege] = useState(1);
  const [students, setstudents] = useState([]);
  const [skillvalues, setskillvalues] = useState([]);

  const handlesubmit = async () => {
    setskillvalues([]);
    await axios
      .get(`http://localhost:4000/student/${college}`)
      .then((res) => {
        console.log(res.data);
        setstudents(res.data);
      })
      .catch((err) => console.log(err));
    const value = new Array(15).fill(0);
    students.map((student) =>
      student.skills.map((skill) => value[skills2.indexOf(skill)]++)
    );
    setskillvalues(value);
  };

  const skills2 = [
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Node.js",
    "React",
    "Angular",
    "Vue.js",
    "MongoDB",
    "MySQL",
    "Oracle",
    "Php",
  ];
  const randomcolors = [
    "#DFFF00",
    "#FF7F50",
    "#40E0D0",
    "#FFBF00",
    "#9FE2BF",
    "#CCCCFF",
    "#6495ED",
    "#800000",
    "#808000",
    "#008000",
    "#000080",
    "#FF00FF",
    "#800080",
    "#C0C0C0",
    "	#0000FF",
  ];

  const data = {
    labels: [
      "C++",
      "Java",
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
      "Node.js",
      "React",
      "Angular",
      "Vue.js",
      "MongoDB",
      "MySQL",
      "Oracle",
      "Php",
    ],
    datasets: [
      {
        data: skillvalues,
        backgroundColor: randomcolors,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="collegeInfo">
      <div className="inputinfo">
        <input
          type="text"
          placeholder="College_id"
          value={college}
          onChange={(e) => setcollege(e.target.value)}
        />
        <button className="button1" onClick={handlesubmit}>
          Submit
        </button>
      </div>
      <div className="piechart">
        <h1>Skills Pie Chart of College{college}</h1>
        <button className="button2" onClick={handlesubmit}>
          Show Pie Diagram
        </button>
        <Pie data={data} width="40vw" height="25vw" />
      </div>
    </div>
  );
}

export default Info;
