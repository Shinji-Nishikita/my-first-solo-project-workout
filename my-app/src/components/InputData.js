import React, { Fragment, useState } from "react";

const InputData = () => {
  const [weight, setWeight] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(e);
    try {
      const body = { weight };
      const response = await fetch("/datas", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log("GOT!!!");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">My Workout 🏃‍♂️🏃‍♀️</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button className="btn btn-success">Register!</button>
      </form>
    </div>
  );
};

export default InputData;

// return (
//   <div>
//     <h1 className="text-center mt-5">My Workout 🏃‍♂️🏃‍♀️</h1>
//     <form className="d-flex mt-5" onSubmit={onSubmitForm}>
//       <input
//         type="text"
//         className="form-control"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//       />
//       <button className="btn btn-success">Register!</button>
//     </form>
//   </div>
// );
