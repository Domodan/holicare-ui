/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import Image from "next/image";
import { Doctor } from '@/types/doctor';
import DataTable from '@/components/data_table/datatable';
import ButtonComponent from '@/components/buttons/button_component';

export default function ClinicDataTable({ data, headerTitle }: { data: any[], headerTitle: string }) {
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
        // { label: 'ID' },
        {
            label: 'Avatar',
        },
        { label: 'Patent ID', width: 200 },
        { label: 'Hospital', width: 200 },
        { label: 'Specialty', width: 200 },
        { label: 'Email', width: 200 },
        {
            label: 'Status', width: 200, renderCell: (params: any) => {
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
            label: 'Actions',
            renderCell: (params: any) => {
                // Define your action buttons or menu
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

            <DataTable
                rows={[]}
                columns={columns}
                title={headerTitle}
            />
        </div >
    );
}
