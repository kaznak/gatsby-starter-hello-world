import { GatsbyNode } from "gatsby"

import * as author from "./author"

export const createPages: GatsbyNode["createPages"] = async (args, options) => {
  author.createPagesAuthor!(args, options)
}
