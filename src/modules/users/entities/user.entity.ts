import { Persona } from "../../persona/entities/persona.entity.js";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    mail: string;

    @Column()
    password: string;

    @OneToOne(() => Persona, persona => persona.user, { cascade: true })
    persona: Relation<Persona>;
}