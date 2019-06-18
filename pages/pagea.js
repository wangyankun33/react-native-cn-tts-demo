import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import cntts from 'react-native-cn-tts';

export default class Pagea extends Component{
    constructor(props){
        super(props);
        this.state={
            RegistrationID:''
        };
    }
    render(){
        let {navigate}=this.props.navigation;
        let state=this.state;
        return (
            <View>
                <Text>这是A页面</Text>
                <Button title={'测试语音转换'} onPress={()=>this.testbtnclick()}/>
            </View>
        );
    }
    testbtnclick(){
        cntts.stop();
        cntts.speak("这是测试");
    }
}
