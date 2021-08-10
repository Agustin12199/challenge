const RESPONSE_DATA = "RESPONSE_DATA"
const ERROR_DATA = "ERROR_DATA"
const FINALLY = "FINALLY"
const RESPONSE_DATA_PRODUCT = 'RESPONSE_DATA_PRODUCT'
const REPONSE_DATA_QUESTIONS = 'RESPONSE_DATA_QUESTIONS'

const initialState = {
    response: [],
    err: null,
    loading: true,
    responseProduct: [],
    dataQuestions: []
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
        case REPONSE_DATA_QUESTIONS:
            return {
                ...state,
                dataQuestions: action.payload
            }
        default :
            return state
    }
}

export default data