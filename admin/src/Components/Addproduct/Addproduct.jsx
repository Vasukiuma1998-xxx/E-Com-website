import React from "react";
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg';
import { useState } from "react";

const Addproduct = () => {
    const [image, setImage]=useState(false);
    const [productDetails, setProductfDetails]= useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    const imageHandler=(e)=>{
        setImage(e.target.files[0]);

    }
    const changeHandler =(e) =>{
        setProductfDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_product=async()=>{
        console.log(productDetails);
        let responseData;
        let product=productDetails;
        let formData=new FormData();
        formData.append('product',image);

        await fetch('https://e-com-website-backend.onrender.com/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})

        if(responseData.success)
        {
            product.image=responseData.image_url;
            console.log(product);
            await fetch('https://e-com-website-backend.onrender.com/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }

    }
    return (
        <div className="add-product">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler}type="text" name='name' placeholder="Type here"></input>

            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Type here' />
                </div>

            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler}name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>

                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt=""/>
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
            </div>
            <button onClick={()=>{Add_product()}}className="addproduct-btn">ADD</button>

        </div>
    )
}

export default Addproduct