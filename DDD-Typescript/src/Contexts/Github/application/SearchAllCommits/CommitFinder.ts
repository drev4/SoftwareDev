import {ExternalGithubRepository} from '../../infrastructure/ExternalGithubRepository';

export class CommitFinder {
  constructor(private commitRepository: ExternalGithubRepository) {}

  async run() {
    const data = await this.commitRepository.searchAll()
    return data?.map(x => x.toPrimitives())
  }
}
