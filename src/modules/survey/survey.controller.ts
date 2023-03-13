import { Request, Response, NextFunction } from 'express';
import { Controller } from '../../lib/decorators/controller.decorator';
import { Get, Post } from '../../lib/decorators/methods.decorator';
import { Use } from '../../lib/decorators/middlewae.decorator';
import { ValidateInput } from '../../lib/decorators/valdation.decorators';
import { IResponse } from '../../lib/responses/IResponse';

@Controller('/survey')
class SurveyController {
  @Get('/')
  async searchSurvey(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json(<IResponse>{ hasError: false, data: 'result' });
    } catch (error) {
      next(error);
    }
  }
}
export default new SurveyController();
