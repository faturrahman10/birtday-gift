import Countdown from "../components/Countdown";
import { useNavigate } from "react-router-dom";

export default function CountdownPage() {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/home");
  };

  return (
    <div>
      <Countdown onFinish={handleFinish} />
    </div>
  );
}
