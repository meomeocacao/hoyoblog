export type PostType = {
  id: number;
  title: string;
  content: string;
  image: string;
  user?: UserType;
};

export type UserType = {
  id: number;
  userName: string;
  email: string;
  password?: string;
};

export type NotiType = {
  id: number;
  title: string;
  time: string;
  icon: string;
};
