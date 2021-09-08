// reducers
const initialState = {
    product: "hey"
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action 
    switch (type){
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                title: payload
            }
            return{
                ...state,
                todos: [...state.todos, newItem]
            }
        case "DEL":
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== payload)
            }
        default:
            return state 
    }
}

export default productReducer