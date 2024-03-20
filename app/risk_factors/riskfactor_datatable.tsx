/* eslint-disable react/jsx-no-undef */
"use client"
import * as React from 'react';
import DataTable from '@/components/data_table/datatable';
import ButtonComponent from '@/components/buttons/button_component';

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
    // ID
    // Risk Factor
    //     Category
    // Date Created
    // Date Updated

    const cols = [
        {
            label: "ID"
        }, {
            label: "Risk Factor"
        }, {
            label: "Category"
        }, {
            label: "Date Created"
        }, {
            label: "Date Updated"
        }
    ];
    const rows = [
        [
         {
                label: "12345",
            }, {
                label: "Engineer",
            }, {
                label: "25",
            }, {
                label: "",
            },  {
                label: "",
            },
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
            <div className="flex flex-col gap-10">
                {/* <Infections/> */}
                <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  text-black dark:text-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
                    <div>
                        <DataTable columns={cols} rows={rows} actionComponent={<ButtonComponent buttonText='Add a Risk factor' callbackUrl='/' />} />
                    </div>
                </div>
            </div>
        </div>
    );
}
