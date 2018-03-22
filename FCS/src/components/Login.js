import React, { Component } from 'react';
import { Container, Footer, Button, Icon, View, Label, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { InputForm, ButtonArrow, FooterLogin, ButtonLogin, RememberMe } from '../common'
import { connect } from 'react-redux';
import { LoginAction } from '../actions';
import { Alert } from 'react-native';
import HomeView from './HomeView';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    pressLogin() {
        this.props.pressLoginButton(this.state.username, this.state.password)
    }
    invalidUserNamePassword() {
        Alert.alert(
            'Invalid',
            'Wrong username or password',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    invalidUserNamePasswordEmtpy() {
        Alert.alert(
            'Invalid',
            'Username or password is empty',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    componentWillReceiveProps(nextProps) {
        const { auth, username } = nextProps.auth
        if (auth) {
            Actions.HomeView()
        } else if (username !== '' && !auth) {
            this.invalidUserNamePassword()
        } else if (username === '' && !auth) {
            this.invalidUserNamePasswordEmtpy()
        }

    }
    render() {

        return (
            <Container style={{ flex: 1 }} >
                <View style={styles.ContentStyle}>
                    <Thumbnail style={styles.Thumbnail} large square source={require('../images/m2talk_icon_2.png')} />
                    <InputForm placeholder="User Name" labelName="User Name"
                        onChangeText={text => this.setState({ username: text })} value={this.state.username} />
                    <InputForm placeholder="PassWord" labelName="Password" secureTextEntry
                        onChangeText={password => this.setState({ password })} value={this.state.password} />
                    <ButtonArrow labelName="Language" titleMid="English" leftHide />
                    <RememberMe />
                    <ButtonLogin onPress={() => this.pressLogin()} title="Login" />
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
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        pressLoginButton: (username, password) => {
            dispatch(LoginAction(username, password));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);;