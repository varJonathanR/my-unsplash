<h1 align="center">MyUnsplash 📷</h1>

<div align="center">
  Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://my-unsplash-varjonathanr.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/solutions/iFoeYshwlQPu5uDvz4ql">
      Solution
    </a>
    <span> | </span>
    <a href="https://legacy.devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

## Overview

![MyUnsplash Preview](https://github.com/varJonathanR/my-unsplash/blob/main/my-unsplash_preview.png)

> [View this repo as if in a code editor](https://github.dev/varJonathanR/my-unsplash)

This fullstack project is a simplified clone of [Unsplash](https://unsplash.com/), a platform for sharing high-quality images. It allows registered users to save images using the direct image link from unsplash. The application features a clean and user-friendly design. It utilizes technologies like [Astro](https://astro.build/) for the frontend, [Node.js](https://nodejs.org/en) and [Express](https://expressjs.com/) for the backend, and a [MySQL](https://www.mysql.com/) database (locally) or [Turso](https://turso.tech/) (in production) to store information about images and users.

> [!TIP]
> Right click on Unsplash image and click on "Copy Image Address" <br>
> Valid link example: https://images.unsplash.com/photo-(...) <br>

> [!NOTE]
> While the backend functions correctly, there is an issue with Vercel in production where cookies are not saved when redirecting to '/' (this does not happen in the local environment, even using the production API).

### Built With

#### FrontEnd

- [Astro](https://astro.build/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Nanostores](https://github.com/nanostores/nanostores)
- [Axios](https://axios-http.com/)

#### BackEnd

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL: LocalDB](https://www.mysql.com/)
- [Turso: ProductionDB](https://turso.tech/)

## Features

This application/site was created as a submission to a [DevChallenges](https://legacy.devchallenges.io/challenges) challenge. The [challenge](https://legacy.devchallenges.io/challenges/rYyhwJAxMfES5jNQ9YsP) was to build an application to complete the given user stories.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/varJonathanR/my-unsplash

# Open each folder
$ cd BackEnd
$ cd FrontEnd

# Install dependencies (each folder)
$ npm install

# Run the app (each folder)
$ npm run dev
```

## Contact

- GitHub [@varJonathanR](https://github.com/varJonathanR)
- LinkedIn [@jonathanrodriguez04](https://www.linkedin.com/in/jonathanrodriguez04)
