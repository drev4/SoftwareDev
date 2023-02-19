import { TodoEntry } from './TodoEntry';

export interface TodoEntryRepository {
    //findById(id: string): Promise<TodoEntry | undefined>;
    save(entry: TodoEntry): Promise<void>;
}
