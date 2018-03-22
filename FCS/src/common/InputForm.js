import React from "react";
import { StyleSheet } from 'react-native'
import { Item, Input, Form, Label } from 'native-base';

const InputForm = (props) => {
    const { onChangeText, value, placeholder, labelName, secureTextEntry } = props;
    return (
        <Form style={styles.formStyle}>
            <Label>{labelName}</Label>
            <Item regular style={styles.itemStyle} >
                <Input style={value ? { paddingBottom: 10 } : null} placeholder={placeholder}
                    onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry} 
                    autocorrect={false} autoCapitalize = 'none'
                    />
            </Item>
        </Form>
    )
}

const styles = {
    formStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    itemStyle: {
        height: 35,
        marginTop: 5,
        backgroundColor: 'white'
    }
}

export { InputForm }