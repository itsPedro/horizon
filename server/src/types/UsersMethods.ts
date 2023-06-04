import { User } from "../entities/User";

export interface UsersMethods {
  findByEmail: (email: string) => Promise<User | undefined>;
  create: (user: User) => Promise<void>;
}
