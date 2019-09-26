import React, { Fragment } from 'react';
import Header from '@/components/header';
import SearchBar from '@/components/search-bar';

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
                <SearchBar></SearchBar>
            </Fragment>
        );
    }
}

export default Public;
