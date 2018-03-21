import React from "react";
import { StyleSheet } from 'react-native'
import { Item, Input, Form, Label } from 'native-base';

const InputForm = (props) => {
    return (
        <Form style={styles.formStyle}>
            <Label>{props.labelName}</Label>
            <Item regular style={styles.itemStyle} >
                <Input placeholder = {props.placeholder} />
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
        backgroundColor:'white'
    }
}

export { InputForm }