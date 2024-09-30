This is all assuming you're in a unix-like environment.
# Requirements
- dot ( `brew install graphviz
  ` if you have brew, if u dont...idk)
- corepack
See if you have corepack installed.

```shell
which corepack
```

It should be installed by default. If you dont see it, install it

```shell
npm i -g corepack@latest
```

You must enable it:
```shell
corepack enable
```

# Installation
```shell
pnpm i
```

# Build
```shell
pnpm run build
```
