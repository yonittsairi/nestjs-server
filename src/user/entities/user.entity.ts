import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToOne, JoinColumn, OneToMany, DeleteDateColumn } from 'typeorm';
import { MaxLength, MinLength } from 'class-validator';
import { HobbyEntity } from 'src/hobbies/entities/hobby.entity';


@Entity({ name: 'user', schema: 'yonit_tzairi' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @CreateDateColumn({ nullable: true })
    createdAt?: Date;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    address: string

    @MaxLength(10)
    @MinLength(10)
    @Column()
    phoneNumber: string

    @OneToMany(() => HobbyEntity, (hobby) => hobby.user, { eager: true, cascade: ['soft-remove'] })
    hobbies: HobbyEntity[];

    @DeleteDateColumn()
    deletedAt?: Date
}
