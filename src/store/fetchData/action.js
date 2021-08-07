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

export {responseAction, errAction, loadingAction}