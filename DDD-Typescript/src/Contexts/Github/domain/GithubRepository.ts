import {GithubCommit} from './GithubCommit';
import {Criteria} from '../../Shared/domain/criteria/Criteria';

export interface GithubRepository {
  searchAll(): Promise<Array<GithubCommit>>;
  matching(criteria: Criteria): Promise<Array<GithubCommit>>;
}
