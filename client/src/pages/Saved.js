import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import { AllBooks, BooksItem } from "../components/List";

class Save extends Component {

    state = {
        savedBooks: []
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = event => {

        API.getBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="xs-12">
                            <AllBooks>
                                {this.state.savedBooks.map(book => {
                                    return (
                                        <BooksItem
                                            key={book._id}
                                            title={book.title}
                                            authors={book.authors}
                                            link={book.link}
                                            description={book.description}
                                            image={book.image}
                                            id={book._id}
                                            loadBooks={this.loadBooks}
                                        />
                                    );
                                })}
                            </AllBooks>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };

};

export default Save;