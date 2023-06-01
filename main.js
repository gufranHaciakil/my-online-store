const buttunClass = document.querySelectorAll(".buttunClass");
const basariylaEklendi = document.getElementById("basariylaEklendi");
const sepetSayfasi = document.getElementById("sepetSayfasi");
const product = document.getElementById("product");

// closeIconFunk()
const closeIconFunk = () => {
  const closeIcon = document.getElementById("closeIcon");
  closeIcon.addEventListener("click", (eo) => {
    sepetSayfasi.style.left = "1360px";
  });
};

closeIconFunk();


const updatePrise = () => {
  const allProductInseppet=document.querySelectorAll(".img-title2")
  let sonuc2=0
  let sonuc=0
  let kargo=20
  allProductInseppet.forEach(item => {
    const productFiati=Number(item.getElementsByClassName("fiat")[0].innerText.replace("TL",""))
    const productValue=Number(item.getElementsByClassName("input")[0].value)
    sonuc=sonuc+kargo+(productFiati*productValue)
    sonuc2=sonuc2+(productFiati*productValue)

  });

const toplam=document.getElementById("toplam")
toplam.innerText=`${sonuc} TL`

const kargosiz=document.getElementById("kargosiz")
kargosiz.innerText=`${sonuc2} TL`

}

const body = document.getElementById("body");
buttunClass.forEach((item) => {
  item.addEventListener("click", (eo) => {
    {
      // from buy to done

      item.classList.add("buttunAktive");
      item.setAttribute("disabled", "");
      item.innerHTML = `Sepette Eklendi  &#10004;`;
    }

    {
      // creat Basarili Element
      const basariylaEklendi = document.createElement("div");
      body.prepend(basariylaEklendi);
      basariylaEklendi.innerHTML = "Başarıyla Eklendi &#10004;";
      basariylaEklendi.classList.add("basariylaEklendi");
      setTimeout(() => {
        basariylaEklendi.remove();
      }, 2000);
    }

    let itemTitle = item.parentElement.getElementsByTagName("p")[0].innerText;
    let itemImg = item.parentElement.getElementsByTagName("img")[0].src;
    let itemFiat = item.parentElement.getElementsByTagName("span")[0].innerText;


     { // Products InnerHtml
      product.innerHTML += `
    <div class="img-title2">
    <div class="conttt">
      <img src="${itemImg}" alt="" />
      <p class="sepetProductName">${itemTitle}</p>
      </div>
      <div class="kargoGunu">2 gün içinde kargoda</div>
      <div class="others-item">
        <input type="number" class="input" value="1" />
        <br />
        <span class="fiat">${itemFiat}</span>
        <div class="trashIcon" id="trashIconId"><i class="fa-solid fa-trash" id="trashICON"></i></div>
      </div>
    </div>`; 
     }

    updatePrise()
    closeIconFunk();


  });
});

const sepetIcon = document.getElementById("sepetIcon");
sepetIcon.addEventListener("click", (eo) => {
  sepetSayfasi.style.left = "806px";
});

sepetSayfasi.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("fa-trash")) {
    const removeProduct = eo.target.parentElement.parentElement.parentElement;
    removeProduct.style.opacity = "0";
    const sepetteProName =eo.target.parentElement.parentElement.parentElement.getElementsByClassName("sepetProductName")[0].innerText;
    setTimeout(() => {
      removeProduct.remove();
      updatePrise()

    }, 300);
    const allProCards = document.querySelectorAll(".cards");
    allProCards.forEach((item) => {
      const allCardsProName =item.getElementsByClassName("AllProductP")[0].innerText;
      if (allCardsProName == sepetteProName) {
      const sepetBTN= item.getElementsByClassName("buttunClass")[0]
      sepetBTN.removeAttribute("disabled")
      sepetBTN.classList.remove("buttunAktive")
      sepetBTN.innerText="sepete ekle"

      }
    });

  } 

});
sepetSayfasi.addEventListener("change",(eo) => {
      updatePrise()
})