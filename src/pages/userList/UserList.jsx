import style from "./userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteSweep} from '@mui/icons-material';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width:150,
          renderCell: (params) =>{
            return(
              <>
              <Link to= {"/user/"+ params.row.id} >
              <button className="del-btn">Edit</button>
              </Link>
              <DeleteSweep className="del-sign"/>
              </>
            )
          }
        },
      ];
      
      
  return (
    <div className="userlist">
      <h1 className="user-title">USER-LIST</h1>
        <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
