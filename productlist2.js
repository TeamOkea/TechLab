/** @format */

const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const url = `https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/${category}?select=*`;

fetch(url, {
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg",
  },
})
  .then((res) => res.json())
  .then(showProducts)
  .catch((error) => console.error("Error:", error));

function showProducts(products) {
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // fang template
  const template = document.querySelector("#smallProductTemplate").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector(".icon").textContent = product.Mærke; // Ret til `product` og brug textContent

  // appende
  document.querySelector(".container").appendChild(copy);
}
