# CLI Unbuild Template

This is a CLI application project template with TypeScript as the main development language and [unbuild](https://github.com/unjs/unbuild) as the packaging and building tool. It allows you to quickly set up a CLI application project without the need for `watch` and `build`. You do not need to use any other build tools to monitor the `ts` code construction.

## Using Templates

### Create Template Locally

```sh
# pnpm
pnpm create ts-frame my-cli-app --template cli-unbuild
```

## Install dependencies.

```sh
cd my-cli-project
pnpm i
```

### Development

By default, when you run `npm run dev`, [unbuild](https://github.com/unjs/unbuild) will be used to stub the `dist` folder. You can learn about this mode at [jiti](https://github.com/unjs/jiti). Even if you modify the code, there is no need to execute the `dev` command again or use other build tools' `watch` mode to recompile the `ts` code. When you need to modify the configuration of `unbuild`, you can do other configurations for it in the file named `build.config.ts`.

- Development Mode

```sh
pnpm dev
```

- Build Production Environment Code

```sh
pnpm build
```

- Output Build Artifacts with Sourcemap to Out Folder

```sh
pnpm build:out
```

- Type Check.

```sh
pnpm typecheck
```

### Global Link Package:

You can also create a global link for this package so that it's easier for you test or debug code using real environment:

```sh
npm link
```

Afterwards, you can execute command "hello-cli" at any path under all terminals of your operating system which corresponds with value of option "bin" in file "package.json" under this project.

When you no longer need this global link anymore, manually remove it by executing below command under project directory:

```sh
npm unlink -g
```

### Dependency Description

When your third-party library is installed as DevDependencies during development , these dependencies will be packaged into production environment codes after executing ' npm run build '. If program works abnormally after installing via such way and building completed afterwards , try installing them as production environment dependencies(Dependencies). They won't be packaged into production environment codes when installed as production environment dependencies.
