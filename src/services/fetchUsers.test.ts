
import { fetchUsers } from "../services/userService";

describe("fetchUsers", () => {
  it("returns a list of users", async () => {
    const users = await fetchUsers();

    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBeGreaterThan(0);
  });

  it("returns correct user structure", async () => {
    const users = await fetchUsers();

    const user = users[0];

    expect(user).toBeDefined();

    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("username");
    expect(user).toHaveProperty("profile");
    expect(user).toHaveProperty("education");
    expect(user).toHaveProperty("socials");
    expect(user).toHaveProperty("guarantor");
  });

  it("returns data after delay (async behavior)", async () => {
    const start = Date.now();

    await fetchUsers();

    const duration = Date.now() - start;

    expect(duration).toBeGreaterThanOrEqual(1400);
  });
});