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
    const cols = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Infection', width: 130 },
        { field: 'symptom', headerName: 'Symptom', width: 200 },
        { field: 'risk_factors', headerName: 'Risk Factors', width: 200 },
        { field: 'created_at', headerName: 'Date Created', width: 130 },
        { field: 'updated_at', headerName: 'Date Updated', width: 130 },
        // {
        //     field: 'actions',
        //     headerName: 'Actions',
        //     renderCell: (params: any) => {
        //         // Define your action buttons or menu
        //         return (
        //             <div>
        //                 <IconButton onClick={() => handleEdit(params.row)}>
        //                     <ModeEditIcon color="success" />
        //                 </IconButton>
        //                 <IconButton onClick={() => handleDelete(params.row)}>
        //                     <DeleteOutlineIcon color="error" />
        //                 </IconButton>
        //             </div>
        //         );
        //     },
        // },
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

        </div>
    );
}
