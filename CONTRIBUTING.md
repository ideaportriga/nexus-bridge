# Contributing to Nexus Bridge

## Report a bug

Open an issue. 

## Request a new feature

Open an issue. 

## Pull Request Process

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Before submitting the Pull Request:
1. Ensure any install or build dependencies are removed before the end of the layer when doing a 
   build.
2. Update the README.md and Wiki with details of changes.
3. Increase the version numbers in the `package.json` file, any examples files and the README.md 
   to the new version that this Merge Request would represent. 
   The versioning scheme is [SemVer](http://semver.org/).

### Coding Rules

1. Try to use only the methods/properties documented in the Siebel Bookshelf.
2. Use the PM methods and properties whenever possible (e.g., when a property/method is available at the PM and applet level, use PM).
3. Avoid calling the proxy objects (BC, Applet) directly. 
4. Always lint the code `npm run lint`.
5. Comment the code.
