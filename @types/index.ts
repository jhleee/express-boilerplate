export type User = {
  id: string;
  name: string;
  role: "user" | "admin";
};

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}
