import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

// Material UI Imports
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["poppins"],
  },
  palette: {
    primary: {
      main: "#1f1f1f",
    },
    accent: {
      main: "#53ACFF",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Grid container spacing={0}>
          <Grid lg={2} md={1} sm={2} xs={1.25}>
            <SideBar />
          </Grid>

          <Grid lg={6} md={7} sm={10} xs={10.75}>
            <Header />
            <Cards />
          </Grid>

          <Grid
            lg={4}
            md={4}
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          >
            <Filter />
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
