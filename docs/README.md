# Setup: generate graphql type definition before build

To write gatsby-node.js in TypeScript, it require GraphQL type definition.
The code generator works in the Gatsby's onPostBootstrap phase which is after the createPage phase
(refer: [Feature request: gatsby-node codegen](https://github.com/d4rekanguok/gatsby-typescript/issues/29)).
Therefore, the createPage phase fails because of lack of the GraphQL type definition.
This problem is now under fixing. To avoid this problem temporary, run the following code:

```bash
mv gatsby-node.js{,.back}
pnpm run build
mv gatsby-node.js{.back,}
```

# Update engines information

```bash
pushd ~/.anyenv/envs/nodenv/plugins/node-build
git pull
popd
# install nice version of nodejs
```

```bash
npm i -g npm
npm i -g pnpm
pnpm i -g yarn

cat <<EOF
  "engines": {
    "node": "^$(node --version|sed -e 's/^v//')",
    "pnpm": "^$(pnpm --version)",
    "yarn": "^$(yarn --version)",
    "npm": "^$(npm --version)"
  },
EOF
```

# Update lock file and test

```bash
set -evx

pnpm update || yarn upgrade || npm update

rm -rf package-lock.json node_modules
npm install
npm run build

rm -rf yarn.lock node_modules
yarn install
yarn build

rm -rf pnpm-lock.yaml node_modules
pnpm install
pnpm run build

set +evx
```

# Memo

- Supress warning of tsconfign.json in proglems panel of vscode
- [Workspece](https://pnpm.js.org/en/workspaces)
- [Is it possible to write the gatsby config in TypeScript?](https://github.com/gatsbyjs/gatsby/issues/1457)
- [graphql-codegen で型定義を生成する (React, Apollo, TypeScript)](https://qiita.com/mizchi/items/fb9f598cea94d2c8072d)
