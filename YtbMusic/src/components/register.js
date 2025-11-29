import { axiosInstance } from "../utils/axios";

export const Register = async () => {
  return `
  <div class="flex flex-col items-center mt-[5%] gap-8 w-[720px] mx-auto text-white">

  <h2 class="text-3xl font-semibold">Đăng ký</h2>

  <p class="text-gray-400 text-base leading-6 text-center w-[560px]">
    Let’s create your account and Shop like a pro and save money.
  </p>

  <form class="flex flex-col gap-5 w-full items-center">

    <div class="relative w-[436px]">
      <input 
        id="name" 
        type="text" 
        placeholder=" " 
        class="peer w-full h-[50px] border border-gray-300 rounded-lg px-6 pt-4 bg-black text-white focus:outline-none">
      
      <label 
        for="name"
        class="absolute left-6 top-3 text-lg text-white font-medium
        transition-all 
        peer-placeholder-shown:top-[14px] 
        peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-10px]
        peer-not-placeholder-shown:text-sm
        peer-not-placeholder-shown:bg-black
        peer-not-placeholder-shown:px-2
        peer-focus:top-[-10px]
        peer-focus:text-sm
        peer-focus:bg-black
        peer-focus:px-2
        peer-focus:rounded-md">
        Name
      </label>

      <i class="fa-solid fa-user absolute right-3 bottom-3 text-white"></i>
    </div>

    <div class="relative w-[436px]">
      <input 
        id="user-email" 
        type="text"
        placeholder=" " 
        class="peer w-full h-[50px] border border-gray-300 rounded-lg px-6 pt-4 bg-black text-white focus:outline-none">

      <label 
        for="user-email"
        class="absolute left-6 top-3 text-lg text-white font-medium
        transition-all 
        peer-placeholder-shown:top-[14px] 
        peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-8px]
        peer-not-placeholder-shown:text-sm
        peer-not-placeholder-shown:bg-black
        peer-not-placeholder-shown:px-2
        peer-focus:top-[-8px] 
        peer-focus:text-sm 
        peer-focus:bg-black 
        peer-focus:px-2 
        peer-focus:rounded-md">
        Email
      </label>

      <i class="fa-solid fa-envelope absolute right-3 bottom-3 text-white"></i>
    </div>

    <div class="relative w-[436px]">
      <input 
        id="user-password" 
        type="password"
        placeholder=" " 
        class="peer w-full h-[50px] border border-gray-300 rounded-lg px-6 pt-4 bg-black text-white focus:outline-none">

      <label 
        for="user-password"
        class="absolute left-6 top-3 text-lg text-white font-medium
        transition-all 
        peer-placeholder-shown:top-[14px] 
        peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-8px]
        peer-not-placeholder-shown:text-sm
        peer-not-placeholder-shown:bg-black
        peer-not-placeholder-shown:px-2
        peer-focus:top-[-8px] 
        peer-focus:text-sm 
        peer-focus:bg-black 
        peer-focus:px-2 
        peer-focus:rounded-md">
        Password
      </label>

      <i class="fa-solid fa-lock absolute right-3 bottom-3 text-white"></i>
    </div>

    <div class="relative w-[436px]">
      <input 
        id="confirm-password" 
        type="password"
        placeholder=" " 
        class="peer w-full h-[50px] border border-gray-300 rounded-lg px-6 pt-4 bg-black text-white focus:outline-none">

      <label 
        for="confirm-password"
        class="absolute left-6 top-3 text-lg text-white font-medium
        transition-all 
        peer-placeholder-shown:top-[14px] 
        peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-8px]
        peer-not-placeholder-shown:text-sm
        peer-not-placeholder-shown:bg-black
        peer-not-placeholder-shown:px-2
        peer-focus:top-[-8px] 
        peer-focus:text-sm 
        peer-focus:bg-black 
        peer-focus:px-2 
        peer-focus:rounded-md">
        Confirm Password
      </label>

      <i class="fa-solid fa-lock absolute right-3 bottom-3 text-white"></i>
    </div>
    <div class="flex justify-between items-center w-[60%]">
      <a href="#" class="flex items-center gap-2">
        Set as default card
      </a>
      <a href="#" class="text-blue-500">Recovery Password</a>
    </div>

    <button type="submit" class="bg-red-600 hover:bg-red-400 text-white rounded-lg w-[460px] py-3 text-center">
      Sign Up
    </button>

    <a class="flex items-center justify-center gap-3 border border-gray-300 rounded-lg w-[460px] py-3 text-white">
      <i class="fa-solid fa-envelope"></i> Sign in with Gmail
    </a>

    <div class="flex justify-between w-[60%]">
      <span>Already have an account?</span>
      <a href="/login" class="text-blue-500">Sign In</a>
    </div>
  </form>
</div>

`
}
export const handleRegister = async () => {
    const container = document.querySelector("#root")
    const formEl = container.querySelector("form"); 
    const header = document.querySelector("header")
    const aside = document.querySelector("aside")
    if (header) header.style.display = "none";
    if (aside) aside.style.display = "none";
    formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = formEl.querySelector("#name").value;
    const email = formEl.querySelector("#user-email").value;
    const password = formEl.querySelector("#user-password").value;
    const confirmPassword = formEl.querySelector("#confirm-password").value;

    const token = await requestRegister(name, email, password, confirmPassword);

    if (token) {
      localStorage.setItem("access_token", token.access_token);
      localStorage.setItem("refresh_token", token.refresh_token);
      alert("Đăng ký thành công!");
      window.location.href = "/login"; 
    } else {
      alert("Đăng ký thất bại!");
    }
  });
}

// export const getAccessToken = () => {
//   const accessToken = localStorage.getItem("access_token");
//   return accessToken;
// };

// export const getRefreshToken = () => {
//   const refreshToken = localStorage.getItem("refresh_token");
//   return refreshToken;
// };

export const requestRegister = async (name, email, password, confirmPassword) => {
  const registerData = { name, email, password, confirmPassword };
  try {
    const response = await axiosInstance.post("/auth/register", registerData, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
