import { Repository, TransactionRepository, EntityRepository, Connection } from "typeorm";
import { User } from "../entities/user";
import { InjectConnection } from "typeorm-typedi-extensions";
import Container, { Service, Inject } from "typedi";

@EntityRepository(User)
@Service()
export class UserRepo extends Repository<User> {
    @InjectConnection()
    private connection: Connection;
    constructor() {
        super();
    }
}
