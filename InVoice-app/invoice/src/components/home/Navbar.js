import React, { useState } from "react";
import data from "./sample.json";
import NavTool from "./NavTool";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

const statuses = [
	{
		value: "Pending",
		label: "Pending",
	},
	{
		value: "Late",
		label: "Late",
	},
	{
		value: "Paid",
		label: "Paid",
	},
];

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Navbar(props) {
	const [q, setq] = useState("");
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [status, setStatus] = React.useState("PAID");

	const handleChange = (event) => {
		setStatus(event.target.value);
	};


	function search(rows) {
		const columns = rows[0] && Object.keys(rows[0]);
		// columns.map((column) => console.log(column))
		return rows.filter((row) =>
			columns.some((column) => row[column].toLowerCase().indexOf(q) > -1)
		);
	}

	return (
		<div>
			<nav className='navbar navbar-light bg-light'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						InVoice
					</a>
					<div class='d-flex flex-row-reverse'>
						<button class='p-2' href='/login'>
							LOGOUT
						</button>
						<button class='p-2' onClick={handleOpen}>
							CREATE NEW INVOICE
						</button>
					</div>
				</div>
			</nav>
			<form className='d-flex mt-4'>
				<input
					className='form-control me-2'
					type='search'
					placeholder='Search By InvoiceID'
					aria-label='Search'
					onChange={(e) => setq(e.target.value)}
				/>
				<button className='btn btn-outline-success' type='submit'>
					Search
				</button>
			</form>
			<NavTool data={search(data)} />
			<Datatable data={search(data)} />
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
						Create New Invoice
					</Typography>
					<hr></hr>
					<br></br>
					<Box
						component='form'
						sx={{
							"& .MuiTextField-root": { m: 3, width: "80%" },
						}}
						noValidate
						autoComplete='off'>
						<div>
							<TextField
								required
								id='outlined-required'
								label='First Name'
								fullWidth
								defaultValue='Enter First Name'
							/>
							<TextField
								required
								id='outlined-required'
								label='City'
								fullWidth
								defaultValue='Enter City Name'
							/>
							<TextField
								required
								id='outlined-required'
								label='State'
								fullWidth
								defaultValue='Enter State'
							/>
							<TextField
								required
								id='outlined-required'
								label='PostCode'
								fullWidth
								defaultValue='Enter Postcode'
							/>
							<TextField
								id='outlined-select-status'
								select
								label='Select'
								value={status}
								onChange={handleChange}
								helperText='Please select invoice status'>
								{statuses.map((option) => (
									<MenuItem key={option.value} value={option.value}>
										{option.label}
									</MenuItem>
								))}
							</TextField>
						</div>
					</Box>
					<Stack spacing={2} direction='row' style={{ width: "80%", margin: "auto" }}>
						<Button variant='contained' style={{ width: "200px" }}>
							Create
						</Button>
						<Button variant='outlined' onClick={handleClose} style={{ width: "200px" }}>
							Cancel
						</Button>
					</Stack>
				</Box>
			</Modal>
		</div>
	);
}
