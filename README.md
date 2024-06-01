# eslint-plugin-phecda-server

rules work for phecda-server

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-phecda-server`:

```sh
npm install eslint-plugin-phecda-server --save-dev
```

## Usage

Add `phecda-server` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "phecda-server"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "phecda-server/rule-name": 2
    }
}
```



## Configurations

<!-- begin auto-generated configs list -->
TODO: Run eslint-doc-generator to generate the configs list (or delete this section if no configs are offered).
<!-- end auto-generated configs list -->



## Rules

<!-- begin auto-generated rules list -->

| Name                                                                                   | Description                                                                |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- |
| [ctx-must-be-called-first-in-method](docs/rules/ctx-must-be-called-first-in-method.md) | Require calling @Ctx decorated property as the first statement in a method |
| [one-module-export](docs/rules/one-module-export.md)                                   | Enforce that moduleFile have exactly one decorated class export            |

<!-- end auto-generated rules list -->


