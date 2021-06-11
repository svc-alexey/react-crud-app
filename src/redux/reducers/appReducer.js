import {crudApi} from "../../api/api";

const SET_DATA = "SET_DATA";

let initialState = {
    appData: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            let data = action.data;
            let result = data.filter(items => {
                for (let name in items.data) {
                    if (items.data.hasOwnProperty(name)){
                        return items;
                    }
                }
            });
            return {...state,
                appData: [...result]}
        default: return state;
    }
}

const setData = (data) => ({
    type: SET_DATA,
    data
});

export const fetchData = () => async (dispatch) => {
    let data = await crudApi.getData();
    dispatch(setData(data));
}

export default appReducer;

