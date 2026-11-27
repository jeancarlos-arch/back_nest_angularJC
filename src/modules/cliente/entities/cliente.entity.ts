import { Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Pedido } from "../../pedido/entities/pedido.entity.js";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_completo: string;

    @Column()
    dni: string;

    @Column()
    telefono: string;

    @OneToMany(() => Pedido, (pedido) => pedido.cliente)
    pedidos: Relation<Pedido[]>;
}