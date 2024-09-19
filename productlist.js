/** @format */
 
// https://njujbooqnwrtexzmzpjj.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg
 
const params = new URLSearchParams(window.location.search);
let category = params.get("category");
let url =
  "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?Type=" +
  category;
 
category = "Mærke";
 
if (category)
  fetch(
    `https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?.${encodeURIComponent(
      category
    )}`,
 
    /* fetch(
  "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?Mærke=eq.GoPro?select=Objektkode", */
    /*  fetch(
    "https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website?select=tags", */
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg",
      },
    }
  )
    .then((response) => response.json())
    .then(showDatas);
 
function showDatas(items) {
  console.log(items);
  items.forEach(showData);
}
 
function showData(item) {
  console.log(item);
 
  // fang template
  const template = document.querySelector("#smallProductTemplate");
 
  // lav en kopi
  const copy = template.content.cloneNode(true);
 
  //ændre indhold
  copy.querySelector(".icon").textContent.innerHTML = item.Type;
  copy.querySelector("a").textContent = item.Mærke;
  copy.querySelector(".content-2").textContent = item.Type;
  copy.querySelector(".content-3").textContent = item.Produktnavnogmodel;
  //appende
  document.querySelector(".container").appendChild(copy);
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
