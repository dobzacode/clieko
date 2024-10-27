import { user } from './schema';
import { Database, Repository } from './types';

export const createRepository = (database: Database): Repository => {
  const getUsers = async () => {
    return database.select().from(user);
  };

  return {
    getUsers,
  };
};
