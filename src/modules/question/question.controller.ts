import { Request, Response, NextFunction } from 'express';
import { Controller } from '../../lib/decorators/controller.decorator';
import { Get, Post } from '../../lib/decorators/methods.decorator';
import { Use } from '../../lib/decorators/middlewae.decorator';
import { ValidateInput } from '../../lib/decorators/valdation.decorators';
import { IResponse } from '../../lib/responses/IResponse';
import { questionService } from './services/question.service';

@Controller('/question')
class QuestionController {
  @Get('/test')
  async test(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await questionService.test();
      return res.json(<IResponse>{ hasError: false, data: result });
    } catch (error) {
      next(error);
    }
  }
}
export default new QuestionController();
