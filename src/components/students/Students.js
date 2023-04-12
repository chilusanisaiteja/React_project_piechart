import "./Students.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Students() {
  const [students, setstudents] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${params.id}`)
      .then((res) => {
        setstudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  students.sort(function (a, b) {
    return a.id - b.id;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(students.length / 10);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getTableData = () => {
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    return students.slice(start, end);
  };

  return (
    <div className="home2">
      <table>
        <thead>
          <tr>
            <th>StudentId</th>
            <th>Student Name</th>
            <th>Batch</th>
            <th>College Name</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          {getTableData().map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td> {item.year_of_batch}</td>
              <td>college{item.college_Id}</td>
              <td>{item.skills.join(",")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination2">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Students;
