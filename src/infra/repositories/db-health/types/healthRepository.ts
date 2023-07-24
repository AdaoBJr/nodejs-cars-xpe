import { Health } from 'types/domain';

export interface HealthDbRepository {
  findHealth(): Promise<Health>;
}
