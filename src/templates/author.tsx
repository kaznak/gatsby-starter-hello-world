import * as React from "react"
import { Link } from "gatsby"
import { SiteSiteMetadataAuthors } from "../../types/graphql-types"
// ______________________________________________________
//

export type Args = {
  author: SiteSiteMetadataAuthors
}

// ______________________________________________________
//
const Component: React.FC<{ pageContext: Args }> = ({ pageContext }) => (
  <div>
    <h1>{pageContext.author.name}</h1>
    <Link to="/">Back to top</Link>
  </div>
)
// ______________________________________________________
//
export default Component
