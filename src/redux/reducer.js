const defaultState = {
     cheeses: []
}

function reducer(prevState = defaultState, action) {
    switch (action.type) {
        //this is TBD
        case "ADD_LIKE":
            return { ...prevState, likes: prevState.likes + 1 }

        default:
            return prevState
    }

}

export default reducer