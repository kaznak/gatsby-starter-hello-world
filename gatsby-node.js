"use strict"
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "esnext",
  },
})
const gastbyNode = require("./gatsby-node/index")
exports.createPages = gastbyNode.createPages
