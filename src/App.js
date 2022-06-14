import axios from "axios";
import { useRequest } from "./hooks/useRequest";

const App = () => {
  const fetchPosts = () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts");
  };

  console.log(fetchPosts());

  const [posts, isLoading, isError] = useRequest(fetchPosts);

  if (isLoading) {
    <h3>Loading...</h3>;
  }

  if (isError) {
    <h3>Something goes wrong...</h3>;
  }

  return (
    <div className="App" style={{ margin: "0 auto" }}>
      {posts &&
        posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            style={{ margin: "20px", backgroundColor: "coral" }}
          >
            <h4>{post.title}</h4>
            <div>{post.body}</div>
          </div>
        ))}
    </div>
  );
};

export default App;
