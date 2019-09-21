import React, { Fragment } from 'react';
import Header from '@/components/header/index';

class Public extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.history.push('/');
    }

    render() {
        return (
            <Fragment>
                <Header></Header>
            </Fragment>
        );
    }
}

export default Public;
