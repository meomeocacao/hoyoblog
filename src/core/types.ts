export type PostType = {
  id: number;
  title: string;
  content: string;
  image: string;
  createAt: string;
  user?: UserType;
};

export type UserType = {
  id: number;
  userName: string;
  email: string;
  password?: string;
  image?: string;
  lastOnline?: string;
};

export type NotiType = {
  id: number;
  title: string;
  time: string;
  icon: string;
};

export type CreatePostType = {
  title: string;
  content: string;
};
