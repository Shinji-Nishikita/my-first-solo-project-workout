import React, { Fragment, useState } from "react";

const InputData = () => {
  // const [weight, setWeight] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const weight = document.getElementById("weight");
    const height = document.getElementById("height");
    console.log(name.value);

    const body = {
      name: name.value,
      age: age.value,
      weight: weight.value,
      height: height.value,
    };
    console.log(body);
    await fetch("/datas", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    console.log("GOT!!!");
  };

  return (
    <div>
      <h1 className="text-center mt-5">My Workout 🏃‍♂️🏃‍♀️</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input id="name" type="text" placeholder="name" />
        <input id="age" type="text" placeholder="age" />
        <input id="weight" type="text" placeholder="weight(kg)" />
        <input id="height" type="text" placeholder="height(cm)" />
        <input
          type="submit"
          className="btn btn-success"
          placeholder="Register!"
        />
      </form>
    </div>
  );
};

export default InputData;
