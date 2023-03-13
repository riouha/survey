import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Survey } from './survey.entity';
import { User } from '../../user/user.entity';
import { UserAnswer } from './user-answer.entity';
//=============================================

@Entity()
export class UserSurvey {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ nullable: true, type: 'json' })
  aiInput?: { [key: string | number]: number };

  @Column({ nullable: true, type: 'json' })
  aiOutput?: { [key: string | number]: number };

  @Column()
  userId: number;
  @ManyToOne(() => User)
  user: User;

  @Column({})
  surveyId: number;
  @ManyToOne(() => Survey)
  survey: Survey;

  @OneToMany(() => UserAnswer, (answer) => answer.userSurvey)
  answers: UserAnswer[];

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
