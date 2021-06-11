import React, {useEffect, useState} from 'react';
import styles from './NewDataForm.module.css';
import axios from "axios";
import {useForm} from "react-hook-form";

const NewDataForm = (props) => {

    const {register, handleSubmit} = useForm();
    const [data,setData] = useState({});

    const onSubmit = (data) => {
        setData(data);
        axios.put(`http://178.128.196.163:3000/api/records`, {data})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

return (
    <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <p>Hello, please add new info</p>
            <label>Your Name:</label>
            <input {...register("name")} />
            <label>Your Age:</label>
            <input {...register("age")} />
            <label>Your Email:</label>
            <input {...register("email")} />
            <button>Button</button>
        </form>
    </div>
);
}

export default NewDataForm;
