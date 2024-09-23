import Button from "@/06_shared/ui/Button_temp/Button";
import { useNavigate } from "react-router-dom";

interface GoMovieInfoButtonProps {
  id: number;
}

function GoMovieInfoButton({ id }: GoMovieInfoButtonProps) {
  const navigate = useNavigate();
  const handleShowMovieDetails = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return <Button onClick={() => handleShowMovieDetails(id)}>Подробнее</Button>;
}

export default GoMovieInfoButton;
