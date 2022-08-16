import axios from "axios";

export const setDataBlog =()=>{
    return(dispatch)=>{
        
        axios.get('http://localhost:4000/v1/blog/post')
        .then(resulta=>{
        //resulta bukan fungsi, tapi parameter saja, setelah get dari API
        console.log('data API : ',resulta.data);
        const responseAPI = resulta.data;

        // setDataBlog(responseAPI.data);
        dispatch({type:'UPDATE_DATA_BLOG',payload: responseAPI.data})
        //dispatch=menugaskan sepeti menge get dari stateGlobal
        })
        .catch(err=>{
        console.log('error : ',err)
        })
    }
}