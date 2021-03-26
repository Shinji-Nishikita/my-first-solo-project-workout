import React, { Fragment, useEffect, useState } from "react";

const GetDatas = () => {
  const [data, setData] = useState("test");
  const [bmr, setBmr] = useState(0);

  useEffect(() => {
    const getdata = async () => {
      const response = await fetch("/datas");
      const jsonData = await response.json();
      setData(jsonData);
    };
    getdata();
  }, []);

  const measureBmr = () => {
    Object.keys(data).map((item) => {
      let result = 0;
      result =
        13 * data[item].weight +
        5 * data[item].height -
        6 * data[item].age +
        88;
      setBmr(result);
    });
  };

  return (
    <Fragment>
      {/* <p>{data[0].name}</p> */}
      {/* {JSON.stringify(data, null, 2)} */}
      {/* <ul>
        {Object.keys(data).map((item) => {
          return (
            <>
              <li>{data[item].name}</li>
              <li>{data[item].weight}</li>
              <li>{data[item].height}</li>
              <li>{data[item].age}</li>
              <li>
                {13.397 * data[item].weight +
                  4.799 * data[item].height -
                  5.677 * data[item].age +
                  88.362}
              </li>
            </>
          );
        })}
      </ul> */}
      <br></br>
      <tbody>
        <button className="btn btn-success" onClick={measureBmr}>
          your BMR (基礎代謝)
        </button>
        <p>{"yourBMR is "}</p>
        <>{bmr + " kcal"}</>
      </tbody>
    </Fragment>
  );
};

export default GetDatas;
