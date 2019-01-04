import React, { Component } from 'react';

import Modal from '../../components/ui/modal/Modal';
import Aux from '../aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }

    componentWillMount() {
      // not causing side effects, just registering interceptors
      // clear the error when sending request
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      // obtain the error message if something went wrong
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount() {
      //remove interceptors when component is unmounted
      //to prevent memory leak
      // console.log('Will Unmount', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      //error confirmed, re-init error state to null
      this.setState({error: null});
    }

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            Something went wrong...
            {this.state.error ? this.state.error.message: null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
};
export default withErrorHandler;
