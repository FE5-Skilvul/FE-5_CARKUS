const url = "https://634840db0484786c6e95e220.mockapi.io/Data";
const form = document.getElementById("login");
async function getUser() {
  let res = await fetch(`${url}`);

  return res.json();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let res = await getUser();

  const formData = new FormData(form);
  const email = formData.get("email");
  const password = formData.get("password");

  let user = res.find((u) => u.email === email);

  console.log(email);
  if (!user || user.password != password) {
    alert("password atau username salah");
  } else {
    alert("yeay");
  }
});
