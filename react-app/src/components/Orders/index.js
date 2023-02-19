import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import {useDispatch, useSelector} from "react-redux";
import {IconButton} from "@mui/material";
import {addUser} from "../../reducers/user";
import Add from "@mui/icons-material/Add";


export default function Orders() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users) ?? []
    const randomUser = () => {
        const id =  users ? users[users.length-1]?.id + 1 : 0
        return {
            id,
            name: `Test ${id}`,
            age: Math.round(Math.random()*10)
        }
    }
    const buttonHandler = () => {
        dispatch(addUser(randomUser()))
    }

    return (
        <React.Fragment>
            <Title>Recent Orders</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <IconButton onClick={buttonHandler} color="inherit">
                <Add />
            </IconButton>
        </React.Fragment>
    );
}