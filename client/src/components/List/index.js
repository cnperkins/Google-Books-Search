import React from "react";
import { Container, Row, Col } from "../Grid";
import Save from "../Save";
import API from "../../utils/API";
import Delete from "../Delete";
import "./style.css";
import Thumbnail from "../Thumbnail.js";

// BookList renders a bootstrap list item
export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};

// component to render each book
export function BookListItem(props) {

    // function to handle saving book to db when save button is clicked
    const handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };

    // function to handle deleting book from db when delete button is clicked
    const handleDeleteBtn = event => {
        API.deleteBook(props.id)
            .then(
                res => {
                    // use loadBooks prop from Saved page component
                    props.loadBooks()
                    console.log(props.id)
                }
            )
            .catch(err => console.log(err))
    };

    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                        <Thumbnail src={props.image} />
                    </Col>
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>
                            Written By {[props.authors].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>
                        <a
                            rel="noreferrer noopener"
                            className="btn btn-lg btn-primary input-lg view"
                            target="_blank"
                            href={props.link}
                        >
                            View
                        </a>
                        {/* if there is an object id render the SaveBtn component else render the DeleteBtn component */}
                        {!props.id ?
                            <Save
                                type="success"
                                className="input-lg"
                                onClick={handleSaveBtn}
                            >
                                Save
                            </Save>
                            :
                            <Delete
                                type="danger"
                                className="input-lg"
                                onClick={handleDeleteBtn}
                            >
                                Delete
                            </Delete>
                        }
                    </Col>
                </Row>
            </Container>
        </li>
    );
};