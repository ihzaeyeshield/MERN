import React from 'react'

const UploadImage = ({image,...rest}) => {
  return (
    <div className="uploadimage">
        {image && <img src={image} alt="" className="preview" />}
        //image && adalah untuk jika tidak ada foto maka tidak gambar foto robek
      <input type="file" name="" id="" {...rest} />
    </div>
  )
}

export default UploadImage