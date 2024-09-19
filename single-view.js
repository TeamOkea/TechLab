/** @format */

// https://kea-alt-del.dk/t7/api/products/1525

const URLParams = new URLSearchParams(window.location.search);
const id = URLParams.get("id");
/* const url = `https://kea-alt-del.dk/t7/api/products/${id}`; */

fetch("https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(item) {
  console.log(item);
  document.querySelector(".product_name").textContent = item.Produktnavnogmodel;
  document.querySelector(".product_info").textContent = item.Taksonomi1;
}

/* {
    "Type": " Camera Mounts",
    "Asset ID": "C00332",
    "Mærke": "GoPro",
    "Objektkode": 9154,
    "Produktnavn og model": "GoPro Chesty",
    "Taksonomi 1": "Audio/Photo/Video Equipment",
    "Taksonomi 2": "Camera Mounts",
    "Taksonomi 3": ""
  } */
