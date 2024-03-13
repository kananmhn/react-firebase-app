import React, { useEffect, useState } from "react";
import "./App.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { name, age: parseInt(age) };
    await addDoc(collection(db, "students"), student);
    setName("");
    setAge("");
    getStudents();
  };

  const getStudents = async () => {
    const q = query(collection(db, "students"));
    const querySnapshot = await getDocs(q);
    let students = [];
    querySnapshot.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id });
    });
    setStudents(students);
  };

  const editStudent = async (id, name, age) => {
    await updateDoc(doc(db, "students", id), {
      name,
      age: parseInt(age),
    });
    getStudents();
  };

  const deleteStudent = async (id) => {
    await deleteDoc(doc(db, "students", id));
    getStudents();
  };

  useEffect(() => {
    getStudents();
  }, []);


  const [tempColor, setTempColor] = useState("#ffffff"); // Temporary color for color picker
  const [tableColor, setTableColor] = useState("#ccc"); // Initial color for table and button

  const [fonttempColor, setfonttempColor] = useState("#ccc"); // Temporary color for font color picker

  const [fonttempBGColor, setBGtempColor] = useState("#ccc"); // Temporary color for font color picker



  const handleOkClick = async () => {
    setTableColor(tableColor); // Set color when OK button is clicked0
    // Save color to Firebase
    try {
      await setDoc(doc(db, "colorpicker", "currentColor"), {
        color: tempColor,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const colorDoc = doc(db, "colorpicker", "currentColor");
    const unsubscribe = onSnapshot(colorDoc, (doc) => {
      if (doc.exists()) {
        setTableColor(doc.data().color);
      } else {
        console.log("No such document!");
      }
    });

    // Clean up on unmount
    return () => unsubscribe();
  }, []);



  
  const handlefontOkClick = async () => {
    setfonttempColor(fonttempColor); // Set color when OK button is clicked0
    // Save color to Firebase
    try {
      await setDoc(doc(db, "colorpickerforfont", "currentColor"), {
        color: fonttempColor,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };


  useEffect(() => {
    const colorDoc1 = doc(db, "colorpickerforfont", "currentColor");

    const unsubscribe1 = onSnapshot(colorDoc1, (doc) => {
      if (doc.exists()) {
        setfonttempColor(doc.data().color);
      } else {
        console.log("No such document!");
      }
    });

    // Clean up on unmount
    return () => unsubscribe1();
  }, []);



  const handleBGOkClick = async () => {
    setBGtempColor(fonttempBGColor); // Set color when OK button is clicked0
    // Save color to Firebase
    try {
      await setDoc(doc(db, "colorpickerforBG", "currentColor"), {
        color: fonttempBGColor,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    const colorDoc3 = doc(db, "colorpickerforBG", "currentColor");

    const unsubscribe3 = onSnapshot(colorDoc3, (doc) => {
      if (doc.exists()) {
        setBGtempColor(doc.data().color);
      } else {
        console.log("No such document!");
      }
    });

    // Clean up on unmount
    return () => unsubscribe3();
  }, []);


  return (
    <div className="App">
      <div className="container flex">
        <div className="sideBar">
          <div className="sideBar1">
            <label htmlFor="color"> Set Button color:</label>

            <input
              type="color"
              value={tableColor}
              onChange={(e) => setTempColor(e.target.value)}
            />

            <button onClick={handleOkClick}>Set Button color</button>
          </div>

          <div className="sideBar2">
            <label htmlFor="fontcolor"> Set Font color:</label>

            <input
              type="color"
              value={fonttempColor}
              onChange={(e) => setfonttempColor(e.target.value)}
            />

            <button onClick={handlefontOkClick}>Set Font color</button>
          </div>

          <div className="sideBar2">
            <label htmlFor="fontcolor"> Set Background color:</label>

            <input
              type="color"
              value={fonttempBGColor}
              onChange={(e) => setBGtempColor(e.target.value)}
            />

            <button onClick={handleBGOkClick}>Set Background color</button>
          </div>
        </div>
        <div className="main" style={{ color: fonttempColor, backgroundColor: fonttempBGColor }}>
          <h1 className="heading"> Firebase React App </h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name"> Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age"> Age:</label>
              <input
                type="text"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn">
              Submit
            </button>
          </form>

          <div className="students">
            <table style={{}}>
              <thead
                style={{ color: fonttempColor }}
              >
                <tr>
                  <th > ID </th>
                  <th> Name </th>
                  <th> Age </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index.id} style={{ color: fonttempColor }}>
                    <td> {index + 1} </td>
                    <td> {student.name} </td>
                    <td> {student.age} </td>
                    <td>
                      <button
                        style={{ backgroundColor: tableColor }}
                        className="btn edit"
                        onClick={() =>
                          editStudent(
                            student.id,
                            prompt("Enter new name", student.name),
                            prompt("Enter new age", student.age)
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        style={{ backgroundColor: tableColor }}
                        className="btn delete"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
