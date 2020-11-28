# assignment

## Dependencies

## mobile app will be using some dependencies:

| Package Name                                  |                                      Reson | link                                                                        |
| --------------------------------------------- | -----------------------------------------: | --------------------------------------------------------------------------- | ----------------------------------- | ---------------------- | ----------------------------------------------------------------- |
| react-native                                  | to create the app for both android and iOS | https://reactnative.dev/docs/getting-started                                |
| @react-native-picker/picker                   |                        for drop down lists | https://github.com/react-native-picker/picker                               |
| react-native-device-info                      |                    to get device unique ID | https://github.com/react-native-device-info/react-native-device-info        | @react-native-community/geolocation | to share user location | https://www.npmjs.com/package/@react-native-community/geolocation |
| react-native-qrcode-scanner                   |                               scan QR code | https://github.com/moaazsidat/react-native-qrcode-scanner                   |
| react-native-push-notification                |                      to push notifications | https://www.npmjs.com/package/react-native-push-notification                |
| @react-native-community/push-notification-ios |                      notifications for iOS | https://www.npmjs.com/package/@react-native-community/push-notification-ios |
| redux                                         | to manage communication between components | https://redux.js.org/                                                       |
| React Native Image Picker                     |                           to upload images | https://www.npmjs.com/package/react-native-image-picker                     |
| react-native-router-flux                      |             for navigation between screens | https://www.npmjs.com/package/react-native-router-flux                      |
| @react-native-async-storage/async-storage     |                    to manage local storage | https://react-native-async-storage.github.io/async-storage/docs/install/    |
| @react-native-community/netinfo               |               to watch internet connection | https://www.npmjs.com/package/@react-native-community/netinfo               |
| axios                                         |                         to make APIs calls | https://www.npmjs.com/package/axios                                         |
| react-native-android-location-enabler         |                  to enable GPS for android | https://www.npmjs.com/package/react-native-android-location-enabler         |
| react-native-loading-spinner-overlay          |                          to handle loading | https://www.npmjs.com/package/react-native-loading-spinner-overlay          |
| React Native Restart                          |           to restart app (change language) | https://www.npmjs.com/package/react-native-restart                          |

## Mobile Code Structure

```
.
├── package.json
├── README.md
├── index.js
└── app
    ├── screens
    ├── components
    |   └── shared
    ├── reducers
    ├── actions
    ├── assets
    |   ├──fonts
    |   └──imgs
    ├── services
    ├── store
    ├── translations
    └── routes.js
```

## back-end will be using some dependencies:

| Package Name |                                                                                        Reson | link                                       |
| ------------ | -------------------------------------------------------------------------------------------: | ------------------------------------------ |
| bcrypt       |                                                    to hash users password and sensitive data | https://www.npmjs.com/package/bcrypt       |
| body-parser  |                             to parse incoming request bodies in a middleware before handling | https://www.npmjs.com/package/body-parser  |
| cors         |                                     to enable cors with various options to specific websites | https://www.npmjs.com/package/cors         |
| dotenv       | to load environment variables from a .env file into process.env. for sensitive keys and data | https://www.npmjs.com/package/dotenv       |
| jsonwebtoken |                                                              to Secure Node.js RESTful APIs. | https://www.npmjs.com/package/jsonwebtoken |
| nodemailer   |                                                                               to send emails | https://www.npmjs.com/package/nodemailer   |
| Stripe       |                                                                  use it as a payment gateway | https://www.npmjs.com/package/stripe       |
| mongoDB      |                                                                         use it as a database | https://www.mongodb.com/                   |
| mongoose     |                                                                       to make mongoDB easier | https://www.npmjs.com/package/mongoose     |
| nodemon      |                                                                            for hot reloading | https://www.npmjs.com/package/nodemon      |

## Server Code Structure

```
.
├── package.json
├── package-lock.json
├── README.md
├── config.js
├── .env
├── index.js
├── models
│   ├── Model1
|   └── Model2
├── helpers
│   ├── verifyToken.js
│   └── Other helpers
├── controllers
│   ├── controllers
|   └── controllers
└── .gitignore
```
