const form = document.querySelector(".login-form");

form.addEventListener("submit", OnSubmit);

function OnSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const obj = {};
  obj.email = email.value;
  obj.password = password.value;
  console.log(obj);
  event.currentTarget.reset();
}
