import { createStoreService, deleteStoreService, getAllStores, putStoreService } from "../repositories/stores/stores";

export const getStoreList = async (req, res) => {
  await getAllStores(req).then((obj) => {
    res.json({
      success: true,
      cur_page: req.cur_page ? req.cur_page : 1,
      per_page: req.per_page ? req.per_page : null,
      page_items: obj.count,
      page_all: Math.ceil(obj.count / req.per_page),
      data: obj.rows,
    });
  }).catch(e => {
      console.error(e)
    res.json({
        success: false,
        data: `error on getStoreList`
    })
  })
};

export const createStore = async (req, res) => {
  try {
      console.log("#############")
      console.log(req.joi)
      let result = await createStoreService(req.joi);
      res.status(201).send(result);
  } catch (err) {
      console.error(err);
      res.status(400).send({ name: err.name, message: err.message });
  }
};

export const putStoreRequest = async (req, res) => {
  try {
    let response = await putStoreService(req.joi);
    if (response[0] == 0) {
      return res.status(409).send({ message: "record was not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: err });
  }
};


export const deleteStoreRequest = async (req, res) => {
  try {
    let response = await deleteStoreService(req.joi);
    if (response[0] == 0) {
      return res.status(409).send({ message: "record was not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(400).send({ message: err });
  }
};
