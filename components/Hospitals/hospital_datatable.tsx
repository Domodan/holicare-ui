/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import DataTable from '@/components/data_table/datatable';
import ButtonComponent from '@/components/buttons/button_component';
import { Doctor } from '@/types/doctor';
import { HOSPITAL } from '@/types/hospital';


export default function HospitalDataTable({ data, headerTitle }: { data: HOSPITAL[], headerTitle: string }) {
    // useful hooks
    const [open, setOpen] = React.useState(false);
    const [loader, setLoader] = React.useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState<HOSPITAL>({} as HOSPITAL);
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackMsg, setSnackMsg] = React.useState("");
    function handleEdit(row: any) {
        setOpenEdit(true);
        setSelectedData(row);
    }

    function handleDelete(row: HOSPITAL) {
        setOpenDelete(true);
        setSelectedData(row);
    }
    const cols = [
        {
            label: "Avatar"
        }, {
            label: "Patient ID"
        }, {
            label: "Occupation"
        }, {
            label: "Age"
        }, {
            label: "Phone Number"
        }, {
            label: "Location"
        }, {
            label: "Hospital"
        }, {
            label: "Actions"
        }
    ];
    const rows = [
        [
            {
                label: "/images/user/user.jpg",
            }, {
                label: "12345",
            }, {
                label: "Engineer",
            }, {
                label: "25",
            }, {
                label: "08123456789",
            }, {
                label: "Kampala",
            }, {
                label: "HoliCare",
            }, {
                label: ""
            }
        ]
    ]
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
            <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  text-black dark:text-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <DataTable columns={cols} rows={rows} actionComponent={<ButtonComponent buttonText='Add a Hospital' callbackUrl='/' />} />

            </div>
        </div >
    );
}
