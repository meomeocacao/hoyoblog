import axios from "axios";
import { CreatePostType, PostType } from "../types";

export const Host = "http://localhost:4444";

export const CreatePost = async (post: CreatePostType) => {
  await axios.post(`${Host}/post`, post);
};

export const GetPosts = async (): Promise<PostType[]> => {
  const { data } = await axios.get(`${Host}/post`);
  return data;
};
