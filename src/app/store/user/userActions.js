import axios from "../../axios/axios";

export const LOGIN = "LOGIN";
export const UNLOG = "UNLOG";
export const LOAD_ALL_MASTERS = "LOAD_ALL_MASTERS";
export const LOAD_ALL_PROCEDURES = "LOAD_ALL_PROCEDURES";
export const LOAD_ALL_SIGN = "LOAD_ALL_SIGN";
export const REMOVE_MASTER = "REMOVE_MASTER";
export const REMOVE_PROCEDURE = "REMOVE_PROCEDURE";
export const UPDATE_PROCEDURE = "UPDATE_PROCEDURE";
export const ADD_PROCEDURE = "ADD_PROCEDURE";
export const REMOVE_SIGN = "REMOVE_SIGN";
export const ADD_SIGN = "ADD_SIGN";
export const UPDATE_SIGN = "UPDATE_SIGN";
export const UPDATE_MASTER = "UPDATE_MASTER";
export const ADD_MASTER = "ADD_MASTER";

export const unlog = () => {
    localStorage.removeItem("token");
    return {type: UNLOG, payload: null};
}

export const login = (user) => {

    return async dispatch => {
        try {
            const res = await axios.post('/auth', user);
            const data = await res.data;
            localStorage.setItem("token", data.token);
            dispatch({
                type: LOGIN,
                payload: user
            });
        } catch (e) {
            alert("User not found");
        }
    }
}

export const registration = admin => {
    return async dispatch => {
        try {
            const res = await axios.post('/administrator/registration', admin);
            const data = await res.data.token;
            localStorage.setItem("token", data);
            dispatch({
                type: LOGIN,
                payload: {email: admin.email, password: admin.password}
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const loadAllProcedures = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/procedures');
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_PROCEDURES,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const loadAllMasters = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/admin/masters/all');
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_MASTERS,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const loadAllSign = () => {
    return async dispatch => {
        try {
            const res = await axios.get('/records');
            const data = await res.data;
            dispatch({
                type: LOAD_ALL_SIGN,
                payload: data
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const updateProcedure = (procedure) => {
    return async dispatch => {
        try {
            const res = await axios.put("/admin/procedure/update", procedure);
            dispatch({
                type: UPDATE_PROCEDURE,
                payload: procedure
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const deleteProcedure = procedureId => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/admin/procedure/delete/${procedureId}`);
            dispatch({
                type: REMOVE_PROCEDURE,
                payload: procedureId
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const deleteSign = signId => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/admin/record/delete/${signId}`);
            dispatch({
                type: REMOVE_SIGN,
                payload: signId
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const deleteMaster = masterId => {
    return async dispatch => {
        try {
            const res = await axios.delete(`/admin/master/delete/${masterId}`);
            dispatch({
                type: REMOVE_MASTER,
                payload: masterId
            })
        } catch (e) {
            alert("Something went wrong")
        }

    }
}

export const addProcedure = procedure => {
    return async dispatch => {
        try {
            const res = await axios.post('/admin/procedure/add', procedure);
            dispatch({
                type: ADD_PROCEDURE,
                payload: procedure
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const addMaster = master => {
    return async dispatch => {
        try {
            const res = await axios.post("/admin/master/add",master);
            dispatch({
                type: ADD_MASTER,
                payload: master
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const addSign = sign => {
    const record = {
        recordTime: sign.day + "T" + sign.time + "Z",
        procedureStart: sign.day + "T" + sign.time + "Z",
        procedureFinish: sign.day + "T" + sign.time + "Z"
    }

    return async dispatch => {
        try {
            const res = await axios.post('/record/add', sign)
            dispatch({
                type: ADD_SIGN,
                payload: record
            })
        } catch (e) {
            alert("Something went wrong")
        }

    }
}

export const updateSign = sign => {
    sign.recordTime = sign.day + "T" + sign.time + "Z";
    sign.procedureStart = sign.day + "T" + sign.time + "Z";
    sign.procedureFinish = sign.day + "T" + sign.time + "Z";
    return async dispatch => {
        try {
            const res = await axios.put('/admin/record/update', sign)
            dispatch({
                type: UPDATE_SIGN,
                payload: sign
            })
        } catch (e) {
            alert("Something went wrong")
        }

    }
}

export const updateMaster = master => {
    return async dispatch => {
        try {
            const res = await axios.put("/admin/master/update",master);
            dispatch({
                type: UPDATE_MASTER,
                payload: master
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}