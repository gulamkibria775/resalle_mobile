import { useEffect, useState } from "react";

const useAdmin = (email, status) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  console.log("imortan", email, status);
  useEffect(() => {
    if (email && status === "seller") {
      fetch(
        `https://server-site-gulamkibria775.vercel.app/users/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    } else {
      fetch(
        `https://server-site-gulamkibria775.vercel.app/newbuyer/admin/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("important2", data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  // return [isAdmin, isAdminLoading]
  return [isAdmin, status];
};

export default useAdmin;
