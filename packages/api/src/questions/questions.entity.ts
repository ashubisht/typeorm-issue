import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Questions extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  displayId: string;

  @Column()
  smallText: string;

  @Column()
  fullText: string;

  @Column()
  categoryId: number;

  @Column()
  options: string[];

  @Column()
  answerOptions: string[];

  @Column()
  solution: string;

  @Column()
  tags: string[];

  @Column()
  level: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  @Column()
  userId: string;
}
