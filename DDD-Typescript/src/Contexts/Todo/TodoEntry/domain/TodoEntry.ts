export class TodoEntry {
    readonly id: string;
    readonly title: string;
    readonly body: string;

    constructor({ id, title, body }: { id: string; title: string; body: string; }) {
      this.id = id;
      this.title = title;
      this.body = body;
    }
  }
