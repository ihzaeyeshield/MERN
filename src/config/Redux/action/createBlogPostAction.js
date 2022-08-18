import axios from "axios"

export const setForm = (formType, formValue)=>{
    return{type: 'SET_FORM_DATA',formType, formValue}
}

export const setImagePreview = (payload)=>{
    return {type: 'SET_IMG_PREVIEW', payload}
}

export const createBlogPostAction = (form) => {

    const data = new FormData()
    data.append('tittle',form.tittle)
    data.append('body',form.body)
    data.append('image',form.image)
    //pembuatan form untuk dikirim, lebih mudah kan

    axios.post('http://localhost:4000/v1/blog/createblog',data,{
        headers : {
          'content-type':'multipart/form-data'
        }
      })
      .then(res=>{
        console.log('post sukses: ',res)
      })
      .catch(err=>{
        console.log('err : ', err )
      })
}
