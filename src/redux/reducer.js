const defaultState = {
     cheeses: []
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        //this is TBD
        case "GET_CHEESES":
            console.log(action.payload)
            return { ...prevState, cheeses: [...action.payload] }

        default:
            return prevState
    }

}

export default reducer