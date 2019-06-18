import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Pagea from './pagea';
import Pageb from './pageb';

const Routes=createStackNavigator({
    pagea: {
        screen: Pagea,
        navigationOptions: () => ({
            title:'A页面'
        })
    },
    pageb:{
        screen:Pageb,
        navigationOptions:()=>({
            title: 'B页面'
        })
    }
},{
    initialRouteName:'pagea'
});
export default createAppContainer(Routes);