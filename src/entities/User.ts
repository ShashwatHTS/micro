import { CreateDateColumn, UpdateDateColumn } from "typeorm";

const {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
} = require("typeorm");

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
  
}
