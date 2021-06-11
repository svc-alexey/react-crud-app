import React from "react";
import styles from "./TableData.module.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TAbleData = (props) => {
    console.log(props.data);
    let data = props.data;
    let getTable = data.map((item, index) => {
        let key = Object.keys(item)[1];
        let value = item[key];
        if (value.name || value.age || value.email ) {
            return (
                <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.email}</td>
                    <td>
                        <div className={styles.btns}>
                            <Button variant="danger">Delete</Button>
                            {" "}
                            <Button variant="warning">Edit</Button>
                        </div>
                    </td>
                </tr>)
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