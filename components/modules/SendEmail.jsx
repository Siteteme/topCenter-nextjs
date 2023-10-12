import ArrowBottom from "@/public/images/arrowBottom.png";
import Shape from "@/public/images/shape.png";
import ArrowLeftSmall from "@/public/images/arrowleft-small.png";
import Image from "next/image";
import {useState} from "react";

function SendEmail() {
  const [name, setName] = useState("");
  const saveDataHandler = async () => {
    const res = await fetch("/api/saveDisc", {
      method: "POST",
      body: JSON.stringify(name),
      headers: {"Content-Type": "application/json"},
    });
    const data = await res.json();
    console.log(data);
    const emailValue = document.querySelector("#email-value");
    const message = document.querySelector("#errorSend");
    if (emailValue.value == "") {
      message.innerHTML = "لطفا یک مطلب برای ما ارسال کنید";
      message.classList.add("bg-red-500");
      message.classList.add("p-4");
      message.classList.add("text-white");
      message.classList.add("rounded-md");
      message.classList.add("w-1/2");
      return;
    } else if (emailValue.value.length <= 5) {
      message.innerHTML = "متن شما کوتاه است";
      message.classList.add("bg-blue-500");
      message.classList.add("p-4");
      message.classList.add("text-white");
      message.classList.add("rounded-md");
      message.classList.add("w-1/2");
      return;
    } else {
      setName(emailValue.value);
      message.innerHTML = "مطلب شما با موفقیت ارسال شد";
      message.classList.add("bg-green-500");
      message.classList.add("p-4");
      message.classList.add("text-white");
      message.classList.add("rounded-md");
      message.classList.add("w-1/2");
      message.classList.add("relative");

      function removeMessage() {
        message.classList.add("hidden");
        // location.reload(true);
      }
      const myTimeout = setTimeout(removeMessage, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[600px] my-32 py-24 bg-[url('/images/circle.png')] bg-no-repeat bg-auto bg-center  ">
      <div className="flex items-center mb-4 font-bold">
        <h3 className="text-colorPrimary">ارسال ایمیل به ما</h3>
        <Image
          src={Shape}
          alt="arrow"
          className="w-10 h-5 mx-2 md:w-20 md:h-14"
        />
      </div>
      <div className="relative">
        <p className="font-normal text-[10px] md:text-base">
          میتونید انتقادات و پیشنهاد های خودتون رو واسمون بفرستید
        </p>
        <Image
          src={ArrowBottom}
          alt="arrow"
          className="w-10 transition-all md:w-16 h-auto mt-2 -mr-2"
        />
      </div>

      <div className="bg-white p-2 my-10 shadow-2xl flex flex-col md:flex-row items-center justify-center w-1/2 rounded-md relative transition-all">
        <input
          type="text"
          placeholder="اینـــجا واســـمون بنــــویســــید"
          className="md:flex-1 outline-none p-4 rounded-md w-full text-[11px] md:text-base transition-all"
          required
          id="email-value"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn-primary py-3 flex items-center w-full md:w-fit text-[9px] justify-center md:absolute left-5 transition-all"
          type="submit"
          onClick={saveDataHandler}>
          <span className="text-sm">بفرست برامون</span>
          <span>
            <Image src={ArrowLeftSmall} alt="arrow" className="mr-2" />
          </span>
        </button>
      </div>
      <p id="errorSend"></p>
    </div>
  );
}

export default SendEmail;
