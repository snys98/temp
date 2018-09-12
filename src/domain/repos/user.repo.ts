import { Repository, TransactionRepository, EntityRepository } from "typeorm";
import { User } from "../entities/user";
import Container, { Service } from "typedi";

@EntityRepository(User)
@Service()
export class UserRepo extends Repository<User> {
    constructor() {
        super();
    }
}

