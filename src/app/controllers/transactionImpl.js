import { getAllTransaction } from "../repositories/transaction/transaction";

export const getAllTransactionList = async (req, res) => {
  await getAllTransaction().then((obj) => {
    res.json({
      success: true,
      data: obj,
    });
  }).catch(e => {
      console.error(e)
    res.json({
        success: false,
        data: `error on getAllTransactionList`
    })
  })
};