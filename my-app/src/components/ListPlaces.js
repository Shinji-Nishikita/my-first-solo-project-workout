import React, { Fragment, useEffect, useState } from "react";

const ListPlaces = () => {
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    try {
      const response = await fetch("http://localhost5000/places");
      const jsonData = await response.json();

      console.log(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getPlaces();
  });
  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Destination</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListPlaces;
