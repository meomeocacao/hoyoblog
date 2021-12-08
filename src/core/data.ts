import { NotiType, PostType, UserType } from "./types";

export const NotificationData: NotiType[] = [
  {
    id: 1,
    title: "New user registered",
    time: "1 min ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 2,
    title: "New invoice received",
    time: "20 min ago",

    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 3,
    title: "Server error encountered",
    time: "1 hrs ago",

    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 4,
    title: "User deleted from your account",

    time: "2 hrs ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 5,
    title: "New connection",
    time: "1 day ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 6,

    title: "New user registered",
    time: "1 day ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 7,
    title: "New invoice received",
    time: "1 day ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 8,
    title: "Server error encountered",
    time: "1 day ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 9,
    title: "User deleted from your account",
    time: "2 day ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
  {
    id: 10,
    title: "New connection",
    time: "1 week ago",
    icon: "https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/notification-circle-blue-512.png",
  },
];

export const UserData: UserType[] = [
  {
    id: 1,
    userName: "admin",
    email: "admin@gmail.com",
    password: "admin",
    image:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    lastOnline: "1 day ago",
  },
];

export const PostData: PostType[] = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: UserData[0],
    createAt: "2020-01-01",
  },
  {
    id: 3,
    title: "Post 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: UserData[0],
    createAt: "2020-01-01",
  },
  {
    id: 4,
    title: "Post 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: UserData[0],
    createAt: "2020-01-01",
  },
  {
    id: 5,
    title: "Post 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    user: UserData[0],
    createAt: "2020-01-01",
  },
];
