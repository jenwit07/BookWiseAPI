import { getAllAuthors } from "../repositories/authors/author";

export const getAuthorList = async (req, res) => {
  await getAllAuthors().then((obj) => {
    res.json({
      success: true,
      data: obj,
    });
  }).catch(e => {
      console.error(e)
    res.json({
        success: false,
        data: `error on getAuthorList`
    })
  })
};