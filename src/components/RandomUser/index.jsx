import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { getSingleUserData } from "../../features/RandomUser/randomUserSlice";

const RandomUser = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // const [data, setData] = useState();

    const fetchApi = async () => {
        // try {
        //     setLoading(true);
        //     const result = await fetch(`https://randomuser.me/api/`)
        //     const data = await result.json();
        //     setData(data?.results)
        //     setLoading(false);

        // } catch (e) {
        //     setError(true)
        // }
        dispatch(getSingleUserData());
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            {status == `pending` ? "Loding..." : error == null
                ? Array.isArray(users) &&
                users.length != 0 &&
                users?.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={item?.picture?.large} />
                                <Card.Body>
                                    <Card.Title>Name: {` ${item?.name?.first}  ${item?.name?.last} ${item?.name?.title}`}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Email : {item?.email}</ListGroup.Item>
                                    <ListGroup.Item>Gender : {item?.gender}</ListGroup.Item>
                                    <ListGroup.Item>Cell :  {item?.cell}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })
                : "some thing went wrong"}
        </div>
    );
};

export default RandomUser;
