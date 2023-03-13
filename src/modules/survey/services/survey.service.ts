import { dbConnection } from '../../../app/db/db';
import { Survey } from '../entities/survey.entity';

export class SurveyService {
  private surveyRepo = dbConnection.datasource.getRepository(Survey);

  async addSurvey() {
    return '';
  }
}

export const surveyService = new SurveyService();
