import showAlert from "@/utils/alert";
import Link from "next/link";
import {verifyToken} from "@/utils/auth";

import {useEffect, useState} from "react";
import { useRouter } from "next/router";


const  Login =  () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const clickHandler = async () => {
  
     if (!email) {
      showAlert("ایمیل خود را وارد کنید","red")
      return;
    } else if (!password) {
     showAlert("پسورد خود را وارد کنید","red")
    }
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password}),
      headers: {"content-Type": "application/json"},
    });
    const data = await res.json();
    console.log(data);
if (data) {
  showAlert("با موفقیت وارد شدید","green");
  router.push("/");
}
    
    
  };
  return (
    <div
      id="container-login"
      className="flex flex-col items-center bg-[#FBFBFB] my-10 w-[580px] m-auto p-5 rounded-md">
      <h2 className="text-3xl font-bold my-5">
        ورود در <span className="text-colorPrimary">تاب سنتر</span>
      </h2>

      <div className="w-full m-auto ">

        <div className=" w-full m-auto p-2">
          <label htmlFor=""></label>
          <input
            type="email"
            placeholder="ایمیل"
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" w-full m-auto p-2">
          <label htmlFor=""></label>
          <input
            type="password"
            placeholder="رمز عبور  "
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className="btn-primary rounded-lg py-3 my-4 inline-block px-6 w-fit  m-auto text-sm"
        onClick={clickHandler}>
        ورود در سایت
      </button>

      <Link className="my-4" href="/auth/signup">اگر حساب کاربری ندارید کلیک کیند</Link>
    </div>
  );
};

export default Login;





export async function getServerSideProps(context) {
  const {token} = context.req.cookies;
  const secretKey = process.env.SECRET_KEY;
  const result = await verifyToken(token,secretKey);
  if (result) 
  return {
    redirect: {destination: '/',permanent:false}
  }

  return {
    props: {result},
  };
}





