import React from "react";

function ClassInput({ classes, setClasses }) {

  const addClass = () => {
    setClasses([...classes, { name: "", capacity: "" }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...classes];
    updated[index][field] = value;
    setClasses(updated);
  };

  const removeClass = (index) => {
    const updated = classes.filter((_, i) => i !== index);
    setClasses(updated);
  };

  return (
    <div className="card">
      <h2>Class Details</h2>

      {classes.map((cls, index) => (
        <div className="class-row" key={index}>
          <input
            placeholder="Class Name"
            value={cls.name}
            onChange={(e) =>
              handleChange(index, "name", e.target.value)
            }
          />

          <input
            type="number"
            placeholder="Capacity"
            value={cls.capacity}
            onChange={(e) =>
              handleChange(index, "capacity", e.target.value)
            }
          />

          <button onClick={() => removeClass(index)}>❌</button>
        </div>
      ))}

      <button className="add-btn" onClick={addClass}>
        + Add Class
      </button>
    </div>
  );
}

export default ClassInput;