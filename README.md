# Census Questions
Use generative AI to answer questions about the United States with data from the [U.S. Census Bureau](https://www.census.gov/).

## Quick Start

1. Clone this repository and then run `nvm use` from the root folder to switch to the correct node version. 
2. Run `yarn` to install dependencies and `yarn start` to launch a local server.
3. Open the server address (usually `http://localhost:5173/`) in your browser of choice and enjoy the application!

## Requirements 

- [Node.js](https://nodejs.org/en/download/package-manager) (v20.16.0)
- [Yarn](https://classic.yarnpkg.com/en/) (v1.22.22)

## Installation

This project requires [Node.js v20.16.0](https://nodejs.org/en/download/package-manager). In additon, [nvm](https://github.com/nvm-sh/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)) is highly recommended for managing node versions.

First, navigate to the root directory of this repository in your terminal and run `nvm install` (or `nvm use` if you already have the correct version) to switch your shell to the correct version of Node.js.

Then, run `npm install -g yarn` to get the [Yarn](https://classic.yarnpkg.com/en/) package manager.

Next, running `yarn start` launches a local development server (at `http://localhost:5173/` by default) using the [Vite](https://vitejs.dev/) build tool.

Open the development server's address in you browser of choice, and you are ready to start playing with the tool!

## Usage

Use the web interface to query our backend API and fetch subsets of U.S. Census data. Take a look at the data preview to make sure the correct data was fetched, and then use the download button at the bottom of the page to get a JSON file for further data exploration.

As an example, the prompt "What's the population of the U.S.?" returns JSON that looks like this:

```json
[
    {
        "NAME": "United States",
        "GEO_ID": "0100000US",
        "DESCRIPTION": "Total Population",
        "CATEGORIES": [
            {
                "ID": "B01003_001E",
                "LABEL": "Estimate!!Total",
                "VALUE": "333287562"
            }
        ]
    }
]
```
Happy census data hunting! 🌎
