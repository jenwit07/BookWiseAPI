/**
 * @typedef Pagination
 * @param {string} cur_page
 * @param {string} per_page
 */

/**
 * @typedef BookRequest
 * @property {integer} isbn
 * @property {string} author_id
 * @property {string} book_title
 * @property {string} book_desc
 * @property {string} status
 * @property {string} author_prices_request
 */

/**
 * @typedef BookResponse
 * @property {boolean} success
 * @property {string} cur_page
 * @property {string} per_page
 * @property {string} page_items
 * @property {string} page_all
 * @property {Array.<BookWithAuthorModel>} data
 */

/**
 * @typedef BookWithAuthorModel
 * @property {string} date_of_request
 * @property {string} create_date
 * @property {string} update_date
 * @property {string} isbn
 * @property {string} author_id
 * @property {string} book_title
 * @property {string} book_desc
 * @property {object} book_payload
 * @property {string} active_ﬂag
 * @property {string} status
 * @property {string} author_prices_request
 * @property {string} create_by
 * @property {string} update_by
 * @property {Array.<AuthorModel>} author
 */

/**
 * @typedef AuthorModel
 * @property {integer} author_id
 * @property {string} author_name
 * @property {string} customer_id
 * @property {string} author_signatures
 * @property {string} active_flag
 */

/**
 * @typedef UserInform
 * @property {string} user
 * @property {string} name - First Name - eg: John
 * @property {string} last_name
 * @property {object} properties
 * @property {Array.<string>} roles
 * @property {string} email
 * @property {string} phone
 * @property {string} access_token
 * @property {string} refresh_token
 * @property {Array.<string>} permission
 */

/**
 * @typedef Register
 * @property {string} domain.required
 * @property {string} user.required
 * @property {string} password.required
 * @property {string} email.required
 * @property {string} citizen_id.required
 * @property {string} name.required
 * @property {string} phone.required
 */

/**
 * @typedef RegisterResponse
 * @property {string} domain
 * @property {string} user
 * @property {object} email
 * @property {string} citizen_id
 * @property {string} name
 * @property {string} phone
 */

/**
 * @typedef RefreshTokenRequest
 * @property {string} refresh_token.required
 */

/**
 * @typedef RefreshTokenResponse
 * @property {string} jwtToken
 * @property {string} refreshToken
 */

/**
 * @typedef Error400
 * @property {integer} code - code 1000 to 9999 - eg: 1000
 * @property {string} message - Some description for point - eg: Bad Request
 */

/**
 * @typedef AssignRoleRequest
 * @property {string} domain.required
 * @property {string} user.required
 * @property {Array.<string>} roles.required
 */

/**
 * @typedef AssignRoleResponse
 * @property {Array.<string>} roles
 */

/**
 * @typedef PermissionRequest
 * @property {string} domain.required.query
 * @property {[string]} roles.query
 */

/**
 * @typedef PermissionResponse
 * @property {string} permission_id
 * @property {string} domain
 * @property {string} permission
 * @property {string} access
 * @property {string} name
 * @property {object} name_locale
 * @property {string} description
 * @property {object} description_locale
 * @property {string} updated_at
 * @property {string} updated_by
 * @property {string} created_at
 * @property {string} created_by
 */
