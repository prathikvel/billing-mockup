import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
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

const rows = [
  {
    id: 1,
    parcelNumber: 4,
    name: "Opalina Esmead",
    location: "0805 Mcbride Drive",
    billFlags: "nam",
  },
  {
    id: 2,
    parcelNumber: 52,
    name: "Anne-marie Culshew",
    location: "6229 Morrow Way",
    billFlags: "bibendum",
  },
  {
    id: 3,
    parcelNumber: 65,
    name: "Drona Dearell",
    location: "47022 Myrtle Center",
    billFlags: "eleifend quam a",
  },
  {
    id: 4,
    parcelNumber: 97,
    name: "Rivi Dossantos",
    location: "07967 Judy Trail",
    billFlags: "turpis",
  },
  {
    id: 5,
    parcelNumber: 17,
    name: "Sheppard Truwert",
    location: "0358 Calypso Crossing",
    billFlags: "egestas metus",
  },
  {
    id: 6,
    parcelNumber: 42,
    name: "Cherida Tuxill",
    location: "253 Burrows Lane",
    billFlags: "augue",
  },
  {
    id: 7,
    parcelNumber: 24,
    name: "Olivette Wadley",
    location: "72322 Sage Terrace",
    billFlags: "vestibulum",
  },
  {
    id: 8,
    parcelNumber: 27,
    name: "Celestina Beckmann",
    location: "40067 Cardinal Way",
    billFlags: "semper",
  },
  {
    id: 9,
    parcelNumber: 67,
    name: "Eadith Crush",
    location: "71186 Schlimgen Center",
    billFlags: "etiam",
  },
  {
    id: 10,
    parcelNumber: 8,
    name: "Kaylyn Pulsford",
    location: "71 Lien Circle",
    billFlags: "libero non",
  },
  {
    id: 11,
    parcelNumber: 82,
    name: "Randi Peepall",
    location: "04 Golf Center",
    billFlags: "nisl ut volutpat",
  },
  {
    id: 12,
    parcelNumber: 61,
    name: "Sharron Carmel",
    location: "3016 Del Sol Crossing",
    billFlags: "aliquam non mauris",
  },
  {
    id: 13,
    parcelNumber: 55,
    name: "Edouard Dalwood",
    location: "54 Katie Road",
    billFlags: "vel",
  },
  {
    id: 14,
    parcelNumber: 30,
    name: "Bondy Beamish",
    location: "16 Loeprich Drive",
    billFlags: "nam ultrices libero",
  },
  {
    id: 15,
    parcelNumber: 58,
    name: "Bernette Finnis",
    location: "2703 Manley Avenue",
    billFlags: "ultrices phasellus",
  },
];

const ResultsTable = () => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
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
