import showAlert from "@/utils/alert";
import {verifyToken} from "@/utils/auth";
import Link from "next/link";
import {useEffect, useState} from "react";

const signUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
 

  const clickHandler = async () => {
    if (!userName) {
      showAlert("نام کاربری خود را وارد کنید", "red");
      return;
    } else if (!email) {
      showAlert("ایمیل خود را وارد کنید", "red");
      return;
    } else if (!phoneNumber) {
      showAlert("تلفن همراه خود را وارد کنید", "red");
      return;
    } else if (!password) {
      showAlert("پسورد خود را وارد کنید", "red");
    }
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({userName, email, phoneNumber, password}),
      headers: {"content-Type": "application/json"},
    });
    const data = await res.json();
    // console.log(data);

    showAlert("ثبت نام شما با موفقیت انجام شد", "green");
  };
  return (
    <div
      id="container-login"
      className="flex flex-col items-center bg-[#FBFBFB] my-10 w-[580px] m-auto p-5 rounded-md">
      <h2 className="text-3xl font-bold my-5">
        ثبت نام در <span className="text-colorPrimary">تاب سنتر</span>
      </h2>

      <div className="w-full m-auto ">
        <div className=" w-full m-auto p-2">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="نام کاربری"
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
            type="tel"
            placeholder="شماره تماس "
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        ثبت نام در سایت
      </button>

      <Link href="/auth/login">ورود به حساب کاربری</Link>
    </div>
  );
};

export default signUp;

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
