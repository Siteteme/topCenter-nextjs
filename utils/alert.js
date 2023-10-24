const showAlert = (message, textColor) => {
  const containerLogin = document.querySelector("#container-login");
  const div = document.createElement("div");
  containerLogin.appendChild(div);
  div.innerHTML = message;
  div.classList.add(`bg-gray-100`);
  div.classList.add(`text-${textColor}-500`);
  div.classList.add("py-2");
  div.classList.add("px-4");
  div.classList.add("font-bold");
  div.classList.add("text-md");
  div.classList.add("rounded");

  const removeDiv = () => {
    div.remove();
  };
  setTimeout(removeDiv, 2000);
};

export default showAlert;
