const responseAction = (data) =>{
    return{
        type: "RESPONSE_DATA",
        payload: data
    }
}

const errAction = (error) => {
    return{
        type: "ERROR_DATA",
        payload: error
    }
}

const loadingAction = () => {
    return{
        type: "FINALLY",
        payload: false
    }
}
const responseProductAction = (data) => {
    return{
        type: "RESPONSE_DATA_PRODUCT",
        payload: data
    }
}
const responseQuestionsAction = (data) => {
    return{
        type: "RESPONSE_DATA_QUESTIONS",
        payload: data
    }
}

export {responseAction, errAction, loadingAction, responseProductAction, responseQuestionsAction}