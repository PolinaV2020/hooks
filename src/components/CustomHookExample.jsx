import axios from "axios";
import { useRequest } from "../hooks/custom/useRequest.js";

export const CustomHookExample = () => {
  const fetchPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  const [posts, isLoading, isError] = useRequest(fetchPosts);

  if (isLoading) {
    <h3>Loading...</h3>;
  }

  if (isError) {
    <h3>Something goes wrong...</h3>;
  }

  return (
    <div>
      {posts &&
        posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#C38D9E" }}
          >
            <h4
              style={{ textTransform: "uppercase"}}>{post.title}</h4>
            <div>{post.body}</div>
          </div>
        ))}
    </div>
  );
};