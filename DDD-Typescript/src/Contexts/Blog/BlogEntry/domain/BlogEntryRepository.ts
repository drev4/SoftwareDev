import { BlogEntry } from './BlogEntry';

export interface BlogEntryRepository {
    //findById(id: string): Promise<BlogEntry | undefined>;
    save(entry: BlogEntry): Promise<void>;
}
