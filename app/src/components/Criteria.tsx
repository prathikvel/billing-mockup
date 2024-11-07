import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const mapTypeToPrimaryCriteria: Record<string, string[]> = {
  "1": [
    "Bill Number",
    "Business Name",
    "Invoice Number",
    "Old Bill Number",
    "Owner Name",
    "Parcel Name",
    "Street Name",
  ],
  "2": [
    "Bill Number",
    "Business Name",
    "Owner Name",
    "Parcel Number",
    "Project Number",
    "Street Name",
  ],
  "3": [],
  "4": [
    "Abstract Number",
    "Business Name",
    "Old Account Number",
    "Owner Name",
    "Street Name",
  ],
};

const PrimaryCriteria = ({ type }: { type: string }) => {
  return (
    <>
      {[1, 2, 3, 4].includes(Number(type)) && (
        <Box>
          <Typography variant="h6" marginY={2}>
            Primary Criteria (Pick At Least 1)
          </Typography>

          {[1, 2, 4].includes(Number(type)) ? (
            <Grid container spacing={3}>
              {mapTypeToPrimaryCriteria[type].map((value) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <TextField label={value} fullWidth />
                </Grid>
              ))}
            </Grid>
          ) : (
            <FormControl fullWidth>
              <InputLabel id="bl-btwn-label">Balance Between</InputLabel>
              <Select
                id="bl-btwn"
                label="Balance Between"
                labelId="bl-btwn-label"
              >
                <MenuItem value={1}>{"< $1,000.00"}</MenuItem>
                <MenuItem value={2}>{"$1,000.00 - $4,999.99"}</MenuItem>
                <MenuItem value={3}>{"$5,000.00 - $9,999.99"}</MenuItem>
                <MenuItem value={4}>{"> $10,000.00"}</MenuItem>
              </Select>
            </FormControl>
          )}
        </Box>
      )}
    </>
  );
};

const SecondaryCriteria = ({ type }: { type: string }) => {
  return (
    <>
      {[1, 2, 3, 4].includes(Number(type)) && (
        <Box>
          <Typography variant="h6" marginY={2}>
            Secondary Criteria (Optional)
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: [1, 3].includes(Number(type)) ? 12 : 6 }}>
              <FormControl fullWidth>
                <InputLabel id="tx-yr-label">Tax Year</InputLabel>
                <Select id="tx-yr" label="Tax Year" labelId="tx-yr-label">
                  <MenuItem value={1}>2024</MenuItem>
                  <MenuItem value={2}>2023</MenuItem>
                  <MenuItem value={3}>2022</MenuItem>
                  <MenuItem value={4}>2021</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {2 === Number(type) && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel id="prj-type-label">Project Type</InputLabel>
                  <Select
                    id="prj-type"
                    label="Project Type"
                    labelId="prj-type-label"
                  >
                    <MenuItem value={1}>Sewer and Water</MenuItem>
                    <MenuItem value={2}>Street Assessment</MenuItem>
                    <MenuItem value={3}>Street Lighting</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}

            {4 === Number(type) && (
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl fullWidth>
                  <InputLabel id="abs-type-label">Abstract Type</InputLabel>
                  <Select
                    id="abs-type"
                    label="Abstract Type"
                    labelId="abs-type-label"
                  >
                    <MenuItem value={1}>Business</MenuItem>
                    <MenuItem value={2}>Individual</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
          </Grid>
        </Box>
      )}
    </>
  );
};

const Criteria = ({ type }: { type: string }) => {
  return (
    <>
      <PrimaryCriteria type={type} />
      <SecondaryCriteria type={type} />
    </>
  );
};

export default Criteria;
