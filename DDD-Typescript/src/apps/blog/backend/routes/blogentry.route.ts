import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {BlogEntryPutController} from '../controllers/BlogEntryPutController';

export const register = (router: Router) => {
  console.log(router.name);
  const blogEntryPutController: BlogEntryPutController = container.get('Apps.blog.controllers.BlogEntryPutController');
  router.put('/entryblog', (req: Request, res: Response) => blogEntryPutController.run(req, res));
};
