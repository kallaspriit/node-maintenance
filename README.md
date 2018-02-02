# Node maintenance
**Simple express server to show a "under maintenance" page for every request.**

* Supports https.
* Configured with [node-config](https://github.com/lorenwest/node-config).
* Includes 100% test coverage.
* Built with Typescript.
* Uses [tslint](https://github.com/palantir/tslint) and [prettier](https://github.com/prettier/prettier).

## Developer setup

* Clone the repository.
* Create `config/local.json` file containing only the settings that are different from `config/default.json`.
* Run `yarn install` to install the dependencies.
* Run `yarn start` to start the development server.
* Open `http://localhost/api` to view the api index.

## Production setup

* Clone the repository.
* Create `config/production.json` file containing only the settings that are different from `config/default.json`.
* Run `yarn install` to install the dependencies.
* Run `yarn build` to build the production server.
* Run `yarn production` to start the production server.
* Alternatively use [pm2](https://github.com/Unitech/pm2) to manage the production.
  * `sudo yarn global add pm2@latest` to install pm2.
  * `pm2 startup` to get the command to setup pm2 startup, run the command.
  * `pm2 start "/usr/bin/yarn" --name "maintenance" -- production` to start the server.
  * `pm2 save` to save the configuration.

## Commands

* `yarn install` the first time to install dependencies (or use `npm install` etc).
* `yarn start` to start the development server with automatic build and reload.
* `yarn build` to manually build the application.
* `yarn production` to start the production server (rn `yarn build` first).
* `yarn deploy` to pull latest version, install dependencies, build the application and restart the server.
* `yarn prettier` to automatically format your code (done automatically before commit).
* `yarn lint` to lint your codebase.
* `yarn lint-fix` to lint your codebase and automatically fix issues.
* `yarn test` to run the unit tests once.
* `yarn test-watch` to continuously run the unit tests on every change.
* `yarn coverage` to gather tests file coverage.
* `yarn prettier` to run the automatic prettier formatter (changes files to conform to the rules).
* `yarn tidy` to remove all generated files.