import { Router, Request, Response } from 'express';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const blogEntryPutController = container.get('Apps.blog.controllers.BlogEntryPutController');
  router.put('/blogentry/:id', (req: Request, res: Response) => blogEntryPutController.run(req, res));
};
