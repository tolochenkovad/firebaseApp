import React, {
    Component,
    createContext
} from 'react';
import PropsTypes from 'prop-types';
import _noop from 'lodash/fp/noop';
import { connect } from 'react-redux';
import { firebaseApp, uiConfig } from '../api/firebase';
import {getEmail, removeEmail} from "../api/storage";
import {userLoggedIn, userLoggedOut} from "../components/Auth/redux/actions";

export const FireBaseAuthProps = {
    instance: PropsTypes.object.isRequired,
    logout: PropsTypes.func.isRequired,
    user: PropsTypes.object,
    signedIn: PropsTypes.bool.isRequired,
    isAuthReady: PropsTypes.bool.isRequired,
    uiConfig: PropsTypes.object.isRequired,
};

export const AuthContext = createContext(null);


class FirebaseAuthProvider extends Component{

    state = {
        user: null,
        isAuthReady: false,
    };
    listener = _noop;

    componentDidMount() {
        const { userLoggedIn } = this.props;
        this.listener = firebaseApp.auth().onAuthStateChanged((firebaseUser) => {
            this.setState({ user: firebaseUser, isAuthReady: true });
            if (firebaseUser) {
                userLoggedIn(firebaseUser);
            }
        });

        if (firebaseApp.auth().isSignInWithEmailLink(window.location.href)) {
            const email = getEmail();
            if (email) {
                firebaseApp.auth().signInWithEmailLink(email, window.location.href).then((res) => {
                    this.setState({ user: res.user, isAuthReady: true }, () => {
                        removeEmail();
                        if (res.user) {
                            userLoggedIn(res.user);
                        }
                    });
                })
            }
        }
    }

    componentWillUnmount() {
        this.listener();
    }

    logout = () => {
        const { userLoggedOut } = this.props;
        firebaseApp.auth().signOut().then(() => {
            userLoggedOut();
        });
    };

    render() {
        const { isAuthReady, user } = this.state;
        const { children, profile, userLoading } = this.props;
        return (
            <AuthContext.Provider
                value={{
                    firebaseAuth: {
                        instance: firebaseApp.auth(),
                        logout: this.logout,
                        user: profile,
                        signedIn: !!user,
                        uiConfig,
                        isAuthReady,
                        userLoading,
                    }
                }}
            >
                {children}
            </AuthContext.Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.user.profile,
    userLoading: state.user.userLoading,
});

export default connect(
    mapStateToProps,
    {userLoggedIn, userLoggedOut})
(FirebaseAuthProvider);


