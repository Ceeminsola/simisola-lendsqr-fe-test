import { users } from "../mock/users";

export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
};