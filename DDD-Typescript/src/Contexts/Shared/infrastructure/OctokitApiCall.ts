import {Octokit} from 'octokit';

export class OctokitApiCall {
  static create(auth: string) {
    return new Octokit({
      auth: auth
    })
  }
}
