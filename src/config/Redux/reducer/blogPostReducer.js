
const initialStateBlog={
    dataBlogGlobal:[],
}
//array untuk menampung payload

const blogPostReducer = (state = initialStateBlog,action) => {
    if(action.type === 'UPDATE_DATA_BLOG'){
        return{
            ...state,
            dataBlogGlobal: action.payload
            //payload=muatan

        }
    }
    return state
}

export default blogPostReducer