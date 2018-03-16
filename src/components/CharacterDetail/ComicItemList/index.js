// iterar en la data de personajes y aplicar ComicItem en cada iteración
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ComicItem from './ComicItem';
import { Container, Row, Col } from 'reactstrap';
import './index.css';

class ComicItemList extends Component {
  render() {
    return (
      <div>
        <ComicItem/>
      </div>
    )
  }
}


export default ComicItemList;