import { TodoEntryRepository} from '../../../../../src/Contexts/Todo/TodoEntry/domain/TodoEntryRepository';
import { TodoEntry} from '../../../../../src/Contexts/Todo/TodoEntry/domain/TodoEntry';

export class BlogEntryRepositoryMock implements  TodoEntryRepository {
  private mockSave = jest.fn();

  async save(blogEntry: TodoEntry) {
    this.mockSave(blogEntry);
  }

  assertLastSavedBlogEntryIs(expected: TodoEntry): void {
    const mock = this.mockSave.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as TodoEntry;
    expect(lastSavedCourse).toBeInstanceOf(TodoEntry);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }

}
