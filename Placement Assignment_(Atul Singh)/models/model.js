exports.moduleSchema = {
  post: { type: String, required: true },
};
module.exports = model.create("POST", postSchema);
