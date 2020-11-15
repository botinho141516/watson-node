export const create = `
      CREATE TABLE IF NOT EXISTS Audios (
      id int NOT NULL AUTO_INCREMENT,
      text varchar(300) NOT NULL,
      audio_path varchar(50) NOT NULL,
      PRIMARY KEY (id)
    );`;


export const name = 'Audios';