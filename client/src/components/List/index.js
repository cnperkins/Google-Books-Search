import React from "react";
import { Container, Row, Col } from "../Grid";
import Save from "../Save";
import API from "../../utils/API";
import "./style.css";

export function AllBooks({ children }) {
    return <ul className="list-group">{children}</ul>;
};

export function BooksItem(props) {

    const handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        })
    };

    return (
        <li key={props.id}>
            <Container>
                <Row>
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>{[props.authors].flat().join(", ")}</p>
                        <p>{props.description}</p>
                        <a rel="noreferrer noopener" className="btn btn-md btn-primary input-md" target="_blank" href={props.link}>View</a>
                        
                        {<Save type="warning" className="btn btn-md btn-primary input-md input-md" onClick={handleSaveBtn}>Save</Save>
                            
                        }
                    </Col>
                </Row>
            </Container>
        </li>
    );
};