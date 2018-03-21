import React from 'react'
import { StyleSheet } from 'react-native'
import { Form, Button, Icon, Text, Label, Body, Left, Right } from 'native-base';

const ButtonArrow = (props) => {
    const { leftHide, titleMid, rightHide, labelName, styleView } = props;
    return (
        <Form style={[styles.contentView, styleView]}>
            <Label> {labelName}</Label>
            <Button full regular transparent style={styles.btnStyle}>
                <Left>{leftHide ? null : <Icon name='arrow-back' />}</Left>
                <Body><Text>{titleMid}</Text></Body>
                <Right style={styles.right}>
                    {rightHide ? null : < Icon ios='ios-arrow-forward' android="md-arrow-forward" style={styles.icon} />}
                </Right>
            </Button>
        </Form >
    )
}

const styles = ({
    contentView: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    btnStyle: {
        marginTop: 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        height: 35,
        backgroundColor:'white'
    },
    right: {
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        fontSize: 20,
        color: 'green'
    }
})
export { ButtonArrow }