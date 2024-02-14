"use client"
import React from "react";
import { DISTRICT } from "@/types/districts";
import { LoadingButton } from "@mui/lab";
import { Stack, Button, Snackbar, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CustomDialog from "../custom_dialog/custom_dialog";
import CustomTextField from "../textfield/custom_textfield";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'region', headerName: 'Region', width: 200 },
    { field: 'population', headerName: 'Population', width: 200 },
    { field: 'created', headerName: 'Date Created', width: 130 },
    { field: 'updated', headerName: 'Date Updated', width: 130 },
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
          variant="contained" onClick={handleClickOpen} size="small">Add New District</Button>
      </Stack>
      <DataGrid
        className='text-black dark:text-white'
        columns={columns}
        rows={districtData}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />
      {/* dialog for editing */}
      <CustomDialog open={openEdit} title={`Edit District: ${selectedData.name}`} closeDialog={() => setOpenEdit(false)}>
        <CustomTextField label={`Name : ${selectedData.name}`} placeHolder={'Enter name....'} errorText={''} onEdit={(x: any) => console.log(x)} />
        <CustomTextField label={`Population :${selectedData.population}`} placeHolder={'Enter population ...'} errorText={''} onEdit={(x: any) => console.log(x)} />
        <CustomTextField label={`Region : ${selectedData.region}`} placeHolder={'Enter region ...'} errorText={''} onEdit={(x: any) => console.log(x)} />
        <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={handleForm}>Add Record</LoadingButton>
      </CustomDialog>


      {/* dialog for adding new district */}
      <CustomDialog open={open} closeDialog={handleClose} title={'New District'}>
        <CustomTextField label={'Name'} error={false} placeHolder={'Enter name....'} errorText={''} onEdit={(x: any) => console.log(x)} />
        <CustomTextField label="Population" placeHolder={'Enter population ...'} onEdit={(x: any) => console.log(x)} />
        <CustomTextField label="Region" placeHolder={'Enter region ...'} onEdit={(x: any) => console.log(x)} />
        <LoadingButton loading={loader} variant="contained" style={{ backgroundColor: "primary", color: "white", borderRadius: "5px", margin: "10px" }} onClick={handleForm}>Add Record</LoadingButton>
      </CustomDialog>


      {/* dialog for deleting an infection */}
      <CustomDialog
        open={openDelete}
        closeDialog={handleClose}
        title={'Delete District'}
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
};

export default Districts;
