import { CryptoContextProvider } from './context/crypto-context';
import AppLayout from './components/layuot/AppLayout';



export default function App() {
  return (
    <CryptoContextProvider>
   <AppLayout></AppLayout>
    </CryptoContextProvider>
)
}



