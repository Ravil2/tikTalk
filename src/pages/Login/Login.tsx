import logo from "../../assets/svg/Logo.svg";
import UButton from "../../UI/UButton/UButton";
import background from "../../assets/svg/Background.svg";
import { useState } from "react";
import star from "../../assets/svg/star.svg";
import { authApi } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authApi.login(inputs).then((data) => {
      auth.login(data.access_token);
      navigate("/");
    });
    setInputs({ username: "", password: "" });
  };

  return (
    <div className="grid grid-cols-[1fr_1fr] h-[100vh] items-center mx-[8%] gap-[40%] overflow-hidden">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <h1 className="font-extrabold text-5xl mb-8">Вход</h1>
        <label>
          Telegram username
          <input
            className="flex flex-col border border-white 
            rounded-[4px] pt-3 pr-12 pb-3 pl-5 
            w-full mt-1 mr-0 mb-3 ml-[1px] bg-[var(--dark-color)]
            text-white"
            type="text"
            placeholder="Введите логин"
            name="username"
            value={inputs.username}
          />
        </label>
        <label>
          Пароль
          <input
            className="flex flex-col border border-white 
            rounded-[4px] pt-3 pr-12 pb-3 pl-5 
            w-full mt-1 mr-0 mb-3 ml-[1px] bg-[var(--dark-color)]
            text-white"
            type="password"
            placeholder="Введите пароль"
            name="password"
            value={inputs.password}
          />
        </label>
        <UButton className="w-full">Войти</UButton>
      </form>
      <div>
        <div className="absolute right-[35%] top-[35%] animate-bounce">
          <img className="" src={star} />
        </div>
        <img
          src={background}
          className="absolute top-0 w-[66%] h-full right-[0] object-cover Z-0"
        />
        <img className="m-[0 auto] Z-10" src={logo} />
      </div>
    </div>
  );
};

export default Login;
