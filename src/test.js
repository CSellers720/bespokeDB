"use strict";

module.exports.ping = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "pong",
        input: event,
      },
      null,
      2
    ),
  };
};
