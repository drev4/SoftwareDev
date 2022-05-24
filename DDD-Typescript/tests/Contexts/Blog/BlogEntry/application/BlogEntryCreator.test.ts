import { BlogEntryCreator } from '../../../../../src/Contexts/Blog/BlogEntry/application/BlogEntryCreator';
import { BlogEntry } from '../../../../../src/Contexts/Blog/BlogEntry/domain/BlogEntry';
import { BlogEntryRepositoryMock } from '../__mocks__/BlogEntryRepositoryMock';

let repository: BlogEntryRepositoryMock;
let creator: BlogEntryCreator;

beforeEach(() => {
  repository = new BlogEntryRepositoryMock();
  creator = new BlogEntryCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = 'some-id';
    const title = 'some-name';
    const body = 'some-body';

    const blogEntry = new BlogEntry({id, title, body});

    await creator.run(id, title, body);

    repository.assertLastSavedBlogEntryIs(blogEntry);
  });
});
