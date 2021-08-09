const RESPONSE_DATA = "RESPONSE_DATA"
const ERROR_DATA = "ERROR_DATA"
const FINALLY = "FINALLY"
const RESPONSE_DATA_PRODUCT = 'RESPONSE_DATA_PRODUCT'

const initialState = {
    response: [],
    err: null,
    loading: true,
    responseProduct: [],
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
        case RESPONSE_DATA_PRODUCT:
            return {
                ...state,
                responseProduct: action.payload
            }
        default :
            return state
    }
}

export default data