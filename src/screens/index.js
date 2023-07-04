
import { useDispatch, useSelector } from "react-redux";
import { fetchComment } from "../redux/action";

const HomePage = () => {
  const dispatch = useDispatch();

  const commentData = useSelector((state) => state?.setCommentDataReducer?.commentData)

  return (
    <div>
      <button onClick={() => dispatch(fetchComment())}>Fetch Comment</button>
      {
        commentData?.map((item) => {

          return (
            <>
              <div key={item?.id}>
                <p>{item?.name}</p>
              </div>
            </>
          )
        })
      }

    </div>
  );
};

export default HomePage;
