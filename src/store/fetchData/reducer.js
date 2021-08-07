const RESPONSE_DATA = "RESPONSE_DATA"
const ERROR_DATA = "ERROR_DATA"
const FINALLY = "FINALLY"

const initialState = {
    response: [],
    err: null,
    loading: true
}

const data = (state = initialState, action) =>{
    switch(action.type){
        case RESPONSE_DATA:
            return {
                ...state,
                response: action.payload
            }
        case ERROR_DATA:
            return {
                ...state,
                err: action.payload
            }
        case FINALLY:
            return {
                ...state,
                loading: action.payload
            }
        default :
            return state
    }
}

export default data