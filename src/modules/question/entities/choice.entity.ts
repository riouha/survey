import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Question } from './question.entity';
//=============================================

@Entity()
export class Choice {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public text: string;

  @Column()
  public order: number;

  @Column({})
  questionId: number;
  @ManyToOne(() => Question, (question) => question.choices)
  question: Question;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
