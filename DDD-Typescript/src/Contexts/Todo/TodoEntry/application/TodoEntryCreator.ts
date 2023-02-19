import { TodoEntry } from '../domain/TodoEntry';
import { TodoEntryRepository } from '../domain/TodoEntryRepository';

export class TodoEntryCreator {
    private repository: TodoEntryRepository;

    constructor(repository: TodoEntryRepository) {
      this.repository = repository;
    }

    async run(id: string, title: string, body: string): Promise<void> {
      const course = new TodoEntry({ id, title, body });

      return this.repository.save(course);
    }
  }
