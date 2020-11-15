import { db } from "../database";


export const create = ({ path, text }) => new Promise((resolve, reject) => {
  const query = 'INSERT INTO Audios VALUES (?, ?, ?)'
  db().query(query, [null, text, path], (error, results) => {
    if (error)
      return reject(error);

    return resolve(results);
  });
});

export const readAll = () => new Promise((resolve, reject) => {
  const query = 'SELECT * FROM Audios'
  db().query(query, (error, results) => {
    if (error)
      return reject(error);

    return resolve(results);
  });
});