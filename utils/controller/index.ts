const controller = (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    console.log(error);

    res.status(error.code).send(error);
  }
};

export default controller;
