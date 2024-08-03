// In these files we put the logic of req, res in the api routes

export const test = (req, res) => {
  res.json({
    message: "API route is working",
  });
};

export const updateUser = (req, res, next) => {
  const { id, name, email } = req.body;
}