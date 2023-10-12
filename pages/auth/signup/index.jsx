import {redirect} from "next/dist/server/api-utils";
import {useState} from "react";
function signUp() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const clickHandler = async () => {
    if (!userName) {
      alert("Please enter yor username");
      return;
    } else if (!email) {
      alert("Please enter yor email");
      return;
    } else if (!phoneNumber) {
      alert("Please enter yor phone-number");
      return;
    } else if (!password) {
      alert("Please enter yor password");
      return;
    } else {
      const containerLogin = document.querySelector("#container-login");
      const div = document.createElement("div");
      containerLogin.appendChild(div);
      div.innerHTML = "ثبت نام شما با موفقیت انجام شد ";
      div.classList.add("bg-green-50")
      div.classList.add("text-green-500")
      div.classList.add("p-2")
      div.classList.add("text-xl")
      div.classList.add("rounded")
      const removeDiv = () => {
        div.remove();
      };
      setTimeout(removeDiv, 3000);
    }
  };

  return (
    <div
      id="container-login"
      className="flex flex-col items-center bg-[#FBFBFB] my-10 w-1/2 m-auto p-5 rounded-md">
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
            type="text"
            placeholder="ایمیل"
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" w-full m-auto p-2">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="شماره تماس "
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className=" w-full m-auto p-2">
          <label htmlFor=""></label>
          <input
            type="text"
            placeholder="رمز عبور  "
            className="w-full bg-[#F0F0F0] rounded-lg py-4 px-4 outline-none placeholder:font-light focus:ring-2 transition-all focus:ring-colorPrimary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button
        className="btn-primary text-xl rounded-lg py-3 my-4 inline-block px-6 w-1/2  m-auto "
        onClick={clickHandler}>
        ثبت نام در سایت
      </button>
    </div>
  );
}

export default signUp;
