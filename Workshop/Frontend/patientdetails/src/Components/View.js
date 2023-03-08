import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './View.css';

export default function Table() {
    const [data, setData] = useState([]);

    async function init() {
        let res = await axios.get('http://localhost:8080/get');
        let dat = res.data;
        setData(dat);
        
    }

    const deleteData = (id) => {
        axios.delete(`http://localhost:8080/delete${id}`)
            .then((response) => {
                const newdata = data.filter((item) => item.id !== id);
                setData(newdata);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateData = (id, newData) => {
        axios.put(`http://localhost:8080/update/${id}`, newData)
          .then((response) => {
            const newdata = data.map((item) => {
              if (item.id === id) {
                return { ...item, ...newData };
              }
              return item;
            });
            setData(newdata);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    useEffect(() => { init() }, [])
    return (
        <div className="body1">
        <table border={1}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    <th>Mobile_no</th>
                    <th>Weight</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.address}</td>
                        <td>{user.mobile}</td>
                        <td>{user.weight}</td>
                        
                        <td>
                            <button
                                className="btn btn-primary"
                                onClick={() => deleteData(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
  <button
    className="btn btn-secondary"
    onClick={() => {
      
    
      
      const newData3= prompt("Enter age");
      if(newData3){
        updateData(user.id,{age:newData3});
      }

      
      
      

     
      
      
    }}>
    Update
  </button>
</td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
    );
}
