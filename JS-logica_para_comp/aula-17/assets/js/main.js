const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backGroudColorbody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backGroudColorbody;
  p.style.color = "#FFFFFF";
}
