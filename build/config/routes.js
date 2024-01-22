"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _productsImpl = require("../app/controllers/productsImpl");

var _customersImpl = require("../app/controllers/customersImpl");

var _storesImpl = require("../app/controllers/storesImpl");

var _transactionImpl = require("../app/controllers/transactionImpl");

var _authorsImpl = require("../app/controllers/authorsImpl");

var _helper = require("../app/helper/helper");

var _prospect = require("prospect");

var _schema = _interopRequireDefault(require("../app/schema/schema"));

var _address = require("../app/controllers/address");

module.exports = function (app) {
  var router = (0, _express.Router)();
  app.use("/v1", router);
  router.use(function (req, res, next) {
    console.log("**Start Log Request");
    console.log("anakin backend is getting request with path : /v1" + req.path);

    if (!!!req.query) {
      console.log(" --> req.query is : ");
      console.log(JSON.stringify(req.query, null, 2));
    }

    if (!!!req.body) {
      console.log(" --> req.body is : ");
      console.log(JSON.stringify(req.body, null, 2));
    }

    console.log("**End Log Request");
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

  router.get("/books", _helper.pagination, _productsImpl.getBooksList);
  router.get("/stores/product", _productsImpl.getProductsAtStores);
  router.get("/products", _productsImpl.getProductsList);
  /* Stores */

  /**
   * @route GET /stores
   * @group Stores
   * @returns 200 - get all store
   */

  router.get("/stores", _helper.pagination, _storesImpl.getStoreList);
  /**
   * @route post /v1/stores
   * @summary create new stores
   * @group Stores
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router.post("/stores", (0, _helper.joiValidator)(_schema["default"].createStore), _storesImpl.createStore);
  /**
   * @route put /v1/stores
   * @summary update stores data
   * @group Stores
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router.put("/stores", (0, _helper.joiValidator)(_schema["default"].putStore), _storesImpl.putStoreRequest);
  /**
   * @route delete /v1/stores
   * @summary delete stores
   * @group Stores
   * @param {string} stores_id.query.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router["delete"]("/stores", (0, _helper.joiValidator)(_schema["default"].deleteStore), _storesImpl.deleteStoreRequest);
  /**
   * @route post /v1/address
   * @summary create new address
   * @group Address
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router.post("/address", (0, _helper.joiValidator)(_schema["default"].createAddress), _address.createAddress);
  /**
   * @route put /v1/address
   * @summary update address
   * @group Address
   * @param {RefreshTokenRequest.model} body.body.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router.put("/address", (0, _helper.joiValidator)(_schema["default"].putAddress), _address.putAddressRequest);
  /**
   * @route delete /v1/address
   * @summary delete address
   * @group Address
   * @param {string} address_id.query.required
   * @returns {RefreshTokenResponse.model} 201
   * @returns {Error}  default - Unexpected error
   * @security bearer
  */

  router["delete"]("/address", (0, _helper.joiValidator)(_schema["default"].deleteAddress), _address.deleteAddressRequest);
  /* Customers */

  router.get("/customers", _customersImpl.getCustomerList);
  /* Authors */

  router.get("/authors", _authorsImpl.getAuthorList);
  /* Transaction */

  router.get("/transaction", _transactionImpl.getAllTransactionList); //check gitlab

  router.get("/gitlab", function (req, res) {
    return res.send({
      message: "ok"
    });
  });
};
//# sourceMappingURL=routes.js.map