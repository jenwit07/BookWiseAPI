export function getAllTransaction() {
    return new Promise(async (resolve, reject) => {
      await apiModels.product_transaction
        .findAll()
        .then((obj) => {
          resolve(obj);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }