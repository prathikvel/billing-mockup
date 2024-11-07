import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

import SearchForm from "./components/SearchForm";
import ResultsTable from "./components/ResultsTable";

interface TabPanelProps {
  value: number;
  index: number;
  children?: React.ReactNode;
}

const TabPanel = ({ value, index, children, ...other }: TabPanelProps) => (
  <div hidden={value !== index} {...other}>
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
);

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_: React.SyntheticEvent, v: number) => setValue(v);

  return (
    <Container maxWidth="md">
      <Typography variant="h2">Tax Bill PWA Mockup</Typography>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Search Form" />
            <Tab label="Results Table" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <SearchForm />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ResultsTable />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default App;
