import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Container, Jumbotron } from "react-bootstrap";

function UserList() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<ListGroup.Item variant='danger mb-2'>Users List</ListGroup.Item>
					{users.map((user) => (
						<ListGroup.Item variant='success mb-1' key={user.id}>
							<strong>Name:</strong> {user.name} <strong>UserName:</strong>{" "}
							{user.username}
							<strong> Phone:</strong> {user.phone}
						</ListGroup.Item>
					))}
				</Container>
			</Jumbotron>
		</div>
	);
}

export default UserList;