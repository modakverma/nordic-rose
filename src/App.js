import PagesRouter from './router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-new-york">
      <QueryClientProvider client={queryClient}>
        <PagesRouter />
       <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
