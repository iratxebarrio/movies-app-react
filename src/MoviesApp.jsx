
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {ThemeProvider} from 'styled-components';
import { Themes } from "./Theme/Themes";
import { useSelector } from "react-redux";



const queryClient = new QueryClient();


function MoviesApp() {
  const {theme} = useSelector((state) => state.settings)

 
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Themes[theme]} >
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
      <ReactQueryDevtools />
      </ThemeProvider>

    </QueryClientProvider>
  );
}

export default MoviesApp;
