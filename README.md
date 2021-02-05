<h1>Claudia Eck - Coaching - Website</h1>  
<br>

![CI][ci]
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
The website was created as a kind of business card. The goal was to give the user a "wow" moment. Nevertheless, the attention should largely be on the content. The design was created by Johannes Zimmer.

## Used
This section lists all used programming languages, frameworks and third-party-libraries.
* [Nuxt](https://nuxtjs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Nodemailer](https://nodemailer.com/about/)
* [Heroku](https://www.heroku.com/)

## Contact
![Henry Steinhauer][link-name] ![E-Mail][link-email] ![Twitter][link-medium] ![Twitter][link-twitter] ![Twitter][link-reddit] ![Github][link-github]

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
- Removing the dist wording from the .env(.test).dist filename\
  ***.env(.test).dist -> .env(.test)***


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
* Node > v10.0.0
* Headless CMS

## Acknowledgements
* [Img Shields](https://shields.io)
* [README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)





<!--shield-styles-->
[style-plastic]: https://img.shields.io/badge/plastic-83A603.svg?style=plastic
[style-flat]: https://img.shields.io/badge/flat-83A603.svg?style=flat
[style-flat-square]: https://img.shields.io/badge/flat_square-83A603.svg?style=flat-square
[style-for-the-badge]: https://img.shields.io/badge/for_the_badge-83A603.svg?style=for-the-badge
[style-social]: https://img.shields.io/badge/social-83A603.svg?style=social

[logo-github]: https://img.shields.io/badge/logo-github.svg?logo=github
[logo-kotlin]: https://img.shields.io/badge/logo-kotlin.svg?logo=kotlin
[logo-medium]: https://img.shields.io/badge/logo-medium.svg?logo=medium

[logo-blue]: https://img.shields.io/badge/blue-83A603.svg?logo=github&logoColor=blue
[logo-green]: https://img.shields.io/badge/green-83A603.svg?logo=kotlin&logoColor=green
[logo-black]: https://img.shields.io/badge/black-83A603.svg?logo=medium&logoColor=black

[color-blue]: https://img.shields.io/badge/blue-83A603.svg?color=blue
[color-green]: https://img.shields.io/badge/green-83A603.svg?green=green
[color-black]: https://img.shields.io/badge/black-83A603.svg?color=black

[link-name]: https://img.shields.io/badge/Henry_Steinhauer-469C90.svg?link=https://github.com/H3nSte1n
[link-email]: https://img.shields.io/badge/Mail-469C90.svg?link=https://github.com/
[link-twitter]: https://img.shields.io/badge/Twitter-469C90.svg?link=https://github.com/
[link-github]: https://img.shields.io/badge/Github-469C90.svg?link=https://github.com/
[link-medium]: https://img.shields.io/badge/Medium-469C90.svg?link=https://medium.com/
[link-reddit]: https://img.shields.io/badge/Reddit-469C90.svg?link=https://www.reddit.com/

<!--infos-->
[ci]: https://github.com/H3nSte1n/coverage-badge-creator/workflows/CI/badge.svg?style=flat
[build]: https://github.com/H3nSte1n/coverage-badge-creator/workflows/Build/badge.svg?style=flat
[code-style]: https://github.com/H3nSte1n/coverage-badge-creator/workflows/Code-Style/badge.svg?style=flat
[maintained-shield]: https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat
[release-shield]: https://img.shields.io/github/release/H3nSte1n/coverage-badge-creator.svg?style=flat
[release-url]: https://GitHub.com/H3nSte1n/coverage-badge-creator/releases/
[issues-shield]: https://img.shields.io/github/issues/H3nSte1n/coverage-badge-creator.svg?style=flat
[issues-url]: https://github.com/H3nSte1n/coverage-badge-creator/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat
[license-url]: https://github.com/H3nSte1n/coverage-badge-creator/blob/master/LICENSE
