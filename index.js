/**
 * @format
 */

import {AppRegistry} from 'react-native';
import  Routes from './pages/routes';
import {name as appName} from './app.json';
import cntts from  'react-native-cn-tts';

cntts.init('16492031','7spvaTGqPbqBxwwfdjqwLNHL','l0ko2mZ7gYvxjKizKGvg7kLz6kLRzacn').then(()=>{
    console.log('注册成功');
}).catch(()=>{
    console.log('注册失败');
});
AppRegistry.registerComponent(appName, () => Routes);
