import { UserEntity } from '../user/user.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToMany, Unique, ManyToOne, DeleteDateColumn } from 'typeorm';


@Entity({ name: 'hobbies' })
export class HobbyEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({ nullable: true })
    createdAt?: Date;

    @Column()
    userId?: number
    @ManyToOne(() => UserEntity, (user) => user.id)
    user?: UserEntity;

    @Column()
    hobby: string



}
