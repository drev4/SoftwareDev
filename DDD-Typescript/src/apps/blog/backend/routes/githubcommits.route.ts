import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {GithubCommitsGetController} from '../controllers/GithubCommitsGetController';


export const register = (router: Router) => {
  const githubCommitsGetController: GithubCommitsGetController = container.get('Github.Commit.controllers.GithubCommitsGetController');
  router.get('/commits', (req: Request, res: Response) => githubCommitsGetController.run(req, res));
};
