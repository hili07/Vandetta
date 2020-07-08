import logo200Image from 'assets/img/logo/acu.jpg';
import PropTypes from 'prop-types';
import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
const CapturePage = React.lazy(() => import('pages/CapturePage'));
class AuthForm extends React.Component {
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    }

    if (!buttonText && this.isSignup) {
      return 'Signup';
    }

    return buttonText;
  }

  render() {
    const {
      showLogo,
      usernameLabel,
      usernameInputProps,
      matricLabel,
      matricInputProps,
      passwordLabel,
      passwordInputProps,
      confirmPasswordLabel,
      confirmPasswordInputProps,
      children,
      onLogoClick,
    } = this.props;

    return (
     
      <Form 
      className="pl-0px"
      onSubmit={this.handleSubmit}>
        
        {showLogo && (
          <div className="text-center pb-4 ">
            <img
              src={logo200Image}
              className="rounded"
              style={{ width: 60, height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
             
          </div>
        )}
        
          
           
        
        <FormGroup>
        
         
          <Label 
          className="text-center text-muted"
          for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} />
        </FormGroup>
        <FormGroup>
          <Label 
          className="text-center text-muted"
          for={matricLabel}>{matricLabel}</Label>
          <Input {...matricInputProps} />
        </FormGroup>
        
        <FormGroup>
          <Label 
          className="text-center text-muted"
          for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} />
        </FormGroup>
        {this.isSignup && (
          <FormGroup>
            <Label 
            className="text-center text-muted"
            for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
            <Input {...confirmPasswordInputProps} />
          </FormGroup>
        )}
        <FormGroup 
        className="text-warning"
        check>
         <div>
          <Route exact path='/capture' component={CapturePage} />
          <Link to="/capture" className='button'>
            <Button className='float-right' type="button"  color= "primary" size= "sm"
            onClick = {this.isSignup}
            >
       
             Enroll Image  
            </Button>
          </Link>
          </div>
          <Label check>
            <Input 
             
            type="checkbox" />{' '}
            {this.isSignup ? 'Agree to the terms and policy' : 'Remember me'}
          </Label>
        </FormGroup>
        <hr />
        <Button
          size="lg"
          className="bg-gradient-theme-left border-0"
          block
          onClick={this.handleSubmit}>
          {this.renderButtonText()}
        </Button>

        <div className="text-center pt-1">
          <h6 className="text-muted">
            or</h6>
          <h6>
            {this.isSignup ? (
              <a href="#login" onClick={this.changeAuthState(STATE_LOGIN)}>
                Login
              </a>
            ) : (
              <a href="#signup" onClick={this.changeAuthState(STATE_SIGNUP)}>
                Signup
              </a>

            )}
          </h6>
        </div>
        
      
        {children}
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  matricLabel: PropTypes.string,
  matricInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,

  usernameLabel: 'Full Name',
  usernameInputProps: {
    type: 'text',
    
  },
  matricLabel: 'Matric No',
  usernameInputProps: {
    type: 'varchar',
    
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',

  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
