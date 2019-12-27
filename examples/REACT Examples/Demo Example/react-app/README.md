# Nexus React App

## Configuration

Webpack config (`webpack.config.js`) ejected from [CRA][1] and modified for using the watch mode during development.

To symlink the development build with the local Siebel client:

```bash
cd C:\Projects\n19helper\examples\REACT Examples\Demo Example\workspace\build\static
mklink /J C:\Oracle\Siebel\16.0.0.0.0\Client\public\SCRIPTS\siebel\custom\react-app\build\static\js .\js
```

## Development

To run app in development mode:

```bash
yarn
yarn start
```

## Deployment

To create a production build:

```bash
yarn
yarn build
```

## References

- [Create React App][1]

[1]: (https://github.com/facebook/create-react-app)
