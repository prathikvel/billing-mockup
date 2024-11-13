import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import Dropdown from "./Dropdown";
import { SEARCH_TYPES, PRIMARY_CRITERIA } from "../mockData";

const PrimaryCriteria = ({ type }: { type: string }) => {
  let inputs: JSX.Element | null;
  switch (type) {
    case "Bill Search":
    case "Special Assessment Search":
    case "Personal Property Search":
      inputs = (
        <Grid container spacing={3}>
          {PRIMARY_CRITERIA[type].map((value, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <TextField label={value} fullWidth />
            </Grid>
          ))}
        </Grid>
      );
      break;

    case "Delinquent Bill Search":
      inputs = (
        <Dropdown
          label="balance"
          items={[
            "< $1,000.00",
            "$1,000.00 - $4,999.99",
            "$5,000.00 - $9,999.99",
            "> $10,000.00",
          ]}
        />
      );
      break;

    default:
      inputs = null;
  }

  if (SEARCH_TYPES.includes(type)) {
    return (
      <Box>
        <Typography variant="h6" marginY={2}>
          Primary Criteria (Pick At Least 1)
        </Typography>

        {inputs}
      </Box>
    );
  }

  return null;
};

const SecondaryCriteria = ({ type }: { type: string }) => {
  const taxYear = (
    <Dropdown label="tax-year" items={["2024", "2023", "2022", "2021"]} />
  );

  let inputs: JSX.Element | null;
  switch (type) {
    case "Special Assessment Search":
      inputs = (
        <Dropdown
          label="project-type"
          items={["Sewer and Water", "Street Assessment", "Street Lighting"]}
        />
      );
      break;

    case "Personal Property Search":
      inputs = (
        <Dropdown label="abstract-type" items={["Business", "Individual"]} />
      );
      break;

    default:
      inputs = null;
  }

  if (SEARCH_TYPES.includes(type)) {
    return (
      <Box>
        <Typography variant="h6" marginY={2}>
          Secondary Criteria (Optional)
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: inputs && 6 }}>{taxYear}</Grid>
          {inputs && <Grid size={{ xs: 12, sm: 6 }}>{inputs}</Grid>}
        </Grid>
      </Box>
    );
  }

  return null;
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
