import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { updateItem } from "../../../config/FirebaseMethods";

const UpdateShowResult = () => {
  const [data, setData] = useState({
    course: "",
    name: "",
    fatherName: "",
    rollNo: "",
    mark: "",
    result: "Pass",
  });

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setData(location.state);
    }
  }, [location.state]);

  const currentV = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const allData = (e) => {
    e.preventDefault();
    updateItem(data)
      .then((res) => {
        console.log("Data updated successfully", res);
      })
      .catch((err) => {
        console.log("Error updating data", err);
      });
  };

  return (
    <div>
      <section className="updateShowResult">
        <div className="heading">
          <h1>Update Show Result</h1>
        </div>

        <form onSubmit={allData}>
          <input
            type="text"
            placeholder="Course name"
            name="course"
            value={data.course}
            onChange={currentV}
          />

          <input
            type="text"
            placeholder="Enter student name"
            name="name"
            value={data.name}
            onChange={currentV}
          />

          <input
            type="text"
            placeholder="Enter student father name"
            name="fatherName"
            value={data.fatherName}
            onChange={currentV}
          />

          <input
            type="text"
            placeholder="Enter student roll no"
            name="rollNo"
            value={data.rollNo}
            onChange={currentV}
          />

          <input
            type="number"
            placeholder="Enter student mark"
            name="mark"
            value={data.mark}
            onChange={currentV}
          />

          <select name="result" onChange={currentV} value={data.result}>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>

          <button type="submit">Update</button>
        </form>
      </section>
    </div>
  );
};

export default UpdateShowResult;
