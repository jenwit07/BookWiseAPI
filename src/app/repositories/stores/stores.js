export function getAllStores(req) {
    let query = req.query
    let { cur_page, per_page, ...rest } = query;
    return new Promise(async (resolve, reject) => {
      await apiModels.stores
      .findAndCountAll({
        offset: req.offset,
        limit: req.limit,
        include: [
          {
            model: apiModels.address,
            required: true,
          },
        ],
        where: { active_flag: true ,...rest },
      })
        .then((obj) => {
          resolve(obj);
        })
        .catch((e) => {
          reject(e);
        });
    });
}

export function createStoreService({name, detail, address_id}) {
  console.log('%c⧭', 'color: #ff0000', {name, detail, address_id});
  if(!name || !address_id) throw new Error("missing required parameter name, detail or address_id")
  return new Promise(async (resolve, reject) => {

    let query = {
      address_id: address_id,
      stores_name: name,
      stores_details: detail
    }
    await apiModels.stores.create({
      ...query,
      raw: true,
    }).then((obj) => {
      resolve(obj);
    })
    .catch((e) => {
      reject(e);
    });
  });
}

export const putStoreService = (updatedStore) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = { ...updatedStore };

      console.log("###### updated stores : putStoreService ######");
      console.log(query);
      console.log({
        address_id: query.address_id,
        stores_name: query.name,
        stores_details: query.detail
      });

      await apiModels.stores
        .update(
          {
            address_id: query.address_id,
            stores_name: query.name,
            stores_details: query.detail
          },
          {
            where: {
              stores_id: query.stores_id
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

export const deleteStoreService = (deleteUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = { ...deleteUser };
      console.log("###### delete user ######");
      console.log(query);
      await apiModels.stores
        .update(
          { active_flag: false },
          {
            where: {
              stores_id: query.stores_id,
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
