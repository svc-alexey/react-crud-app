import React from "react";
import styles from './App.module.css';
import TAbleData from "./Components/TableData/TableData";
import Button from 'react-bootstrap/Button'
import NewDataForm from "./Components/NewDataForm/NewDataForm";
import {Container} from "react-bootstrap";
import {connect, Provider} from "react-redux";
import {fetchData} from "./redux/reducers/appReducer";
import store from "./redux/configureStore";

class App extends React.Component {
    state = {
        isEdit: false,
    }

    componentDidMount() {
        this.props.fetchData();
    }

    isEditForm = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    render() {
        if (!this.props.data) return <div>Preloader</div>
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Container>
                        <h1 className={styles.header}>CRUD App</h1>
                    </Container>
                </div>
                <Container>
                    <TAbleData data={this.props.data}/>
                    <Button variant="primary" onClick={() => {
                        this.isEditForm()
                    }}>Add new Info</Button>
                    {this.state.isEdit ? <NewDataForm editForm={this.isEditForm}/> : null}
                </Container>
                <div className={styles.footer}>
                    <Container>
                        <div className={styles.header}>Alexey Shvecov</div>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.app.appData
});

const AppContainer = connect(mapStateToProps, {fetchData})(App);

const CRUDApp = (props) => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    )
}


export default CRUDApp;
