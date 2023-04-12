import "./Home.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [colleges, setcolleges] = useState([]);
  const url = "http://localhost:4000/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setcolleges(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  colleges.sort(function (a, b) {
    return a.id - b.id;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(colleges.length / 10);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getTableData = () => {
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    return colleges.slice(start, end);
  };

  return (
    <div className="home">
      <table>
        <thead>
          <tr>
            <th>CollegeId</th>
            <th>College Name</th>
            <th>Year Foundede</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Courses</th>
            <th>Students Info</th>
          </tr>
        </thead>
        <tbody>
          {getTableData().map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year_founded}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.country}</td>
              <td>{item.courses}</td>
              <td>
                <Link to={`/student/${item.id}`}>
                  <button className="student">Students Info</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
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

export default Home;
