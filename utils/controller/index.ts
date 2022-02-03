const controller = (callback) => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    console.log(error);

    res.json(error);
  }
};

export default controller;
