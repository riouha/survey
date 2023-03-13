import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Question } from '../../question/entities/question.entity';
import { UserSurvey } from './user-survey.entity';
//=============================================

@Entity()
export class UserAnswer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  userSurveyId: number;
  @ManyToOne(() => UserSurvey)
  userSurvey: UserSurvey;

  @Column({})
  questionId: number;
  @ManyToOne(() => Question)
  question: Question;

  @Column({ nullable: true, type: 'int', array: true })
  answerIds?: number[];

  @Column({ nullable: true })
  openEndedAnswe: string;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
