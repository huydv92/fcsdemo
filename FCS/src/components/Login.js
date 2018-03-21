import React, { Component } from 'react';
import { Container, Button, Icon, View, Label, CheckBox } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { InputForm, ButtonArrow } from '../common'
export default class Login extends Component {
    render() {
        return (
            <Container style={styles.ContentStyle}>
                <InputForm placeholder="User Name" labelName="User Name" />
                <InputForm placeholder="Pass Word" labelName="Password" />
                <ButtonArrow labelName="Language" titleMid="English" leftHide />
                <View style = {styles.viewCheckBox}>
                    <Label>Remember Me</Label>
                    <CheckBox style = {{marginRight: 40}} color = "green" checked />
                </View>
            </Container>
        );
    }
}
const styles = ({

    ContentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'gray'
    },
    viewCheckBox: {
        flexDirection:'row',
        margin:20,
        justifyContent:'space-between',
    }

})