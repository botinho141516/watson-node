export const create = `
      CREATE TABLE IF NOT EXISTS Audios (
      ID int NOT NULL AUTO_INCREMENT,
      text varchar(300) NOT NULL,
      audio_path varchar(50) NOT NULL,
      PRIMARY KEY (ID)
    );`;


export const name = 'Audios';