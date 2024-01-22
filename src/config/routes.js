import { Router } from "express";
import {
  getBooksList,
  getProductsList,
  getProductsAtStores,
} from "../app/controllers/productsImpl";
import { getCustomerList } from "../app/controllers/customersImpl";
import { createStore, deleteStoreRequest, getStoreList, putStoreRequest } from "../app/controllers/storesImpl";
import { getAllTransactionList } from "../app/controllers/transactionImpl";
import { getAuthorList } from "../app/controllers/authorsImpl";
import { pagination, joiValidator } from "../app/helper/helper";
import { verifyRequest } from "prospect";
import joiSchemas from "../app/schema/schema";
import { createAddress, deleteAddressRequest, putAddressRequest } from "../app/controllers/address";


module.exports = function (app) {
  const router = Router();
  app.use("/v1", router);

  router.use((req, res, next) => {
    console.log("**Start Log Request")
    console.log("anakin backend is getting request with path : /v1" + req.path);
    if (!!!req.query) {
      console.log(" --> req.query is : ");
      console.log(JSON.stringify(req.query, null, 2));
    }
    if (!!!req.body) {
      console.log(" --> req.body is : ");
      console.log(JSON.stringify(req.body, null, 2));
    }
    console.log("**End Log Request")
    next();
  });

  /**
   * get books service
   * @route get /books
   * @summary get list of all book
   * @group Product
   * @param {string} cur_page
   * @param {string} per_page
   * @param {string} isbn
   * @param {string} author_id
   * @param {string} book_title
   * @param {string} book_desc
   * @param {string} status
   * @param {string} author_prices_request
   * @returns {BookResponse.model} 200
   * @returns {Error}  default - Unexpected error
   * @security bearer
   */
  router.get("/books", pagination, getBooksList);
  router.get("/stores/product", getProductsAtStores);
  router.get("/products", getProductsList);

  /* Stores */
  /**
   * @route GET /stores
   * @group Stores
   * @returns 200 - get all store
   */
  router.get("/stores", pagination,getStoreList);

  /**
   * @route post /v1/stores
   * @summary create new stores
   * @group Stores
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.post("/stores", joiValidator(joiSchemas.createStore), createStore);

  /**
   * @route put /v1/stores
   * @summary update stores data
   * @group Stores
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.put("/stores", joiValidator(joiSchemas.putStore), putStoreRequest);
  
  /**
   * @route delete /v1/stores
   * @summary delete stores
   * @group Stores
   * @param {string} stores_id.query.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.delete("/stores", joiValidator(joiSchemas.deleteStore), deleteStoreRequest);

  /**
   * @route post /v1/address
   * @summary create new address
   * @group Address
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.post("/address", joiValidator(joiSchemas.createAddress), createAddress);

  /**
   * @route put /v1/address
   * @summary update address
   * @group Address
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.put("/address", joiValidator(joiSchemas.putAddress), putAddressRequest);

  /**
   * @route delete /v1/address
   * @summary delete address
   * @group Address
   * @param {string} address_id.query.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */
  router.delete("/address", joiValidator(joiSchemas.deleteAddress), deleteAddressRequest);


  /* Customers */
  router.get("/customers", getCustomerList);

  /* Authors */
  router.get("/authors", getAuthorList);

  /* Transaction */
  router.get("/transaction", getAllTransactionList);

  //check gitlab
  router.get("/gitlab", (req,res) => res.send({message: "ok"}))
};
