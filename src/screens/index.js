
import { useDispatch } from "react-redux";
import { fetchComment } from "../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchComment())}>Increase</button>
    </div>
  );
};

export default HomePage;
