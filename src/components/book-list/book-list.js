import React, { Component } from 'react';
import {connect} from 'react-redux';
import './book-list.css';
import BookListItem from "../book-list-item";
import { WithBookStoreService } from '../hoc';
import { fetchBooks } from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {

    const { books, loading, error } = this.props;

    if (error) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {

            return (
              <li key={ book.id }>
                <BookListItem book={ book }/>
              </li>
            );

          })
        }
      </ul>
    );

  }

}

const mapStateToProps = ({ books, loading, error }) => {

  return { books, loading, error };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  const { bookstoreService } = ownProps;

  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService)
  };
};

export default compose(
  WithBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
