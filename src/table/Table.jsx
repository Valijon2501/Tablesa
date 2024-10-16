import { useState } from "react";
import "./Table.css";

export default function Table() {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({ name: "", number: "" });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { name, number } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function addinputdata() {
    if (name === "" && number === "") {
      alert("Malumotni kiriting");
    } else {
      setArray([...array, { name, number }]);
      // console.log(inputdata);
      setInputdata({ name: "", number: "" });
    }
  }

  // deletedata
  function deletedata(i) {
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  // updatedata
  function updatedata(i) {
    let { name, number } = array[i];
    setInputdata({ name, number });
    setBolin(true);
    setIndex(i);
  }

  //

  function undateinfo() {
    let total = [...array];
    total.splice(index, 1, { name, number });
    setArray(total);
    setBolin(false);
    setInputdata({ name: "", number: "" });
  }
  return (
    <div>
      <input
        type="text"
        value={inputdata.name || ""}
        name="name"
        onChange={data}
      />
      <input
        type="number"
        value={inputdata.number || ""}
        name="number"
        onChange={data}
      />
      <button onClick={!bolin ? addinputdata : undateinfo}>
        {!bolin ? "Add data" : "Undate data"}
      </button>

      <br />

      <table border="1" width="100%">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Update</th>
            <th>Dalete</th>
          </tr>
          {array &&
            array.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>
                    <button onClick={() => updatedata(i)}>update</button>
                  </td>
                  <td>
                    <button onClick={() => deletedata(i)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
