import { User } from "../../users/entities/user.entity.js";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @OneToOne(() => User, user => user.persona)
    user: Relation<User>;
}