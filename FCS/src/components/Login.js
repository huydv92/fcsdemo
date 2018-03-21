import React, { Component } from 'react';
import { Container, Footer, Button, Icon, View, Label, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { InputForm, ButtonArrow, FooterLogin, ButtonLogin, RememberMe } from '../common'
export default class Login extends Component {
    render() {
        return (
            <Container style={{ flex: 1 }} >
                <View style={styles.ContentStyle}>
                    <Thumbnail style={styles.Thumbnail} large square source={require('../images/m2talk_icon_2.png')} />
                    <InputForm placeholder="User Name" labelName="User Name" />
                    <InputForm placeholder="Pass Word" labelName="Password" />
                    <ButtonArrow labelName="Language" titleMid="English" leftHide />
                    <RememberMe />
                    <ButtonLogin title="Login" />
                </View>
                <Footer style={styles.Footer} >
                    <FooterLogin />
                </Footer>
            </Container>
        );
    }
}
const styles = ({

    ContentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#2963A5'
    },
    viewCheckBox: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Footer: {
        height: 60,
        backgroundColor: '#2963A5',
        borderTopWidth: 0
    },
    Thumbnail: {
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    ThumbnailLogin: {
        width: 180,
        height: 40
    },

})