import React from 'react';
import axios from 'axios';
import B from '../../common/b';
import './index.scss';
export default class A extends React.Component {
  constructor(props) {
    super();
  }
  componentDidMount() {
    axios.get('/v2/movie/top250')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <div className="a" >fff A  <B /> </div>;
  }
}
