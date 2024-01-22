export function getAllAuthors() {
    return new Promise(async (resolve, reject) => {
      await apiModels.authors
        .findAll()
        .then((obj) => {
          resolve(obj);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }