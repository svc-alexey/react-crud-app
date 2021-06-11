import React, {useState} from 'react';
import styles from './NewDataForm.module.css';
import {useForm} from "react-hook-form";
import {chagneData, newPost} from "../../redux/reducers/appReducer";
import {useDispatch} from "react-redux";

const NewDataForm = (props) => {
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        setData(data);
        if (props.id) {
            dispatch(chagneData(data, props.id));
        } else dispatch(newPost(data));
        props.editForm(false);
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p>Hello, please add new info</p>
                <label>Your Name:</label>
                <input {...register("name")} defaultValue={props.name} placeholder={"Name"}/>
                <label>Your Age:</label>
                <input {...register("age")} defaultValue={props.age} placeholder={"Age"}/>
                <label>Your Email:</label>
                <input {...register("email")} defaultValue={props.email} placeholder={"Email"}/>
                <button>Button</button>
            </form>
        </div>
    );
}

export default NewDataForm;
