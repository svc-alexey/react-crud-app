import './App.css';
import React, {useEffect, useState} from "react";
import axios from 'axios';


const ParseName = (props) => {
    return (
        <div>
            {props.name}
        </div>
    )
}

const App = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://178.128.196.163:3000/api/records',
            );
            setData(result.data);
        };
        fetchData();
    }, []);


    let parseArr = data.map(item => {
        let key = Object.keys(item)[1];
        let value = item[key];
        console.log(value.name);
        return (
            <ParseName name={value.name}/>
        )
    })

    // let items = data.map(item => {
    //     return (
    //         <tr key={item.id}>
    //             <th scope="row">{item.data.id}</th>
    //             <td>{item.data.id}</td>
    //             <td>{item.data.name}</td>
    //             <td>{item.data.age}</td>
    //             <td>{item.data.email}</td>
    //             <td>
    //             </td>
    //         </tr>
    //     )
    // })

    return (
        <div>
            <h1>CRUD App</h1>
            {parseArr}
        </div>
    );
}

export default App;
