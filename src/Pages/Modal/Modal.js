import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

export default function Modal({singleitem}) {
  useTitle('modal')
    console.log("modal",singleitem)
    const { user } = useContext(AuthContext);
    console.log('user',user)
    const navigate = useNavigate();

    const handleservice = (event) => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const username=user?.displayName
        const useremail = user?.email || "unregistered";
        const category=singleitem.categore;
        const address = form.address.value;
        const sellername=singleitem.seller_name;
        const img=singleitem.img;
        const price=singleitem.price;
        const product_name=singleitem.product_name;
        const status=singleitem.status;
        
        const id=singleitem._id
    
        
    
        const order = {
        //   _id,
         id,
           phone,
           username,
          useremail ,
          category,
           address ,
           sellername,
           img,
           price,
           product_name,
      status
    
          
        };
    
        console.log("order", order);
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{
    
        // }
    
        fetch("http://localhost:5000/buyers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${localStorage.getItem('genius-token')}`
          },
          body: JSON.stringify(order),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data) {
              toast('your order successfull')
              form.reset();
              navigate('/')
              // window.location.reload(true);
            }
          })
          .catch((er) => console.error(er));
      };





    
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          {
            user && <div><p>Name:  { user.displayName}</p> <p> Email:  {user.email}</p></div>
            
          }
          <h3 className="text-lg font-bold">
          category: {singleitem.categore}
          </h3>
          <p className="py-4 font-bold">
           seller_name:{singleitem.seller_name}
          </p>
         
          <form  onSubmit={handleservice}>
          {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="input w-full max-w-xs" /> */}
          <input name="phone" type="text" placeholder="Phone number" className="input w-full  my-3" required />
          <br />
          <textarea name="address" className="textarea textarea-primary w-full  my-3" placeholder="Address" required></textarea>
          <br />
          <input className="btn btin-primary w-full " type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
