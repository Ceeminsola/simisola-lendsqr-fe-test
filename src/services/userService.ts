import { users } from "../mock/users";

import type { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
};