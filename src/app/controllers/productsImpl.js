import {
  getAllBooks,
  getAllProducts,
  getAllBooksAtStores,
} from "../repositories/products/product";

export const getBooksList = async (req, res) => {
  await getAllBooks(req)
    .then((obj) => {
      res.json({
        success: true,
        cur_page: req.cur_page ? req.cur_page : 1,
        per_page: req.per_page ? req.per_page : null,
        page_items: obj.count,
        page_all: Math.ceil(obj.count / req.per_page),
        data: obj.rows,
      });
    })
    .catch((e) => {
      console.error(e);
      res.json({
        success: false,
        data: `error on getBooksList`,
      });
    });
};

export const getProductsList = async (req, res) => {
  await getAllProducts()
    .then((obj) => {
      res.json({
        success: true,
        data: obj,
      });
    })
    .catch((e) => {
      console.error(e);
      res.json({
        success: false,
        data: `error on getBooksList`,
      });
    });
};

export const getProductsAtStores = async (req, res) => {
  let storeID = req.query.store_id;
  let isbn = req.query.isbn;

  await getAllBooksAtStores(isbn, storeID)
    .then((obj) => {
      res.json({
        success: true,
        data: obj,
      });
    })
    .catch((e) => {
      console.error(e);
      res.json({
        success: false,
        data: `error on getProductsAtStores`,
      });
    });
};
