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
    },
    postNewData(data) {
        return axios.put("http://178.128.196.163:3000/api/records", {data}).then(response => {
            return response.data
        })
    },
    deleteData(id) {
        return axios.delete(`http://178.128.196.163:3000/api/records/${id}`)
            .then(response => {
                return response.data
            })
    },
    updateData(data, id) {
        debugger;
        return axios.post(`http://178.128.196.163:3000/api/records/${id}`, {data}).then(response => {
            return response.data
        })
    },

}
