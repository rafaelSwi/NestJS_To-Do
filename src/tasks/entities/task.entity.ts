import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Task {
    @PrimaryColumn()
    id: number; // A ID Aleatória da Task
    @Column()
    title: string; // O Título da Task
    @Column()
    description: string; // A Descrição
    @Column()
    date: string; // A Data Limite para finalizar
    @Column()
    priority: number; // Quanto mais perto de Zero, mais importante
    @Column()
    status: string; // 'active', 'standby', 'done'
}