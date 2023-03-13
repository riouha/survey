import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
//=============================================

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public userId: number;

  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;
}
