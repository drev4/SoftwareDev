import { BlogEntry } from '../domain/BlogEntry';
import { BlogEntryRepository } from '../domain/BlogEntryRepository';

export class BlogEntryCreator {
    private repository: BlogEntryRepository;

    constructor(repository: BlogEntryRepository) {
      this.repository = repository;
    }

    async run(id: string, title: string, body: string): Promise<void> {
      const course = new BlogEntry({ id, title, body });

      return this.repository.save(course);
    }
  }
