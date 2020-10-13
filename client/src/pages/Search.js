import React, { Component } from "react";
import API from "../utils/API";
import { AllBooks, BooksItem } from "../components/List";
import { Form, Search } from "../components/Form";
import { Container, Row, Col } from "../components/Grid";

class SearchBooks extends Component {

    state = {
        books: [],
        bookSearch: ""
    };

    handleFormChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleFormSubmit = event => {
        event.preventDefault();

        API.searchBooks(this.state.bookSearch)
            .then(res => {
                this.setState({ books: res.data.items }, function () {
                })
            })
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <Col size="xs-12 sm-12">
                                            <Form name="bookSearch" value={this.state.bookSearch} onChange={this.handleFormChange} placeholder="Search for a Book"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col size="xs-12 sm-12">
                                            <Search onClick={this.handleFormSubmit} type="primary">Search</Search>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>

                    <Row>
                        <Col size="xs-12">
                            <AllBooks>
                                {this.state.books.map(book => {
                                    return (
                                        <BooksItem
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            authors={book.volumeInfo.authors}
                                            link={book.volumeInfo.infoLink}
                                            description={book.volumeInfo.description}/>);
                                })}
                            </AllBooks>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default SearchBooks;