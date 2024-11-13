import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { MOCK_RESULTS } from "../mockData";

const columns: GridColDef<(typeof MOCK_RESULTS)[number]>[] = [
  {
    field: "id",
    headerName: "Bill Number",
    type: "number",
    width: 100,
  },
  {
    field: "parcelNumber",
    headerName: "Parcel Number",
    type: "number",
    width: 100,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "location",
    headerName: "Location",
    width: 200,
  },
  {
    field: "billFlags",
    headerName: "Bill Flags",
    width: 200,
  },
];

const ResultsTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={MOCK_RESULTS}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
      />
    </Box>
  );
};

export default ResultsTable;
