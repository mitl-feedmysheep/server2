import {
  DeleteResult,
  EntityManager,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  InsertResult,
  ObjectLiteral,
  Repository,
  UpdateResult,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class RDSBaseRepository<T extends ObjectLiteral> {
  private repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async insertOne(value: QueryDeepPartialEntity<T>, trxn?: EntityManager): Promise<ObjectLiteral> {
    const { identifiers } = await (trxn ? trxn.insert(this.repository.target, value) : this.repository.insert(value));
    return identifiers[0];
  }

  async insertMany(values: QueryDeepPartialEntity<T>[], trxn?: EntityManager): Promise<ObjectLiteral[]> {
    const { identifiers } = await (trxn ? trxn.insert(this.repository.target, values) : this.repository.insert(values));
    return identifiers;
  }

  update(
    conditions: FindOptionsWhere<Partial<T>>,
    updates: QueryDeepPartialEntity<T>,
    trxn?: EntityManager,
  ): Promise<UpdateResult> {
    if (trxn) {
      return trxn.update(this.repository.target, conditions, updates);
    }
    return this.repository.update(conditions, updates);
  }

  findOne(options: FindOneOptions<Partial<T>>, trxn?: EntityManager): Promise<T | null> {
    return this.repository.findOne(options);
  }

  findMany(options?: FindManyOptions<Partial<T>>, trxn?: EntityManager): Promise<T[]> {
    return this.repository.find(options);
  }

  onTransaction(trxn: (trxn: EntityManager) => Promise<void>): Promise<void> {
    try {
      return this.repository.manager.transaction(trxn);
    } catch (error) {
      throw new Error(`Transaction Failed ${error}`);
    }
  }

  delete(options: FindOptionsWhere<Partial<T>>): Promise<DeleteResult> {
    return this.repository.delete(options);
  }
}
