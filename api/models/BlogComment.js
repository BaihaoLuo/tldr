module.exports = {

  attributes: {
    content: {
      type: "string",
      required: true
    },
    blog: {
      model: "blog",
      required: true
    },
    user: {
      model:"user",
      required: true
    },
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
