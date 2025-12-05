import Countdown from "../components/Countdown";
import { useNavigate } from "react-router-dom";

export default function CountdownPage() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/home");
  };

  return (
    <div
      className="
        min-h-screen transition-all duration-500
        bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100
        dark:from-gray-900 dark:via-gray-950 dark:to-black
      "
    >
      <Countdown onFinish={handleFinish} />
    </div>
  );
}
