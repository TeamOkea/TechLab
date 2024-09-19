fetch("https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  // fanger vores template
  const template = document.querySelector("template").content;
  // cloner
  const clone = template.cloneNode(true);
  // ændrer indhold
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = sub-category.html?category=${cat.category};
  
  // appender
  document.querySelector(".content").appendChild(clone);
}