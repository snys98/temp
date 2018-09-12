import { Resolver, Query, Arg, Args, Mutation, Authorized, Ctx } from "type-graphql";
import { QueryFailedError } from "typeorm";
import { User } from "../../domain/entities/user";
import { UserRepo } from "../../domain/repos/user.repo";
import { PageQueryArgs, CreateUserInput } from "../inputs/create-user.input";
import { User as UserType } from "../../application/types/user.type";
import { Inject, Service, Container } from "typedi";

@Resolver(UserType)
@Service()
export class UserResolver {
    @Inject()
    public userRepo: UserRepo;
    constructor() { }

    @Query(returns => UserType)
    async user(@Arg("id") id: string) {
        const user = await this.userRepo.findOne(id);
        if (user === undefined) {
            throw new QueryFailedError("", [id], true);
        }
        return user;
    }

    @Query(returns => [UserType])
    async users(@Args() { pageIndex, pageSize }: PageQueryArgs) {
        return await this.userRepo.find({
            skip: pageIndex * pageSize,
            take: pageSize,
        });
    }

    @Mutation(returns => UserType)
    // @Authorized()
    addUser(
        @Arg("input") input: CreateUserInput,
        @Ctx("user") user: User,
    ): User {
        let newUser = new User({ username: input.username, usedNames: input.usedNames });

        return this.userRepo.create({
            ...newUser
        });
    }

    @Mutation(returns => Boolean)
    // @Authorized(Roles.Admin)
    async removeUser(@Arg("id") id: string) {
        try {
            await this.userRepo.delete(id);
            return true;
        } catch {
            return false;
        }
    }
}
