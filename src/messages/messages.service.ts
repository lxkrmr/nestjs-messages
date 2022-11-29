import { MessagesRepository } from './messages.repository';

export class MessagesService {
  repo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DON'T DO THIS ON REAL APPS
    this.repo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  findAll() {
    return this.repo.findAll();
  }

  create(content: string) {
    return this.repo.create(content);
  }
}
