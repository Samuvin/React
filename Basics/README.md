Github default branch is main

Git add . add all the file
Git commit -m "Give the message"
Git and Github are different
Github is a client a place where we host git repositories
To set up our local to the remote give the remote link
Git push origin main

#React Basics
The code that we write in html css its not ready to push to production
Issue:The code is not optimised
We dont want to put the comments in the production code

Production ready(Processing before push to production)

Ignite our app
Cached
Cleaned
Bundling
Code spliting
Minify
Optimise Image
Chuncking
Compress code(everything done in development phase)

Create react app already ignited
They has parcel babel
Create React App will be give us Production Ready Template

React is not only that make our app fast scalabale and production Ready

React is making our make fast but only to some extend

Node
Node package manager
npm manages the nodes packages
npm does not have a full form
npm manages packages but does not stands for node package manager
npm is a standard repository for all the packages its the biggest package manager
Npm Has more packages imported in its server
Any package we need to include in our project we can include through npm
npm will manage that app in our project

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

-D dev dependencies

There are two types of dependencies
for Development (dev dependencies) - used in our development phase
for Production (normal dependencies used for production)

npm install -D parcel
node package manager
^ carat and ~ tilde used to manage the versions
^ If a new update comes to the version that is minor version it will automatically updates its version for minor updates

~ It will install the major version automatically

If no updates we should not put anything
Safe to put carot
Majaor updates can break the project ^ for safer side

Version:2.8.3
Major Update:3.0.0
Minor Update:2.8.4

Package Json (Keeps track of what version of that package is installed if ^ install any minor upgrae ~ install major version)
Package lockJson(Keeps Tracks of Exact version)
It locks the verion and keep the exact version of the installed dependencies
Keeps the exact version 2.8.3

Integrity in Package lock - Hash
Sometime projects work in development and breaks in production this integrity verifiy whatever dependencies in my machine is the same version deployed to the production It keeps track of all the exact versions

Node Modules
Contains All the codes we fetched from npm
It will fetch all the modules for the dependencies

Package.json is a configuration for our project
Node Modules is like a database which contains the actual data of the packages that we fetched from npm
npm install will fetch all the code that are required and put it in out folder
Node modules are very heavy

There are more extra Packages but there are some packages that are not isntalled
Because it came over there because our project needs parcel
But parcel as aproject has its own dependencies
They have their owwn dependencies
This is Knwon as Transitive Dependencies

Parcel itself depended on lot of things
Parcel itself cannot do all the stuffs

Parcel needs helps of babel also
There are more package.json will be present in our project

We dont put these node modules to the github
If we have package and package.lock we can generate node modules

Whatever we can regenerate we should not put into git

npx to execute node package
npx parcel index.html
It will Generate a dist file
Parcel will created a server and our app will run on that server

npm - we are just calling the command for installing
npx - Executing the package

npm parcel index.html
Parcel will go to the source index.html and build a development build for our app and it host it to the server

We use CDN links to bring react to our app(Not prefereed)

A network call to Fetch from CDN it is costly
If we already have react in node modules it will be easy

If react gets updated we need to change the cdn links it will be not good

Another way is through npm
React is also hosted in npm

npm install React
We need react as normal dependencies
