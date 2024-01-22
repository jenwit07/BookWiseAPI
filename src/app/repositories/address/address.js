export const createAddressService = ({
    gps,
    zipCode,
    addressLine1,
    addressLine2,
    university
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            // # normalize locale obj
            let query = {
                zipcode: zipCode,
                addressLine1,
                addressLine2,
                university
            };

            if(gps?.lat && gps?.lng) {
                query.lat_long = `(${gps?.lat},${gps?.lng})`
            }
            console.log('%c⧭', 'color: #00e600', query);

            let results = await apiModels.address.create(query);

            console.log("### created new address ###");
            console.log(results.get({ raw: true }));

            resolve(results.get({ raw: true }));
        } catch (error) {
            reject(error);
        }
    });
};

export const putAddressService = ({
    address_id,
    gps,
    zipCode,
    addressLine1,
    addressLine2,
    university
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("###### updated address : putStoreService ######");
            console.log(query);
            console.log({
                gps,
                zipCode,
                addressLine1,
                addressLine2,
                university
            });
            // # normalize locale obj
            let query = {
                zipcode: zipCode,
                addressLine1,
                addressLine2,
                university
            };

            if(gps?.lat && gps?.lng) {
                query.lat_long = `(${gps?.lat},${gps?.lng})`
            }
            console.log('%c⧭', 'color: #00e600', query);
        
            await apiModels.address
                .update(
                    {
                        ...query
                    },
                    {
                        where: {
                            address_id: address_id
                        },
                    }
                )
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                console.error(err);
                reject(err);
            });
    } catch (err) {
        throw err;
    }
    });
};

export const deleteAddressService = ({address_id}) => {
    return new Promise(async (resolve, reject) => {
        try {
            await apiModels.address
                .update(
                    { active_flag: false },
                    {
                        where: {
                            address_id: address_id,
                        },
                    }
                )
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                console.error(err);
                reject(err);
            });
        } catch (err) {
            throw err;
        }
    });
};
