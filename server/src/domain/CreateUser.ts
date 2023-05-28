import { UsersMethods } from "../../types/UsersMethods";
import { User } from "../models/User";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {

  constructor(
    private usersMethods: UsersMethods
  ){}

  async execute(data: CreateUserDTO ){
    const userAlreadyExists = await this.usersMethods.findByEmail(data.email);

    if(userAlreadyExists){
      throw new Error('User already exists.');
    }

    const newUser = new User(data);
    await this.usersMethods.create(newUser);

  }

}