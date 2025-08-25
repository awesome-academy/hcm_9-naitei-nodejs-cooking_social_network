import { del, get, post, put } from "./api.service";
import type {
  FilterPostsDto,
  PostResponse,
  PostsResponse,
  UpdatePostDto,
  PostEntity,
  CreatePostDto,
} from "../types/post.type";

function buildQuery(params?: Record<string, any>) {
  const query = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== "") {
        query.set(k, String(v));
      }
    });
  }
  return query.toString() ? `?${query.toString()}` : "";
}

export async function fetchPosts(params?: FilterPostsDto) {
  const queryString = buildQuery(params);
  const res = await get<PostsResponse>(`/posts${queryString}`);
  return res.data;
}

export async function getPostById(postId: number) {
  const res = await get<PostResponse>(`/posts/${postId}`);
  return res.data;
}

export async function getPostsByUser(username: string) {
  try {
    const queryString = buildQuery({ username });
    const res = await get<PostsResponse>(`/posts${queryString}`);
    return res.data.posts;
  } catch (error) {
    throw error;
  }
}

export async function getSavedPosts(username: string) {
  try {
    const queryString = buildQuery({ savedBy: true });
    const res = await get<PostsResponse>(`/posts${queryString}`);
    return res.data.posts;
  } catch (error) {
    throw error;
  }
}

export async function createPost(createPostDto: CreatePostDto) {
  const res = await post<PostResponse>('/posts', { post: createPostDto });
  return res.data;
}

export async function updatePost(postId: number, dto: UpdatePostDto) {
  const res = await put<PostResponse>(`/posts/${postId}`, { post: dto });
  return res.data;
}

export async function deletePost(postId: number) {
  const res = await del<{ message: string }>(`/posts/${postId}`);
  return res.data;
}

export async function likePost(postId: number) {
  const res = await post<{ message: string }>(`/posts/${postId}/like`);
  return res.data;
}

export async function unlikePost(postId: number) {
  const res = await del<{ message: string }>(`/posts/${postId}/unlike`);
  return res.data;
}

export async function sharePost(postId: number) {
  const res = await post<{ message: string; sharesCount?: number }>(`/posts/${postId}/share`);
  return res.data;
}

export async function savePost(postId: number) {
  const res = await post<{ message: string }>(`/posts/${postId}/save`);
  return res.data;
}

export async function unsavePost(postId: number) {
  const res = await del<{ message: string }>(`/posts/${postId}/save`);
  return res.data;
}
