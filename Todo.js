let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let show = inp.value;
  let iteam = document.createElement("li");
  iteam.innerHTML = show;
  ul.appendChild(iteam);

  let but = document.createElement("button");
  but.innerText = "delete";
  but.classList.add("delete")
  iteam.appendChild(but);
  inp.value = "";
})

ul.addEventListener("click", function (event) {
  console.log(event.target.nodeName)
  if (event.target.nodeName === "BUTTON") {
    let rem = event.target.parentElement;
    rem.remove();
  }
})