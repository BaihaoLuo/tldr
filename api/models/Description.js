/**
* Description.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

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
    title: {
      type: "string",
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
