import React, { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    const params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [movieId]);

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        if (!rev.value.trim()) {
            return;
        }

        try {
            const response = await api.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movieId
            });

            const updatedReviews = [
                ...reviews,
                { body: rev.value }
            ];

            setReviews(updatedReviews);
            rev.value = "";

        } catch (err) {
            console.error("Error adding review:", err);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt={movie?.title || "Movie poster"} />
                </Col>

                <Col>
                    <Row>
                        <Col>
                            <ReviewForm
                                handleSubmit={addReview}
                                revText={revText}
                                labelText="Write a Review"
                            />
                        </Col>
                    </Row>

                    {reviews?.map((r, index) => (
                        <React.Fragment key={r.id || index}>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>

                            <Row>
                                <Col><hr /></Col>
                            </Row>
                        </React.Fragment>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
