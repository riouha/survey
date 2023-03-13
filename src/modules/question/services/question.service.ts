import { In, LessThan, MoreThan } from 'typeorm';
import { dbConnection } from '../../../app/db/db';
import { Question } from '../entities/question.entity';

export class QuestionService {
  private questionRepo = dbConnection.datasource.getRepository(Question);

  async test() {
    return this.questionRepo.findOne({
      where: {
        order: MoreThan(2),
      },
      order: { order: 'ASC' },
    });
  }
}

export const questionService = new QuestionService();
