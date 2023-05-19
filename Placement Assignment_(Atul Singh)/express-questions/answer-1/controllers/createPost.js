const POST = require("../models/model");

exports.createPost = (req, res) => {
  try {
    POST.create();
  } catch (error) {}
};
