<h1>Claudia Eck - Coaching - Website</h1>  
<br>

![Build][build]
![Code-Style][code-style]
![Maintenance][maintained-shield]
<br><br>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#used">Used</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="setup">Setup</a></li>
    <li><a href="#requirements">Requirements</a></li>    
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

The website was created as a business card. The goal was to give the user a "wow" moment. However, the attention should still be largely on the content. The design was created by [Johannes Zimmer](https://johannes-portfolio-9bd3ff97ac7e5035ea33.webflow.io/).

## Used

- [![][logo-nuxt]](https://nuxtjs.org/)
- [![][logo-vuetify]](https://vuetifyjs.com/)
- [![][logo-express]](https://expressjs.com/de/)
- [![][logo-nodemailer]](https://nodemailer.com/about/)
- [![][logo-heroku]](https://www.heroku.com/)

## Contact

[![][link-name]](https://github.com/H3nSte1n) [![][link-email]](mailto:hello@steinhauer.dev) [![][link-twitter]](https://twitter.com/H3nSte1n) [![][link-medium]](https://henrysteinhauer.medium.com/)

## Setup

### Commands

> install dependencies

```sh
   npm install
```

> run with hot reload on localhost:3000

```sh
   npm run dev
```

> build for production

```sh
   npm run build
```

### ENV

- Removing the dist wording from the **_.env.dist_** filename\
  **_.env.dist -> .env_**

- set following env variables
  - BASE_URL=http://localhost:3000
  - PW=email account pw - nodemailer
  - EMAIL=email account email-address - nodemailer
  - RECAPTCHA_KEY=repatcha key for prod
  - RECAPTCHA_KEY_LOCAL=repatcha key for dev
  - BASE_URL_STRAPI=strapi server url
  - AUTH_USERNAME=auth server username
  - AUTH_PASSWORD=auth server password

## Requirements

- Node > v10.0.0
- Headless CMS

## Acknowledgements

- [Img Shields](https://shields.io)
- [README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)

<!--shield-styles-->

[style-plastic]: https://img.shields.io/badge/plastic-83A603.svg?style=plastic
[style-flat]: https://img.shields.io/badge/flat-83A603.svg?style=flat
[style-flat-square]: https://img.shields.io/badge/flat_square-83A603.svg?style=flat-square
[style-for-the-badge]: https://img.shields.io/badge/for_the_badge-83A603.svg?style=for-the-badge
[style-social]: https://img.shields.io/badge/social-83A603.svg?style=social
[logo-blue]: https://img.shields.io/badge/blue-83A603.svg?logo=github&logoColor=blue
[logo-green]: https://img.shields.io/badge/green-83A603.svg?logo=kotlin&logoColor=green
[logo-black]: https://img.shields.io/badge/black-83A603.svg?logo=medium&logoColor=black
[color-blue]: https://img.shields.io/badge/blue-83A603.svg?color=blue
[color-green]: https://img.shields.io/badge/green-83A603.svg?green=green
[color-black]: https://img.shields.io/badge/black-83A603.svg?color=black
[link-name]: https://img.shields.io/badge/Henry_Steinhauer-469C90.svg?link=https://github.com/
[link-email]: https://img.shields.io/badge/Mail-informational?style=flat&logo=Minutemailer&logoColor=white&color=469C90
[link-twitter]: https://img.shields.io/badge/Twitter-informational?style=flat&logo=Twitter&logoColor=white&color=469C90
[link-github]: https://img.shields.io/badge/Github-informational?style=flat&logo=GitHub&logoColor=white&color=469C90
[link-medium]: https://img.shields.io/badge/Medium-informational?style=flat&logo=Medium&logoColor=white&color=469C90
[logo-nuxt]: https://img.shields.io/badge/Nuxt-informational?style=flat&logo=nuxt.js&logoColor=white&color=469C90
[logo-vuetify]: https://img.shields.io/badge/Vuetify-informational?style=flat&logo=vuetify&logoColor=white&color=469C90
[logo-express]: https://img.shields.io/badge/Express-informational?style=flat&logoColor=white&color=469C90
[logo-nodemailer]: https://img.shields.io/badge/Nodemailer-informational?style=flat&logoColor=white&color=469C90
[logo-heroku]: https://img.shields.io/badge/Heroku-informational?style=flat&logo=heroku&logoColor=white&color=469C90

<!--infos-->

[build]: https://github.com/H3nSte1n/c-business-website/workflows/Build/badge.svg?style=flat
[code-style]: https://github.com/H3nSte1n/c-business-website/workflows/Code-Style/badge.svg?style=flat
[maintained-shield]: https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat
[release-shield]: https://img.shields.io/github/release/H3nSte1n/coverage-badge-creator.svg?style=flat
[release-url]: https://GitHub.com/H3nSte1n/coverage-badge-creator/releases/
[issues-shield]: https://img.shields.io/github/issues/H3nSte1n/coverage-badge-creator.svg?style=flat
[issues-url]: https://github.com/H3nSte1n/coverage-badge-creator/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat
[license-url]: https://github.com/H3nSte1n/coverage-badge-creator/blob/master/LICENSE
