import RepoFacade from '@js-migrations/core/dist/RepoFacade';
import FacadeConfig from './FacadeConfig';
import FactoryConfig from './FactoryConfig';
import clearMigrations from './functions/clearMigrations';
import getProcessedMigrations from './functions/getProcessedMigrations';
import lockMigrations from './functions/lockMigrations';
import removeProcessedMigration from './functions/removeProcessedMigration';
import unlockMigrations from './functions/unlockMigrations';
import updateProcessedMigrations from './functions/updateProcessedMigrations';

export default (factoryConfig: FactoryConfig): RepoFacade => {
  const facadeConfig: FacadeConfig = {
    lockTableName: 'migrationsLock',
    tableName: 'migrations',
    ...factoryConfig,
  };
  return {
    clearMigrations: clearMigrations(facadeConfig),
    getProcessedMigrations: getProcessedMigrations(facadeConfig),
    lockMigrations: lockMigrations(facadeConfig),
    removeProcessedMigration: removeProcessedMigration(facadeConfig),
    unlockMigrations: unlockMigrations(facadeConfig),
    updateProcessedMigration: updateProcessedMigrations(facadeConfig),
  };
};
