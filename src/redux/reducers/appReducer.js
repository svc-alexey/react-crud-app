import {crudApi} from "../../api/api";

const SET_DATA = "SET_DATA";

let initialState = {
    appData: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            let data = action.data;
            let result = data.filter(items => items.data !== undefined && !items.data.data && items.data.name !== "");
            console.log(result);
            return {
                ...state,
                appData: [...result]
            }
        default:
            return state;
    }
}

const setData = (data) => ({
    type: SET_DATA,
    data
});

export const newPost = (data) => async (dispatch) => {
    let response = await crudApi.postNewData(data);
    if (response !== null) {
        dispatch(fetchData());
    }
}

export const fetchData = () => async (dispatch) => {
    let data = await crudApi.getData();
    dispatch(setData(data));
}

export const deleteData = (id) => async (dispatch) => {
    let response = await crudApi.deleteData(id);
    if (response !== null) {
        dispatch(fetchData());
    }
}
export const chagneData = (data, id) => async (dispatch) => {
    debugger;
    let response = await crudApi.updateData(data, id);
    if (response !== null) {
        dispatch(fetchData());
    }
}

export default appReducer;

