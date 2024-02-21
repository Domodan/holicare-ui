/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton, Snackbar, Stack } from '@mui/material';
import CustomDialog from '@/components/custom_dialog/custom_dialog';
import CustomTextField from '@/components/textfield/custom_textfield';
import LoadingButton from '@mui/lab/LoadingButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface InfectionsData {
    id: number;
    title: string;
    symptom: string;
    risk_factors: string;
    created_at: string;
    updated_at: string;
}
export default function InfectionsDataTable() {
    // useful hooks
    const [open, setOpen] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState<InfectionsData>({} as InfectionsData);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackMsg, setSnackMsg] = React.useState("");

    // helper functions
    function handleEdit(row: InfectionsData) {
        setOpenEdit(true);
        setSelectedData(row);
    }

    function handleDelete(row: InfectionsData) {
        setOpenDelete(true);
        setSelectedData(row);
    }
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Infection', width: 130 },
        { field: 'symptom', headerName: 'Symptom', width: 200 },
        { field: 'risk_factors', headerName: 'Risk Factors', width: 200 },
        { field: 'created_at', headerName: 'Date Created', width: 130 },
        { field: 'updated_at', headerName: 'Date Updated', width: 130 },
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
        setOpenEdit(false);
        setOpenDelete(false);
        setOpenSnack(false);
    };

    const handleForm = () => {
        setLoader(true);
        setOpen(false);
        setLoader(false);
    };
    return (
        <div style={{ width: '100%' }}>
            <Stack direction='row' justifyContent='space-between'>
                <h1></h1>
                <Button
                    style={{
                        backgroundColor: "primary",
                        color: "white",
                        borderRadius: "5px",
                        margin: "15px",
                    }}
                    variant="contained" onClick={handleClickOpen} size="small">Add New Infection</Button>
            </Stack>
            <DataGrid
                className='text-black dark:text-white'
                columns={columns}
                rows={[{
                    id: 1,
                    title: 'Infection',
                    symptom: 'Symptom',
                    risk_factors: 'Risk Factors',
                    created_at: 'Date Created',
                    updated_at: 'Date Updated',
                }]}
                pageSizeOptions={[5, 10, 25, 50, 100]}
            />
            {/* dialog for editing */}
            <CustomDialog open={openEdit} title={`Edit Infection`} closeDialog={() => setOpenEdit(false)}>
                <CustomTextField label={'Infection'} error={false} defaultValue={selectedData.title} placeHolder={'Enter infection....'} errorText={''} onEdit={(x: any) => console.log(x)} />
                <CustomTextField label={'Symptom'} error={false} defaultValue={selectedData.symptom} placeHolder={'Enter symptom ...'} errorText={''} onEdit={(x: any) => console.log(x)} />
                <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={handleForm}>Add Record</LoadingButton>
            </CustomDialog>


            {/* dialog for adding new infection */}
            <CustomDialog open={open} closeDialog={handleClose} title={'New Infection'}>
                <CustomTextField label={'Infection'} error={false} placeHolder={'Enter infection....'} errorText={''} onEdit={(x: any) => console.log(x)} />
                <CustomTextField label={'Symptom'} error={false} placeHolder={'Enter symptom ...'} errorText={''} onEdit={(x: any) => console.log(x)} />
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
                            setSnackMsg(`${selectedData.title} deleted successfully.`);
                            setOpenSnack(true);
                            setOpenDelete(false);
                        },
                    }
                ]}
            >
                <center>{`Are you sure you want to delete ${selectedData.title}?`}</center>
            </CustomDialog>

            {/* snackbar for short messages */}

            <Snackbar
                open={openSnack}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                autoHideDuration={1000}
                onClose={handleClose}
                message={snackMsg}
            />
        </div>
    );
}
