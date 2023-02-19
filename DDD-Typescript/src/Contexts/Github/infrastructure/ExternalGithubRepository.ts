import {GithubRepository} from '../domain/GithubRepository';
import {Criteria} from '../../Shared/domain/criteria/Criteria';
import {GithubCommit} from '../domain/GithubCommit';
import {OctokitApiCall} from '../../Shared/infrastructure/OctokitApiCall';


export class ExternalGithubRepository implements GithubRepository {
  matching(criteria: Criteria): Promise<Array<GithubCommit>> {
    return Promise.resolve([GithubCommit.fromPrimitives('urlTest', 'name', 'email', 'date', 'msg')]);
  }

  async searchAll(): Promise<Array<GithubCommit>> {
    const githubApiKey = process.env.GITHUB_API_KEY
    const octokit = OctokitApiCall.create(githubApiKey ?? '')

    const githubOrgsResponse = await octokit.request('GET /repos/drev4/SoftwareDev/commits', {})
    return Promise.resolve(githubOrgsResponse.data.map((c: any) =>
      GithubCommit.fromPrimitives(
        c.commit.url ?? "url",
        c.commit.author.login ?? "login",
        c.commit.author.email ?? "email",
        c.commit.author.date ?? "date",
        c.commit.message ?? "msg"
      )
    ));
  }


}
