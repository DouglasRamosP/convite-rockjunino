import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BotaoHome from "@/components/BotaoHome";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white">
      <BotaoHome />

      <div className="bg-[#2c261f] p-6 rounded-lg shadow-md space-y-4 w-80">
        <h1 className="text-2xl font-bold text-center">Login do Camarim</h1>

        <input
          placeholder="Usuário"
          className="bg-white text-black px-2 py-1 w-full rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="bg-white text-black px-2 py-1 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white w-full font-semibold"
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
