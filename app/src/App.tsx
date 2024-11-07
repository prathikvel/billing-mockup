import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Item One" />
            <Tab label="Item Two" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Container>
  );
};

export default App;
