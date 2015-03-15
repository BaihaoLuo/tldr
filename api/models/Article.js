/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: "string",
      required: false
    },
    link: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: false
    },
    createdAt: {
      type: "date",
      required: false
    },
    updatedAt: {
      type: "date",
      required: false
    },
    descriptions: {
      collection: "description",
      via: "article"
    },

    image: {
      type: "string",
      required: false
    },

    text: {
      type: "text",
      required: true
    }
  }

};
