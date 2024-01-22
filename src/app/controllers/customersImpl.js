import { getAllCustomers } from "../repositories/customers/customers";

export const getCustomerList = async (req, res) => {
  await getAllCustomers().then((obj) => {
    res.json({
      success: true,
      data: obj,
    });
  }).catch(e => {
      console.error(e)
    res.json({
        success: false,
        data: `error on getBooksList`
    })
  })
};