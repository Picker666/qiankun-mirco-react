import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('app-vue', {relative: '/'})
  }

  return (
    <div>
      <h1>this is home page</h1>
      <Button onClick={handleClick}>go...</Button>
    </div>
  )
}

export default Home;