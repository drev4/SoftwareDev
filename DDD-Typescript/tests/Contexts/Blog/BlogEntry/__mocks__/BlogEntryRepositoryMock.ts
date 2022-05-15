import { BlogEntryRepository} from '../../../../../src/Contexts/Blog/BlogEntry/domain/BlogEntryRepository';
import { BlogEntry} from '../../../../../src/Contexts/Blog/BlogEntry/domain/BlogEntry';

export class BlogEntryRepositoryMock implements  BlogEntryRepository {
  private mockSave = jest.fn();

  async save(blogEntry: BlogEntry) {
    this.mockSave(blogEntry);
  }

  assertLastSavedBlogEntryIs(expected: BlogEntry): void {
    const mock = this.mockSave.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as BlogEntry;
    expect(lastSavedCourse).toBeInstanceOf(BlogEntry);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }

}
