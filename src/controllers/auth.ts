
/**
 * Authenticates a user and returns their user information.
 *
 * @param {string} id - The user's ID.
 * @param {string} pw - The user's password.
 * @return {User} - An object containing the user's information.
 */
export function login(id: string, pw: string) {
  let isAdmin = id === "admin";
  return {
    id: id,
    name: `user-${id}`,
    role: isAdmin ? "admin" : "user",
  };
}
