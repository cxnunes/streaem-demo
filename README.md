# streaem-demo

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)

## About <a name = "about"></a>

Small demo for a fullstack app with the ability to select products from a catalog, edit properties and upload images.

## Getting Started <a name = "getting_started"></a>

Install all dependencies:

```
npm install
cd server && npm install
cd client && npm install
```

First initiate the docker container that is used as source for the catalog:

```
npm run start:products
```

Start both server and client:

```
npm run start
```

Client will run by default on http://localhost:3000/
