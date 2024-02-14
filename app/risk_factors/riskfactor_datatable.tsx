/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, IconButton, Snackbar, Stack } from '@mui/material';
import CustomDialog from '@/components/custom_dialog/custom_dialog';
import CustomTextField from '@/components/textfield/custom_textfield';
import LoadingButton from '@mui/lab/LoadingButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// interface
interface RiskFactorData {
    id: number;
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
}
export default function RiskFactorDataTable() {
    // useful hooks
    const [open, setOpen] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState<RiskFactorData>({} as RiskFactorData);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackMsg, setSnackMsg] = React.useState("");
    function handleEdit(row: any) {
        setOpenEdit(true);
        setSelectedData(row);
    }

    function handleDelete(row: RiskFactorData) {
        setOpenDelete(true);
        setSelectedData(row);
    }
    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Risk Factor', width: 200 },
        { field: 'body', headerName: 'Category', width: 200 },
        { field: 'created_at', headerName: 'Date Created', width: 200 },
        { field: 'updated_at', headerName: 'Date Updated', width: 200 },
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
                <h1>Risk Factors</h1>
                <Button
                    style={{
                        backgroundColor: "primary",
                        color: "white",
                        borderRadius: "5px",
                        margin: "15px",
                    }}
                    variant="contained" onClick={handleClickOpen} size="small">Add Risk Factor</Button>
            </Stack>
            <DataGrid
                columns={columns}
                rows={[{
                    id: 1,
                    title: 'Infection',
                    body: 'Symptom',
                    created_at: 'Date Created',
                    updated_at: 'Date Updated',
                }]}
                pageSizeOptions={[5, 10, 25, 50, 100]}
            />
            {/* dialog to add a new risk factor */}
            <CustomDialog open={open} closeDialog={handleClose} title={'Add Risk Factor'}>
                <CustomTextField label={'Risk Factor'} error={false} placeHolder={'Enter risk factor'} errorText={''} onEdit={(x: any) => console.log(x)} />
                <CustomTextField label={'Category'} error={false} placeHolder={'Enter category'} errorText={''} onEdit={(x: any) => console.log(x)} />
                <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={() => { }}>Add Record</LoadingButton>
            </CustomDialog>

            {/* dialog for editing */}
            <CustomDialog open={openEdit} title={`Edit Infection`} closeDialog={() => setOpenEdit(false)}>
                <CustomTextField label={'Risk Factor'} error={false} defaultValue={selectedData.title} placeHolder={'Enter risk factor....'} onEdit={(x: any) => console.log(x)} />
                <CustomTextField label={'Category'} error={false} defaultValue={selectedData.body} placeHolder={'Enter body....'} onEdit={(x: any) => console.log(x)} />
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

            {/* snack bar to display a short message */}
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
