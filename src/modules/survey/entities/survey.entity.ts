import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Question } from '../../question/entities/question.entity';
//=============================================

@Entity()
export class Survey {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ default: false })
  public isComplete: boolean;

  @OneToMany(() => Question, (question) => question.survey)
  questions: Question[];

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
