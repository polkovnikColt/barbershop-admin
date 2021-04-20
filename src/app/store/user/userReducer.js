import {
    ADD_MASTER,
    ADD_PROCEDURE,
    ADD_SIGN,
    LOAD_ALL_MASTERS,
    LOAD_ALL_PROCEDURES,
    LOAD_ALL_SIGN,
    LOGIN,
    REMOVE_MASTER, REMOVE_PROCEDURE, REMOVE_SIGN,
    UNLOG, UPDATE_MASTER, UPDATE_PROCEDURE, UPDATE_SIGN
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
                allMasters: state.allMasters.filter(master => master.accountId !== action.payload)
            }
        case ADD_SIGN:
            return {
                ...state,
                allSign: [...state.allSign,action.payload]
            }
        case ADD_PROCEDURE:
            return {
                ...state,
                allProcedures: [...state.allProcedures, action.payload]
            }
        case ADD_MASTER:
            return {
                ...state,
                allMasters: [...state.allMasters,action.payload]
            }
        case REMOVE_PROCEDURE:
            return {
                ...state,
                allProcedures: state.allProcedures.filter(proc => proc.procedureId !== action.payload)
            }
        case REMOVE_SIGN:
            return {
                ...state,
                allSign: state.allSign.filter(sign => sign.recordId !== action.payload)
            }
        case UPDATE_PROCEDURE:
            return {
                ...state,
                allProcedures: state.allProcedures.map( proc => {
                    if(proc.procedureId === action.payload.procedureId){
                        return {...proc,...action.payload};
                    }
                    return proc;
                })
            }
        case UPDATE_SIGN:
            return {
                ...state,
                allSign: state.allSign.map( sign => {
                    if(sign.recordId === action.payload.recordId){
                        return {...sign, ...action.payload}
                    }
                    return sign;
                })
            }
        case UPDATE_MASTER:
            return {
                ...state,
                allMasters: state.allMasters.map( master => {
                    if(master.accountId === action.payload.accountId){
                        return {...master, ...action.payload}
                    }
                    return master;
                })
            }
        default:
            return state;
    }
}