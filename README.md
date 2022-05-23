<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<div align="center">

<h3 align="center">E-Commerce Backend</h3>

  <p align="center">
    an e-commerce backend api
    <br />
    <a href="https://github.com/nearcatch/nu-u13h-ecommerce-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/nearcatch/nu-u13h-ecommerce-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/nearcatch/nu-u13h-ecommerce-backend/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the Project

This repository creates an API for accessing product info, categories, and tags via an Express.js server.

### Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
  * [Express.js](https://expressjs.com/)
  * [dotenv](https://github.com/motdotla/dotenv#readme)
  * [Sequelize](https://sequelize.org/)
  * [Node MySQL 2](https://github.com/sidorares/node-mysql2#readme)
* [MySQL](https://www.mysql.com/)
* [Insomnia](https://insomnia.rest/products/insomnia)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). (Only if cloning via command line.)
2. Install [Node.js](https://nodejs.org/en/download/current/).
2. Install [MySQL](https://dev.mysql.com/downloads/installer/). (Or use an alternate SQL server.)
3. Install [Insomnia](https://insomnia.rest/download). (Or use an alternate API client.)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nearcatch/nu-u13h-ecommerce-backend.git
   ```
   Alternatively, download and open the ZIP archive directly from GitHub.

2. Install required Node.js packages from the repo folder.
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Rename the `.env.EXAMPLE` file to `.env` and add your sql server credentials.
2. Run the commands in `schema.sql` using MySQL or a preferred alternative to create the ecommerce_db database.
3. Run `npm run seed` from the root of the code repository to seed the ecommerce_db with test data.
4. Run `npm run start` from the root of the code repository to start the API.

<video src="https://user-images.githubusercontent.com/692914/167065350-9dca4b8d-4582-4cad-86de-264374674da8.mp4" style="width:100%"></video>

5. Use Insomnia or a preferred alternative to send requests to the API and interact with the database.

<video src="https://user-images.githubusercontent.com/692914/167067954-0a8acdbc-40b4-42b3-95d0-b6953c94691c.mp4" style="width:100%"></video>

6. Run `npm run seed` again to reseed the ecommerce_db with fresh test data if necessary.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jason Thekkekara - [LinkedIn][linkedin-url] - [Github](https://github.com/nearcatch)

Project Link: [https://github.com/nearcatch/nu-u13h-ecommerce-backend](https://github.com/nearcatch/nu-u13h-ecommerce-backend)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nearcatch/nu-u13h-ecommerce-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/nearcatch/nu-u13h-ecommerce-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nearcatch/nu-u13h-ecommerce-backend.svg?style=for-the-badge
[forks-url]: https://github.com/nearcatch/nu-u13h-ecommerce-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/nearcatch/nu-u13h-ecommerce-backend.svg?style=for-the-badge
[stars-url]: https://github.com/nearcatch/nu-u13h-ecommerce-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/nearcatch/nu-u13h-ecommerce-backend.svg?style=for-the-badge
[issues-url]: https://github.com/nearcatch/nu-u13h-ecommerce-backend/issues
[license-shield]: https://img.shields.io/github/license/nearcatch/nu-u13h-ecommerce-backend.svg?style=for-the-badge
[license-url]: https://github.com/nearcatch/nu-u13h-ecommerce-backend/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jason-thekkekara
[product-screenshot]: https://raw.githubusercontent.com/nearcatch/nu-u13h-ecommerce-backend/main/assets/readme/full-page-screenshot.webp
