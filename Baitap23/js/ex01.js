const inputs = document.querySelectorAll("#registerForm input");
const minLength = 6;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const value = input.value.trim();

    if (value.length < minLength) {
      input.classList.add("error");
      input.classList.remove("success");
    } else {
      input.classList.add("success");
      input.classList.remove("error");
    }
  });
});
