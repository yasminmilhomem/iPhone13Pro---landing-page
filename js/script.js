const buttons = document.querySelectorAll("#image-picker li"); //a constante buttons pega o conteúdo da id indicada
const image = document.querySelector("#product-image"); //a constante image pega o conteúdo da id indicada

buttons.forEach((btn) => { //a função forEach executa uma dada função em cada elemento do array, onde btn é o valor do array
  btn.addEventListener("click", (e) => { //depois de pegar os elementos de btn, o addEventListener vai pegar o evento de click e passar para (e)
    console.log(e); //imprimindo o evento e no console

    buttons.forEach((btn) => //função forEach dentro da externa
      btn.querySelector(".color").classList.remove("selected") //selecionando a classe color e removendo a selected
    );

    const button = e.target; //

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.toggle("changing");
    image.setAttribute("src", `img/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
