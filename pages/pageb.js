import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
export default class Pageb extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {goBack}=this.props.navigation;
        return (
            <View>
                <Text>这是B页面</Text>
                <Button title={'跳转A页面'} onPress={()=>goBack()}/>
            </View>
        );
    }
}
