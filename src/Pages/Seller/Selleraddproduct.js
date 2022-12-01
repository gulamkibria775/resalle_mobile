import React, { useContext, useState } from "react";
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { AuthContext } from "../../contexts/AuthProvider";
// import useTitle from "../../../../hook/useTitle";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

export default function Selleraddproduct() {
useTitle("Seller_page")
  const location = useLocation();
  const navigate = useNavigate();
  // useTitle('Addservice')
  const { user } = useContext(AuthContext);
  const [slected,setselected]=useState();
  const from = location.state?.from?.pathname || '/';
  const handleservice = (event) => {
    event.preventDefault();
    const form = event.target;
    const seller_name = user?.displayName;
    const email = user?.email || "unregistered";
    const product_name = form.product_name.value;
    const price = form.price.value;
    const condition_type = form.condition_type.value;
    const mobile_number = form.mobile_number.value;
    const year_pursage = form.year_pursage.value;
    const categore= slected;
    const address = form.address.value;
    const img = form.img.value;
    const description = form.description.value;

    // const description = form.description.value;
    // console.log('option',slected)

    const seller_information = {
      //  "id": _id,
    
     seller_name ,
     email ,
     product_name ,
     price,
     condition_type ,
     mobile_number ,
     year_pursage,
     categore,
     address ,
     description ,
     img,
     upload_date:new Date(),
     status:"",
     advertige:""
    };

    // console.log("seller_information",seller_information);
    // if(phone.length > 10){
    //     alert('Phone number should be 10 characters or longer')
    // }
    // else{

    // }

    fetch("http://localhost:5000/addproductbyseller", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify(seller_information),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
           toast("comment successfully");
          form.reset();
          navigate(from, { replace: true });
          // window.location.reload(true);
        }
      })
      .catch((er) => console.error(er));
 };

  return (
    <div>
      <form onSubmit={handleservice}>
        <h2 className="text-4xl my-5 text-center">Add Product</h2>
        <div className="form-control">
          <div className="text-center">
          <input name="product_name" type="text" placeholder="product-name" className="input input-bordered w-full max-w-xs mb-1" required />
          <br />
          <input name="price" type="text" placeholder="price" className="input input-bordered w-full max-w-xs mb-1" required  />
          <br />
          <input name="condition_type" type="text" placeholder="condition-type" className="input input-bordered w-full max-w-xs mb-1"  required />
          <br />
          <input name="mobile_number" type="text" placeholder="mobile-number" className="input input-bordered w-full max-w-xs mb-1" required  />
          <br />
          <input name="year_pursage" type="text" placeholder="year-pursage" className="input input-bordered w-full max-w-xs mb-1" required  />
          <br />
          <input name="img" type="text" placeholder="phone-img" className="input input-bordered w-full max-w-xs mb-1" required  />
          
    
          <br />
            <select value={slected} className="select select-bordered w-full max-w-xs mb-1" onChange={(e)=>setselected(e.target.value)} >
              <option disabled selected>
                
                
                Select a item
              </option>
              <option value="samsung">Samsung</option>
              <option value="oneplus">One Plus</option>
              <option value="walton">walton</option>
            </select>
            <br />
            <textarea name="address" className="textarea textarea-primary w-full max-w-xs mb-1" placeholder="address" required></textarea>
            <br />
            <textarea name="description" className="textarea textarea-primary w-full max-w-xs mb-1" placeholder="drecription" required></textarea>
            
            
          </div>
        </div>

        <div className="text-center">
          <input
            className="btn bg-danger my-5 text-center"
            type="submit"
            value="Add-service"
          />
        </div>
      </form>
    </div>
  );
}


