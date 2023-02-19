import {AggregateRoot} from '../../Shared/domain/AggregateRoot';
import {GithubRepoUrl} from './GithubRepoUrl';
import {GithubCommitUser} from './GithubCommitUser';
import {GithubCommitMessage} from './GithubCommitMessage';

export class GithubCommit extends AggregateRoot {
  readonly url: GithubRepoUrl;
  readonly author: GithubCommitUser;
  readonly message: GithubCommitMessage;

  constructor(url: GithubRepoUrl, author: GithubCommitUser, message: GithubCommitMessage) {
    super();
    this.url = url;
    this.author = author;
    this.message = message;
  }

  static create(url: GithubRepoUrl, author: GithubCommitUser, message: GithubCommitMessage): GithubCommit {
    return new GithubCommit(url, author, message);
  }

  static fromPrimitives(url: string, authorName: string, authorEmail: string, authorDate: string, message: string) : GithubCommit {
    return new GithubCommit(
      new GithubRepoUrl(url),
      GithubCommitUser.fromPrimitives(authorName, authorEmail, authorDate),
      new GithubCommitMessage(message)
    )
  }

  toPrimitives(): any {
    return {
      url: this.url.value,
      author: this.author.toPrimitives(),
      message: this.message.value
    }
  }




}
