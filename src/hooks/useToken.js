import { useEffect, useState } from "react";

const useToken = (email) => {
  console.log("ami nai", email);
  const [token, setToken] = useState("");
  console.log("ami nai2", email[0]);
  useEffect(() => {
    if (email) {
      fetch(
        `https://server-site-gulamkibria775.vercel.app/jwt?email=${email[0]}&status=${email[1]}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
            console.log("toekn are successfull", data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
