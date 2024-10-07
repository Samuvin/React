#React Basics
Production ready(Processing before push to produ)ction
Minify
Optimise Image
Chuncking
Compress code(everything done in development phase)

Node
Node package manager
npm manages the the nodes packages
npm does not have a full form
npm manages packages but does not stands for node package manager
npm is a standard repository for all the packages its the biggest package manager

npm init -y (skip soemthing)
use npm init

Package.json
Configuration for npm
packages also known as dependencies
our project depends on many packages
npm manages that
npm manages what is the version of that packages
they take care it in package json

Important package
Bundler(When we have normal html css js file our whole code has to be compresseds before it send to production bundler helps for this)

webpack,vite,parcel

Bundler bundles our app so it helps to shipped to production

Create react app behind uses webpack bundler and babel to build things

Create react app uses webpack bundler and babel
All bundlers are same But the algorithms can be different

parcel

There are two types of dependencies
for Development (dev dependencies) - used in our development phase
for Production (normal dependencies used for production)

npm install -D parcel
node package manager
^ carat and ~ tilde used to manage the versions
^ If a new update comes to the version that is minor version it will automatically updates its version for minor updates

~ It will install the major version automatically

Safe to put carot
Majaor updates can break the project ^ for safer side

Package Json (Keeps track of what version of that package is installed if ^ install any minor upgrae ~ install major version)
Package lockJson(Keeps Tracks of Exact version)
It locks the verion and keep the exact version of the installed dependencies

Integrity in Package lock
Sometime projects work in development and breaks in production this integrity verifiy whatever dependencies in my machine is the same version deployed to the production It keeps track of all the exact versions

Node Modules
Contains All the codes we fetched from npm
It will fetch all the modules for the dependencies

Package.json is a configuration for our project
Node Modules is like a database which contains the actual data
