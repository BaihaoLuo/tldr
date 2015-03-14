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
      required: false,
      unique: true
    },
    link: {
      type: "string",
      required: true
    },
    author: {
      type: "string",
      required: false
    },
    uploaded_time: {
      type: "date",
      required: false
    },
    updated_time: {
      type: "date",
      required: false
    }
  }

};
