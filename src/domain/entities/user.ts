import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity("user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    username: string;
    @Column()
    private _usedNames: string;
    public set usedNames(v: string[]) {
        this._usedNames = v.join(",");
    }

    constructor(init?: Partial<User>) {
        super();
        Object.assign(this, init);
    }
}

