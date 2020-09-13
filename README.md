# Web Authentication  

**Summary** 

The example of implementation of web authentication using several methods.  

## Overview

This project use some methods to secure content and user passwords. We use routing, Mongoose-encryption module, MD5 hashing, Bcrypt hashing and salting, Passport.js, and OAuth 2.0. We use them one at a time, instead of using them simultaneously (see commits).

## Dependencies

See package.json file.

## Installation

```
$ git clone https://github.com/adisaktijrs/web-auth.git
$ cd web-auth
$ npm install
```
Make sure you make .env file in your root project directory.
```
$ touch .env
$ nano .env
SECRET=YourRandomText
CKEY=ItsUpToYou
$ node app.js
```

## Learn More 

- http://nodejs.org/
- http://expressjs.com/
- https://www.npmjs.com/package/mongoose-encryption
- https://www.npmjs.com/package/md5
- https://www.npmjs.com/package/bcrypt
- https://www.npmjs.com/package/dotenv
- http://www.passportjs.org/
- https://www.npmjs.com/package/passport-local
- https://www.npmjs.com/package/passport-local-mongoose
- https://oauth.net/2/
