import FacadeConfig from '../FacadeConfig';
import createTable from '../utils/createTable';

export default (config: FacadeConfig) => {
  return async (key: string) => {
    await createTable(config);
    const table = (await config.db()).table(config.tableName);
    await Promise.resolve(table.where({ key }).del());
  };
};
