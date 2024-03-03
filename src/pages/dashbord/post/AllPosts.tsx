import { useState, useEffect } from "react";
import { getAllPostes } from "../../../service/apiService";
import UserPost from "./UserPost";
import PostesLoder from "../../../components/commen/sklitionsLoders/PostesLoder";
import { UserPostProps } from "../../../types/Types";

const AllPosts = () => {
  const [posts, setPosts] = useState<UserPostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getAllPostes();
        setPosts(fetchedPosts);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {!isLoading ? (
      posts.map((post) => (
        <UserPost key={post.id} {...post} />
      ))
    ) : (
      <PostesLoder />
    )}
  </div>
  );
};

export default AllPosts;
