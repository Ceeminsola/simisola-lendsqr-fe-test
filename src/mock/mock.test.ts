import { users } from "../mock/users";

describe("mock users", () => {
  it("generates 500 users", () => {
    expect(users.length).toBe(500);
  });

  it("has required fields", () => {
    expect(users[0]).toHaveProperty("username");
    expect(users[0]).toHaveProperty("profile");
    expect(users[0]).toHaveProperty("education");
  });
});