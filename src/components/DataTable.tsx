import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hideable: true },
    { field: 'name', headerName: 'Whiskey Name', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'year_made', headerName: 'Year', flex: 2 },
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { whiskeyData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])
    // TODO: Write useData hook and selection model state change content

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`);
        setTimeout( () => {window.location.reload()}, 500)
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row'>
            <div>
                <button
                    className='p-3 bg-blue-300 m-3 rounded hover:bg-red-700 hover:text-white'
                    onClick={() => handleOpen()}
                >
                    Create New Whiskey
                </button>
            </div>
            <Button onClick={handleOpen} className='p-3 bg-blue-300 m-3 rounded hover:bg-red-700 hover:text-white' >Update</Button>
            <Button onClick={deleteData} className='p-3 bg-blue-300 m-3 rounded hover:bg-red-700 hover:text-white' >Delete</Button>
        </div>
        <div className={open ? 'hidden' : 'container mx-10 my-5 flex-col'}
            style={{height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-red-700 my-2 rounded text-center text-blue-300">My Whisky List</h2>
            <DataGrid rows={whiskeyData} columns={columns} pageSizeOptions={[5]}
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any) => {
                setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
