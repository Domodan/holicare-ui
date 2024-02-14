/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, IconButton, Snackbar, Stack } from '@mui/material';
import CustomDialog from '@/components/custom_dialog/custom_dialog';
import CustomTextField from '@/components/textfield/custom_textfield';
import Image from "next/image";
import LoadingButton from '@mui/lab/LoadingButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Doctor } from '@/types/doctor';


export default function ClinicDataTable({ data, headerTitle }: { data: Doctor[], headerTitle: string }) {
    // useful hooks
    const [open, setOpen] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState<Doctor>({} as Doctor);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackMsg, setSnackMsg] = React.useState("");
    function handleEdit(row: any) {
        setOpenEdit(true);
        setSelectedData(row);
    }

    function handleDelete(row: Doctor) {
        setOpenDelete(true);
        setSelectedData(row);
    }
    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'avatar', headerName: 'Avatar', width: 100, renderCell: (params: any) => {
                return (
                    <Image
                        style={{
                            borderRadius: '50%',
                            padding: '5px',
                        }}
                        src={params.row.avatar}
                        alt={params.row.name}
                        width={50}
                        height={50}
                    />
                );
            }
        },
        { field: 'name', headerName: 'Patent ID', width: 200 },
        { field: 'hospital', headerName: 'Hospital', width: 200 },
        { field: 'specialty', headerName: 'Specialty', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status', headerName: 'Status', width: 200, renderCell: (params: any) => {
                return (
                    <center>
                        <p
                            className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${params.row.status === "Active"
                                ? "text-success bg-success"
                                : params.row.status === "Inactive"
                                    ? "text-danger bg-danger"
                                    : "text-warning bg-warning"
                                }`}
                        >
                            {params.row.status}
                        </p>
                    </center>

                )
            },
        },
        {
            field: 'actions',
            headerName: 'Actions',
            renderCell: (params: any) => {
                // Define your action buttons or menu
                return (
                    <div>
                        <IconButton onClick={() => handleEdit(params.row)}>
                            <ModeEditIcon color="success" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(params.row)}>
                            <DeleteOutlineIcon color="error" />
                        </IconButton>
                    </div>
                );
            },
        },
    ];
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleForm = () => {
        setLoader(true);
        setOpen(false);
        setLoader(false);
    };
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Stack direction='row' justifyContent='space-between'>
                <h4 className="mb-6 text-xl font-semibold text-center text-black dark:text-white">
                    {headerTitle}
                </h4>
                <Button
                    style={{
                        backgroundColor: "primary",
                        color: "white",
                        borderRadius: "5px",
                        margin: "15px",
                    }}
                    variant="contained" onClick={handleClickOpen} size="small">Add a Doctor</Button>
            </Stack>
            <DataGrid
                columns={columns}
                rows={data}
                pageSizeOptions={[5, 10, 25, 50, 100]}
            />
            {/* dialog to add a new risk factor */}
            <CustomDialog open={open} closeDialog={handleClose} title={'New Doctor'}>
                {/* <CustomTextField label={'Risk Factor'} error={false} placeHolder={'Enter risk factor'} errorText={''} onEdit={(x: any) => console.log(x)} />
            <CustomTextField label={'Category'} error={false} placeHolder={'Enter category'} errorText={''} onEdit={(x: any) => console.log(x)} /> */}
                <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={() => { }}>Add Record</LoadingButton>
            </CustomDialog>

            {/* dialog for editing */}
            <CustomDialog open={openEdit} title={`Edit Infection`} closeDialog={() => setOpenEdit(false)}>
                {/* <CustomTextField label={'Risk Factor'} error={false} defaultValue={selectedData.} placeHolder={'Enter risk factor....'} onEdit={(x: any) => console.log(x)} />
                <CustomTextField label={'Category'} error={false} defaultValue={selectedData.body} placeHolder={'Enter body....'} onEdit={(x: any) => console.log(x)} /> */}
                <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={handleForm}>Add Record</LoadingButton>
            </CustomDialog>

            {/* dialog for deleting an infection */}
            <CustomDialog
                open={openDelete}
                closeDialog={handleClose}
                title={'Delete Infection'}
                actions={[
                    {
                        label: 'Cancel',
                        color: 'primary',
                        onClick: async () => {
                            setSnackMsg("Operation Canceled!");
                            setOpenSnack(true);
                            setOpenDelete(false)
                        },
                    }, {
                        label: 'Delete',
                        color: 'error',
                        onClick: async () => {
                            setSnackMsg(`${selectedData.name} deleted successfully.`);
                            setOpenSnack(true);
                            setOpenDelete(false);
                        },
                    }
                ]}
            >
                <center>{`Are you sure you want to delete ${selectedData.name}?`}</center>
            </CustomDialog>

            {/* snack bar to display a short message */}
            <Snackbar
                open={openSnack}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={1000}
                onClose={handleClose}
                message={snackMsg}
            />
        </div >
    );
}
