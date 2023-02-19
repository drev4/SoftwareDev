import { TodoEntryCreator } from '../../../../../src/Contexts/Todo/TodoEntry/application/TodoEntryCreator';
import { TodoEntry } from '../../../../../src/Contexts/Todo/TodoEntry/domain/TodoEntry';
import { BlogEntryRepositoryMock } from '../__mocks__/BlogEntryRepositoryMock';

let repository: BlogEntryRepositoryMock;
let creator: TodoEntryCreator;

beforeEach(() => {
  repository = new BlogEntryRepositoryMock();
  creator = new TodoEntryCreator(repository);
});

describe('CourseCreator', () => {
  it('should create a valid course', async () => {

    const id = 'some-id';
    const title = 'some-name';
    const body = 'some-body';

    const blogEntry = new TodoEntry({id, title, body});

    await creator.run(id, title, body);

    repository.assertLastSavedBlogEntryIs(blogEntry);
  });
});
