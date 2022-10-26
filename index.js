/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

import "@ethersproject/shims/dist/index.js";

global.Buffer = require('buffer').Buffer;

AppRegistry.registerComponent(appName, () => App)
