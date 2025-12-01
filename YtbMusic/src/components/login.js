import { axiosInstance } from "../utils/axios";

export const Login = async () => {
  return `<div class="flex flex-col items-center gap-8 w-[720px] mt-[6%] mx-auto">

  <h2 class="text-white text-3xl font-semibold">Đăng nhập</h2>

  <p class="text-white text-[15px] font-medium leading-[22px] text-center w-[560px]">
    Welcome back to sign in. As a returning customer, you have access to your previously
    saved all information.
  </p>

  <form class="flex flex-col gap-5">
      
    <div class="relative">
      <input 
        type="text" 
        id="user-email" 
        placeholder=" " 
        class="w-[436px] text-white h-[50px] border border-[#D2D1D6] rounded-[10px] px-6 pt-4 peer bg-black focus:outline-none">
      
      <label 
        for="user-email"
        class="absolute left-5 top-3 text-white text-lg font-medium
        transition-all
        peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:rounded-md
        peer-focus:top-[-8px] peer-focus:text-sm peer-focus:bg-black peer-focus:px-2 peer-focus:rounded-md">
        Email
      </label>

      <i class="fa-solid fa-envelope p-[3px] bg-white rounded-full absolute right-[35px] bottom-[13px]"></i>
    </div>

    <div class="relative">
      <input 
        type="password" 
        id="user-password" 
        placeholder=" " 
        class="w-[436px] text-white h-[50px] border border-[#D2D1D6] rounded-[10px] px-6 pt-4 peer bg-black focus:outline-none">
      
      <label 
        for="user-password"
        class="absolute left-5 top-3 text-white text-lg font-medium
        transition-all
        peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-lg
        peer-not-placeholder-shown:top-[-8px] peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:bg-black peer-not-placeholder-shown:px-2 peer-not-placeholder-shown:rounded-md
        peer-focus:top-[-8px] peer-focus:text-sm peer-focus:bg-black peer-focus:px-2 peer-focus:rounded-md">
        Password
      </label>

      <i class="fa-solid fa-lock p-[3px] bg-white rounded-full absolute right-[35px] bottom-[13px]"></i>
    </div>
    <div class="flex justify-between items-center w-full">
    <a href="#" class="flex items-center gap-2 text-[#9E9DA8]">
      Set as default card
    </a>
    <a href="#" class="text-[#0071DC]">Recovery Password</a>
  </div>
    <button class="bg-[red] text-white hover:bg-[#e23e3e] rounded-[10px] w-[460px] py-3 text-center select-none">Login</button>
  <a href="#" class="flex items-center justify-center gap-3 border border-[#D2D1D6] rounded-[10px] w-[460px] py-3 text-white">
    <i class="fa-solid fa-envelope"></i> Sign in with Gmail
  </a>

  <div class="flex justify-between w-full">
    <span class="text-[#9E9DA8] text-[18px]">Don't have an account yet?</span>
    <a href="/register" class="text-[#0071DC]">Sign Up</a>
  </div>
  </form>

</div>
    `;
};

export const handleLogin = async () => {
  const container = document.querySelector("#root");
  const formEl = container.querySelector("form");
  const header = document.querySelector("header");
  const aside = document.querySelector("aside");

  if (header) header.style.display = "none";
  if (aside) aside.style.display = "none";
  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = formEl.querySelector("#user-email").value;
    const password = formEl.querySelector("#user-password").value;
    const token = await requestLogin(email, password);

    if (token) {
      localStorage.setItem("access_token", token.access_token);
      localStorage.setItem("refresh_token", token.refresh_token);
      window.location.href = "/";

      const loginBtn = document.querySelector(".js-login");
      if (loginBtn) loginBtn.style.display = "none";

      const profileBox = document.querySelector("#profile-box");
      if (profileBox) {
        profileBox.style.display = "flex";
      }
    } else {
      alert("Login thất bại");
    }
  });
};

export const requestLogin = async (email, password) => {
  const loginData = { email, password };
  try {
    const response = await axiosInstance.post("/auth/login", loginData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const LogOut = async () => {
  try {
    const response = await axiosInstance.delete("/auth/logout", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    // window.location.href = "/login"
    return response.data
  } catch (error) {
    console.log(error);
  }
}