
import React from "react";
import { StyleSheet } from 'react-native'
import { View, Label, Thumbnail } from 'native-base';

const FooterLogin = (props) => {
    return (
            <View style={[styles.viewCheckBox, { flex: 1 }]}>
                <Label>Version 1.3.7</Label>
                <Thumbnail small source={require('../images/fcs_logo.png')} />
            </View>
    )
}
const styles = {
    viewCheckBox: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}
export { FooterLogin }
