import {Request, Response} from 'express';
import {Controller} from './Controller';
import {CommitFinder} from '../../../../Contexts/Github/application/SearchAllCommits/CommitFinder';
import {GithubRepository} from '../../../../Contexts/Github/domain/GithubRepository';
import httpStatus from 'http-status';

export class GithubCommitsGetController implements Controller {
  constructor(private repository: GithubRepository) {}
  async run(req: Request, res: Response){
    const finder = new CommitFinder(this.repository)
    const data = await finder.run()
    res.status(httpStatus.OK).send(data)
  }

}
