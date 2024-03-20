"use client"
import React from "react";
import { DISTRICT } from "@/types/districts";
import DataTable from '@/components/data_table/datatable';
import ButtonComponent from '@/components/buttons/button_component';
const districtData: DISTRICT[] = [
  {
    id: 1,
    name: "Kampala",
    region: "Central",
    population: "2107500",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    id: 2,
    name: "Wakiso",
    region: "Central",
    population: "1529400",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    id: 3,
    name: "Jinja",
    region: "Eastern",
    population: "226800",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    id: 3,
    name: "Mukono",
    region: "Central",
    population: "610200",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
];

const Districts = () => {

  // useful hooks
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [loader, setLoader] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState<DISTRICT>({} as DISTRICT);
  const [openSnack, setOpenSnack] = React.useState(false);
  const [snackMsg, setSnackMsg] = React.useState("");
  // helper functions
  function handleEdit(row: DISTRICT) {
    setOpenEdit(true);
    setSelectedData(row);
  }

  function handleDelete(row: DISTRICT) {
    setOpenDelete(true);
    setSelectedData(row);
  }
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
  // end of helper functions
  const cols = [
    { label: 'ID' },
    { label: 'Name', width: 200 },
    { label: 'Region', width: 200 },
    { label: 'Population', width: 200 },
    { label: 'Date Created', width: 130 },
    { label: 'Date Updated', width: 130 },
  ];


  return (
    <div style={{ width: '100%' }}>
      <DataTable columns={cols} rows={[]} actionComponent={<ButtonComponent buttonText='Add District' callbackUrl='/patients/patients/add_patient' />} />
    </div>
  );
};

export default Districts;
