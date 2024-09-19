const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("Type");

fetch("https://njujbooqnwrtexzmzpjj.supabase.co/rest/v1/kea_website=Type=Mærke", {
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qdWpib29xbndydGV4em16cGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTU2MDAsImV4cCI6MjA0MTUzMTYwMH0.BfUJKtZC_blOYEL_J2_BaLEyjijCs9j4fqojU4kIfrg",
  },
})
  .then((res) => res.json())
  .then(console.log);
