import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Survey } from '../../survey/entities/survey.entity';
import { Choice } from './choice.entity';
//=============================================

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public code: string;

  @Column()
  public text: string;

  @Column({ type: 'enum', enum: ['MultiChoice', 'OpenEnded'] })
  public type: 'MultiChoice' | 'OpenEnded';

  @Column({ nullable: true })
  public popup?: string;

  @Column({ nullable: true, type: 'json' })
  next?: { [key: string | number]: number };

  @Column()
  public order: number;

  @Column({ type: 'enum', enum: ['Q1', 'Q2'] })
  public section: 'Q1' | 'Q2';

  @Column({ type: 'enum', enum: ['General', 'LifeStyle', 'Male', 'Female'] })
  public group: 'General' | 'LifeStyle' | 'Male' | 'Female';

  @Column({ nullable: true, type: 'varchar', array: true })
  public tags?: string[];

  @OneToMany(() => Choice, (choice) => choice.question)
  choices?: Choice[];

  @Column({ nullable: true })
  parentId?: number;
  @ManyToOne(() => Question)
  parent?: Question;

  @Column({})
  surveyId: number;
  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
