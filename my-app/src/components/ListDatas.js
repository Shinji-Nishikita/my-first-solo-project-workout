import React, { Fragment, useEffect, useState } from "react";
import InputData from "./InputData";

const ListDatas = () => {
  const [data, setData] = useState("test");
  console.log(data);

  useEffect(() => {
    const getdata = async () => {
      console.log("hi");
      const response = await fetch("http://localhost:5000/datas");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    };
    console.log("hello");
    getdata();
  }, []);

  console.log(data);

  // const handleClick = () => {
  //   props.setView("result");
  //   soundPlay("https://www.mboxdrive.com/Deadbolt%20-%20Voodoo%20Trucker.mp3");
  // };
  const show = () => {
    console.log("show!");
  };

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>test</th>
          </tr>
        </thead>
        <tbody>
          <button onClick={show}>Search</button>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListDatas;
