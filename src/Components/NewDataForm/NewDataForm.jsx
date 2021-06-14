import React from 'react';
import styles from './NewDataForm.module.css';
import {useForm} from "react-hook-form";
import {chagneData, newPost} from "../../redux/reducers/appReducer";
import {useDispatch} from "react-redux";

const NewDataForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (props.id) {
            dispatch(chagneData(data, props.id));
        } else dispatch(newPost(data));
        props.editForm(false);
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p>Hello, please add new info</p>
                <label>Name:</label>
                <input {...register("name", {required: true, maxLength: 20})} defaultValue={props.name}
                       placeholder={"Name"}/>
                {errors.name && <span>This field is required</span>}
                <label>Age:</label>
                <input {...register("age", {required: true, min: 18, max: 99})} defaultValue={props.age}
                       placeholder={"Age"}/>
                {errors.age && <span>This field is required</span>}
                <label>Email:</label>
                <input {...register("email", {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                       defaultValue={props.email} placeholder={"Email"}/>
                {errors.email && <span>This field is required</span>}
                <button>Send</button>
            </form>
        </div>
    );
}

export default NewDataForm;
