import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Account/reducer";
import { findAllUsers, deleteUser } from "../Users/client";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table, Alert } from "react-bootstrap";

export default function StaffPanel() {
    const currentUser = useSelector(selectCurrentUser);
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    type User = {
        _id: string;
        username: string;
        email: string;
        role: string;
    };

    useEffect(() => {
        if (currentUser?.role !== "STAFF") {
            navigate("/Home");
        } else {
            fetchUsers();
        }
    }, [currentUser, navigate]);

    const fetchUsers = async () => {
        try {
            const usersList: User[] = await findAllUsers();
            setUsers(usersList);
        } catch (err) {
            setError("Failed to load users.");
        }
    };

    const handleDelete = async (userId: string) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user._id !== userId));
        } catch (err) {
            setError("Failed to delete user.");
        }
    };

    if (!currentUser || currentUser.role !== "STAFF") {
        return null;
    }

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Staff Panel</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                {user.role !== "STAFF" && (
                                    <Button
                                        variant="danger"
                                        onClick={() => handleDelete(user._id)}
                                        style={{ padding: '5px 10px', minWidth: '75px' }}
                                    >
                                        Delete
                                    </Button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
