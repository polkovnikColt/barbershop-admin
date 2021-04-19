import {
    ADD_SIGN,
    LOAD_ALL_MASTERS,
    LOAD_ALL_PROCEDURES,
    LOAD_ALL_SIGN,
    LOGIN,
    REMOVE_MASTER, REMOVE_PROCEDURE, REMOVE_SIGN,
    UNLOG, UPDATE_PROCEDURE
} from "./userActions";

const initState = {
    userCredentials: null,
    allProcedures: [],
    allMasters: [],
    allSign: []
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case UNLOG:
            return {...state, userCredentials: action.payload};
        case LOGIN:
            return {...state, userCredentials: action.payload};
        case LOAD_ALL_MASTERS:
            return {...state, allMasters: action.payload};
        case LOAD_ALL_PROCEDURES:
            return {...state, allProcedures: action.payload};
        case LOAD_ALL_SIGN:
            return {...state, allSign: action.payload};
        case REMOVE_MASTER:
            return {
                ...state,
                allMasters: state.allMasters.filter(master => master.id !== action.payload)
            }
        case ADD_SIGN:
            return {
                ...state,
                allSign: state.allSign.concat(action.payload)
            }
        case REMOVE_PROCEDURE:
            return {
                ...state,
                allProcedures: state.allProcedures.filter(proc => proc.id !== action.payload)
            }
        case REMOVE_SIGN:
            return {
                ...state,
                allSign: state.allSign.filter(sign => sign.id !== action.payload)
            }
        case UPDATE_PROCEDURE:
            return {
                ...state,
                allProcedures: state.allProcedures.map( proc => {
                    if(proc.procedureId === action.payload.procedureId){
                        return action.payload;
                    }
                    return proc;
                })
            }
        default:
            return state;
    }
}