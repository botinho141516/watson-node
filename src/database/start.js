import { connection, db, tablesPromise } from './index';


const createDatabase = async () => {
  const executeCreateQueries = () => new Promise((resolve, reject) => {
    if (!process.env.DB_NAME) throw new Error('Nome do banco de dados não informado');

    connection.query(`Create database ${process.env.DB_NAME};`, (error, result) => {
      connection.end();
      if (error) return reject(error);
      console.log('Banco de Dados criado\n');

      return resolve(result);
    });
  });

  try {
    await executeCreateQueries();
  } catch (err) {
    if (err.message.includes('database exists')) {
      console.log('Banco de Dados com esse nome já criado, criando tabelas...\n');
    } else {
      console.log(err.message);
      throw err;
    }
  }
};

const createTables = async () => {
  const tables = await Promise.all(tablesPromise);

  const tablesCreation = tables.map((table) => {

    console.log(`Criando tabela ${table.name}\n`);

    return new Promise((resolve, reject) => {
      db().query(table.create, (err, results) => {
        if (err) return reject();
        console.log(`Tabela ${table.name} criada\n`);
        return resolve(results);
      });
    });
  })

  return Promise.all(tablesCreation);
}

const main = async () => {
  console.log('Criando Banco de Dados...');
  await createDatabase();

  await createTables();
}

(async () => {
  await main();
  process.exit(0);
})();