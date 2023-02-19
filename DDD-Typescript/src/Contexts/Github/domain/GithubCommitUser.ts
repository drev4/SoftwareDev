import {AggregateRoot} from '../../Shared/domain/AggregateRoot';
import {GithubCommitUserName} from './GithubCommitUserName';
import {GithubCommitUserEmail} from './GithubCommitUserEmail';
import {GithubCommitUserDate} from './GithubCommitUserDate';

export class GithubCommitUser extends AggregateRoot {
  readonly name: GithubCommitUserName;
  readonly email: GithubCommitUserEmail;
  readonly date: GithubCommitUserDate;

  constructor(name: GithubCommitUserName, email: GithubCommitUserEmail, date: GithubCommitUserDate) {
    super();
    this.name = name;
    this.email = email;
    this.date = date
  }

  static create(name: GithubCommitUserName, email: GithubCommitUserEmail, date: GithubCommitUserDate): GithubCommitUser {
    return new GithubCommitUser(name, email, date)
  }

  static fromPrimitives(name: string, email: string, date: string): GithubCommitUser{
    return new GithubCommitUser(
      new GithubCommitUserName(name),
      new GithubCommitUserEmail(email),
      new GithubCommitUserDate(date)
    )
  }

  toPrimitives(): any {
    return {
      name: this.name.value,
      email: this.email.value,
      date: this.date.value
    }
  }


}
