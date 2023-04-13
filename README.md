# Monte

Фронтенд для проекта **Montetuning**.

## Технические особенности

Сделан с использованием фреймворка [Gatsbyjs](https://www.gatsbyjs.org/) на базе шаблона [gatsby-starter-default](https://github.com/gatsbyjs/gatsby-starter-default).

Проект имеет возможность отображатся на разных языках, для этого использован [react-intl](https://formatjs.io/docs/react-intl/) и плагин [gatsby-plugin-i18n](https://github.com/angeloocana/gatsby-plugin-i18n#readme).

Так же использована библиотека UI компонентов [Antd](https://ant.design/components/overview/).

> 💡 При создании новых компонентов, пожалуйста учитывайте, что вероятно аналогоичный компонент можно взять из этого UI и подогнать под дизайн проекта.

## 🚀 Команды для работы с проектом

#### Установка зависимостей

```bash
npm i
```

#### Запуск в режиме разработки

```bash
npm run start
```

Локальный сайт будет запущен на http://localhost:8000
Интерфейс для работы с запросами данных http://localhost:8000/___graphql

#### Разработка компонентов

```bash
npm run start:storybook
```

Локальный сайт будет запущен на http://localhost:6006

#### Сборка

```bash
npm run build
```

#### Сборка UI компонентов

```bash
npm run build:storybook
```

#### Удаление скомпилированных результатов

```bash
npm run clean
```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


Разделить компоненты нормально.
Очень много связанных импортов, если отключать какой-нибудь один компонент, то рушится часть какого-нибудь функционала