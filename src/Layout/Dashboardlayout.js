import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Shared/Navbar/Navbar";

export default function Dashboardlayout() {
  
  const { user } = useContext(AuthContext);
 
    const [isAdmin,status]=useAdmin(user?.email,user?.photoURL) 

  
  console.log("dashbor user",user?.photoURL)
  // console.log("dashbor admin",user)
  console.log("dashbor admin",isAdmin,status)
  return (
    <div>
      <Navbar></Navbar>

      <Link to="/dashboard/admin2"><div className="btn btn-primary mt-7 lg:hidden">Go to admin section</div></Link>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {/* buyer */}

          <div>
           
           {

            isAdmin ?

       
        <Link to="/dashboard/admin"><div className="btn btn-primary mt-7">Go to admin section
        
        
    
        
        
        
        
        
        
        </div></Link>
              
              :
        



         <div>
         {user?.photoURL==='buyer' ? (
            <div>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <li>
                  <Link to="/dashboard/myorder">Click and see My Order</Link>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                <li>
                  <Link to='/dashboard/addproduct'>Add Product</Link>
                </li>
                <li>
                  <Link to='/dashboard/myproduct'>My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyer">My Buyers</Link>
                </li>
              </ul>
            </div>
          )}

         </div>

}
            
</div>
          



        </div>
      </div>
    </div>
  );
}
