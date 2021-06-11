import React, {useState} from "react";
import styles from "./TableData.module.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useDispatch} from "react-redux";
import {deleteData} from "../../redux/reducers/appReducer";
import NewDataForm from "../NewDataForm/NewDataForm";

const Cell = (props) => {
    const dispatch = useDispatch();
    const [editForm, setEditForm] = useState(false);

    let closeForm = () => {
        setEditForm(false);
    }

    let delData = (id) => {
        dispatch(deleteData(id));
    }

    return (
        <tr id={props.id}>
            <td>{props.index + 1}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.email}</td>
            <td>
                <div className={styles.btns}>
                    <Button variant="danger" onClick={() => {
                        delData(props.id)
                    }}>Delete</Button>
                    {" "}
                    <Button variant="warning" onClick={() => {
                        setEditForm(!editForm);
                    }}>Edit</Button>
                </div>
            </td>
            {editForm ? <NewDataForm name={props.name} age={props.age} email={props.email} editForm={closeForm} id={props.id}/> : null}
        </tr>
    )
}
const TAbleData = (props) => {

    let data = props.data;
    let getTable = data.map((item, index) => {
        let key = Object.keys(item)[1];
        let value = item[key];
        if (value.name || value.age || value.email) {
            return (
                <Cell id={item._id} index={index} name={value.name} age={value.age} email={value.email} key={item._id}/>
            )
        }
        return null;
    })
    return (
        <Container className="App">
            <Row>
                <Col>
                    <Table responsive hover variant="dark">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th style={{width: "150px"}}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getTable}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default TAbleData;