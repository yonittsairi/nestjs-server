import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

export class BaseCrudService<T> extends TypeOrmCrudService<T> {
  constructor(protected repo: Repository<T>) {
    super(repo);
  }
}
