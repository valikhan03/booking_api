import { Entity, Column } from "typeorm";

@Entity()
export class Housing{
    @Column()
    id!: string;
    @Column()
    title!: string;
    @Column()
    organisation!: string;
    @Column()
    location!: string;
    @Column()
    price!: number;
    @Column()
    description!: string;
};