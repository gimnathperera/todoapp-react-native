# TODO app | React Native

This is a React Native application with TypeScript. The application is organized into several directories, each serving a specific purpose.

## Directory Structure

- `src/components`: This directory contains all the reusable components like Button, InputDropdown, InputTextfield, Loader, and TodoBoard.
- `src/config`: This directory contains the environment configuration for the application.
- `src/constants`: This directory contains the application-wide constants.
- `src/hocs`: This directory contains higher-order components. For example, [`WithStore`](src/hocs/WithStore.ts) is a HOC that provides Redux store to the components.
- `src/routes`: This directory contains the application's routing logic.
- `src/screens`: This directory contains the different screens of the application.
- `src/store`: This directory contains the Redux store of the application.
- `src/types`: This directory contains the TypeScript type definitions.
- `src/utils`: This directory contains utility functions.

## Getting Started

To get a local copy up and running, follow these steps:

1. Clone the repository.
2. Install the dependencies with `yarn install`.
3. Start the development server with `yarn start`.

## Running the tests

To run the tests, use the command `yarn test`.

## Built With

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
