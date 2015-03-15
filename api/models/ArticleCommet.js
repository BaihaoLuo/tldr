module.exports = {

  attributes: {
    content: {
      type: "string",
      required: true
    },
    article: {
      model: "article",
      required: true
    },
    user: {
      model:"user",
      required: true
    }
    updatedAt: {
      type: "date",
      required: false
    },
    createdAt: {
      type: "date",
      required: false
    }
  }

};
