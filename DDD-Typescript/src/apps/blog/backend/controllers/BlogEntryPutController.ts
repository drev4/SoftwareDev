import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';
import {ClassExample} from '../example/ClassExample';

export class BlogEntryPutController implements Controller {
  constructor(example: ClassExample) {
  }

  async run(req: Request, res: Response) {
    res.status(httpStatus.OK).send('OK');
  }
}
