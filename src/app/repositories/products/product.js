import helper from "../../helper/helper";

export function getAllBooks(req) {
  let query = req.query
  let { cur_page, per_page, ...rest } = query;
  return new Promise(async (resolve, reject) => {
    await apiModels.books
      .findAndCountAll({
        offset: req.offset,
        limit: req.limit,
        include: [
          {
            model: apiModels.authors,
            required: true,
          },
        ],
        where: { ...rest },
      })
      .then(async (obj) => {
        resolve(obj);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getAllProducts() {
  return new Promise(async (resolve, reject) => {
    await apiModels.product
      .findAll()
      .then((obj) => {
        resolve(obj);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

export function getAllBooksAtStores(_isbn, _store_id) {
  return new Promise(async (resolve, reject) => {
    let query = {};
    if (_isbn) query.isbn = _isbn;

    let storeQuery = {};
    if (_store_id) storeQuery.store_id = _store_id;

    await apiModels.products_at_stores
      .findAll({
        where: storeQuery,
        include: {
          model: apiModels.product,
          where: query,
        },
      })
      .then((obj) => {
        resolve(obj);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
