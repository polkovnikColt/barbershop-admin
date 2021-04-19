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

export const unlog = () => {
    localStorage.removeItem("token");
    return {type: UNLOG, payload: null};
}

export const login = (user) => {

    return async dispatch => {
        try {
            const res = await axios.post('/auth', user);
            const data = await res.data;
            localStorage.setItem("token",data.token);
            dispatch({
                type: LOGIN,
                payload: user
            });
        } catch (e){
            alert("User not found");
        }
    }
}

export const loadAllProcedures = () => {
    return async dispatch => {
        const res = await axios.get('/procedures');
        const data = await res.data;
        dispatch({
            type: LOAD_ALL_PROCEDURES,
            payload: data
        })
    }
}

export const loadAllMasters = () => {
    return async dispatch => {
        const res = await axios.get('/masters/all');
        const data = await res.data;
        dispatch({
            type: LOAD_ALL_MASTERS,
            payload: data
        })
    }
}

export const loadAllSign = () => {
    return async dispatch => {
        const res = await axios.get('/records');
        const data = await res.data;
        dispatch({
            type: LOAD_ALL_SIGN,
            payload: data
        })
    }
}

export const updateProcedure = (procedure) => {
    return async dispatch => {
        dispatch({
            type: UPDATE_PROCEDURE,
            payload: procedure
        })
    }
}

export const deleteProcedure = procedureId => {
    return async dispatch => {
        // const res = await axios.delete(`/procedure/delete/${procedureId}`);
        dispatch({
            type:REMOVE_PROCEDURE,
            payload: procedureId
        })
    }
}

export const deleteSign = signId => {
    return async dispatch => {
        // const res = await axios.delete(`/procedure/delete/${procedureId}`);
        dispatch({
            type:REMOVE_SIGN,
            payload: signId
        })
    }
}