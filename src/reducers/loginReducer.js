const initialState = {
    isLoggedIn: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {...state, isLoggedIn: true}
        }
        default: return state
    }
}