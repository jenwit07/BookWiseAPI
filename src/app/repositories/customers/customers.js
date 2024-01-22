export function getAllCustomers() {
    return new Promise(async (resolve, reject) => {
      await apiModels.customers
        .findAll()
        .then((obj) => {
          resolve(obj);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }