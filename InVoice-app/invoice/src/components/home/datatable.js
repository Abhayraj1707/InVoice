import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "60%",
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Datatable({ data }) {
	const columns = data[0] && Object.keys(data[0]);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<table cellPadding={5} cellSpacing={0}>
			<thead>
				<tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
			</thead>
			<tbody>
				{data.map((row) => (
					<tr>
						{columns.map((column) => (
							<td>{row[column]}</td>
						))}
						<td>
							<IconButton
								aria-label='delete'
								size='large'
								color='error'
								onClick={handleOpen}>
								<DeleteIcon />
							</IconButton>
						</td>
					</tr>
				))}
			</tbody>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						style={{ textAlign: "center" }}>
						Delete Invoice No. : #100000 ?
					</Typography>
					<hr></hr>
					<br></br>
					<Box style={{ width: "80%", margin: "auto" }}>
						<Stack spacing={2} direction='row'>
							<Button variant='contained' style={{ width: "50%" }}>
								Delete
							</Button>
							<Button
								variant='outlined'
								onClick={handleClose}
								style={{ width: "50%" }}>
								Cancel
							</Button>
						</Stack>
					</Box>
				</Box>
			</Modal>
		</table>
	);
}
