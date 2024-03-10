import PagesRouter from './router';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <div className="font-new-york2">
      <QueryClientProvider client={queryClient}>
        <PagesRouter />
        fasdfa
       <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
