import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

export default function Admin() {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log("dashbor user", user?.photoURL);
  console.log("dashbor adminnnnn", user);
  return (
    <div>
    

          <div>
            
              <div>
                <ul className="border m-5">
                  <h1 className="text-3xl m-1">Admin section</h1>
                  <li>
                    <Link to="/dashboard/user">
                      <button className="btn btn-primary mb-2">
                        All Users
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/buyer">
                      <button className="btn btn-danger">All Buyers</button>
                    </Link>
                  </li>
                </ul>
                <div>
                  <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content border">
                      <li>
                        <h1 className="text-3xl m-1 ">Buyer Section </h1>
                        <Link to="/dashboard/myorder">My Order</Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content border">
                      <h1 className="text-3xl m-1 ">Seller Section</h1>
                      <li>
                        <Link to="/dashboard/addproduct">Add Product</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/myproduct">My Product</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/mybuyer">My Buyers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
           
              {/* <div>
               
                  <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                      <li>
                        <Link to="/dashboard/myorder">My Order</Link>
                      </li>
                    </ul>
                  </div>
               
                  <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                      <li>
                        <Link to="/dashboard/addproduct">Add Product</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/myproduct">My Product</Link>
                      </li>
                      <li>
                        <Link to="/dashboard/mybuyer">My Buyers</Link>
                      </li>
                    </ul>
                  </div>
               
              </div> */}
           
          </div>
        </div>
  
   
  );
}
