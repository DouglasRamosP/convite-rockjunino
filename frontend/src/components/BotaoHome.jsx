import { useNavigate } from "react-router-dom";

export default function BotaoHome() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold z-50"
    >
      Home
    </button>
  );
}
