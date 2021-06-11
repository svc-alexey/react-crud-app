import * as axios from "axios";

const instance = axios.create(
    {
        baseURL: "http://178.128.196.163:3000/api/records",
    }
);

export const crudApi = {
    getData() {
        return instance.get().then(response => {
            return response.data
        });
    }
}

// axios.delete(`http://178.128.196.163:3000/api/records:${id}`)
//     .then(res => {
//         console.log(res);
//         console.log(res.data);
//     })