const url = "https://634840db0484786c6e95e220.mockapi.io/Data";
const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const formDataSerialized = Object.fromEntries(formData);
  const jsonObject = {
    ...formDataSerialized,
    check: formDataSerialized.check ? true : false,
  };

  const email = formData.get("email");
  const password = formData.get("password");
  const passwordRepeat = formData.get("password-repeat");

  if (email == "" || password == "" || passwordRepeat == "") {
    alert("Form harus diisi ngab");
    return;
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonObject),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    console.log(json);
    alert("Berhasil");
  } catch (e) {
    console.error(e);
    alert("ada error");
  }
});
