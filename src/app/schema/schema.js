const Joi = require("joi");

module.exports = {
    createAddress: {
        schema: Joi.object({
            gps: Joi.object().keys({
                lat: Joi.number(),
                lng: Joi.number()
            }).and('lat', 'lng'),
            zipCode: Joi.string(),
            addressLine1: Joi.string().required(),
            addressLine2: Joi.string().optional().allow(''),
            university: Joi.string(),
        }),
    },
    createStore: {
        schema: Joi.object({
            name: Joi.string().required(),
            detail: Joi.string().optional().allow(''),
            address_id: Joi.number().required(),
        }),
    },
    putStore: {
        schema: Joi.object({
            stores_id: Joi.any().required(),
            name: Joi.string().required(),
            detail: Joi.string().optional().allow(''),
            address_id: Joi.number().optional().allow(''),
        }),
    },
    deleteStore: {
        schema: Joi.object({
            stores_id: Joi.any().required(),
        }),
    },
    putAddress: {
        schema: Joi.object({
            address_id: Joi.number().required(),
            gps: Joi.object().keys({
                lat: Joi.number(),
                lng: Joi.number()
            }).and('lat', 'lng'),
            zipCode: Joi.string(),
            addressLine1: Joi.string().required(),
            addressLine2: Joi.any().optional().allow(''),
            university: Joi.any().optional().allow('')
        }),
    },
    deleteAddress: {
        schema: Joi.object({
            address_id: Joi.string().required(),
        }),
    },
};
