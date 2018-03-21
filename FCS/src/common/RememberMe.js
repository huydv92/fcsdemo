import React from "react";
import { StyleSheet } from 'react-native'
import { View, Label,CheckBox } from 'native-base';

const RememberMe = (props) => {
    return (
        <View style={styles.viewCheckBox}>
            <Label>Remember Me</Label>
            <CheckBox style={styles.checkbox} color="green" checked />
        </View>
    )
}
const styles = {
    viewCheckBox: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkbox: {
        marginRight: 40,
        borderRadius: 0
    },
}
export { RememberMe }
