/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const user = this.usersRepository.findById(user_id);
    const users = this.usersRepository.list();

    if (user.admin) {
        return users;
    }

    throw new Error("User Is Not adm!");

  }
}

export { ListAllUsersUseCase };
