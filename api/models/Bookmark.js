
module.exports = {

  attributes: {
    user: {
      type: "string",
      required: true,
      unique: true
    },
    article: {
      type: "string",
      required: true
    },
  }

};
