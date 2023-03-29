import React from 'react'


const ProductCart = () => {
    const dizi = ["ahmet","mehmet","zeki"]
  return (
    <div>
       <h1>diziyi yaz</h1>
        {dizi.map((names,index) => {
            <li key={index}>{names}</li>
        })}
        
    </div>
  )
}

export default ProductCart