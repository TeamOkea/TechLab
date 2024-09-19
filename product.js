/** @format */

const URLParams = new URLSearchParams(window.location.search);
const id = URLParams.get("id");

fetch("https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".product-head").textContent =
    product.productdisplayname;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  document.querySelector(".model-container-3").textContent =
    product.productdisplayname;
  document.querySelector(".product-text").textContent = product.basecolour;
  document.querySelector(".product-text-2").textContent = product.id;
  document.querySelector(".product-text-3").textContent = product.brandname;
  document.querySelector(".product-text-4").textContent = product.brandbio;
}
