import './Home.css';
import Component from 'react';

class Home extends Component {

    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }

}