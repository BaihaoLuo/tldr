module.exports = {

  attributes: {

    title: {
      type: "string",
      required: true
    },

    user: {
      model: "user",
      required: true
    },

    image: {
      type: "binary",
      required: false
    },

    content: {
      type: "string",
      required: true
    },

    blogSources: {
      collection: "blogsource",
      via: "blog"
    },

    createdAt: {
      type: "date"
    },

    updatedAt: {
      type: "date"
    }

  }

};
