import React from "react";
import { StyleSheet } from 'react-native'
import { Button, Thumbnail, Label } from 'native-base';

const ButtonLogin = (props) => {
    return (
        <Button transparent style={styles.btnLogin} onPress = {props.onPress}>
            <Thumbnail style={styles.btnLogin} square source={require('../images/button_login.png')} />
            <Label style={{ position: 'absolute' }}>{props.title}</Label>
        </Button>
    )
}
const styles = {
    btnLogin: {
        alignSelf: 'center',
        marginTop: 5,
        width: 180,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
}
export { ButtonLogin }
