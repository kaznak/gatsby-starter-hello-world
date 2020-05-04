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
