import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Alert from 'components/alert'
import Navbar from 'components/navigation/Navbar';
import Footer from 'components/navigation/Footer';

import { loadEthereumWallet, setEthereumWallet, get_network_id } from 'redux/actions/web3';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const FullWidthLayout = ({
    children,
    get_network_id,
    account
}) => {

    useEffect(()=>{
        window.ethereum.on('chainChanged', (_chainId) => window.location.reload());
        window.ethereum.on('accountsChanged',(_account) => console.log(_account));
    },[])
    
    get_network_id()

    if(!account)
        return <Navigate to='/connect'/>

    return(
        <div className='bg-white dark:bg-dark-bg overflow-x-hidden'>
            
            {/* Header */}
            <Navbar/>

            <ToastContainer autoClose={5000} />
                
                {/* Main Content */}
                <div className="">
                    <div className="w-full pt-10 md:pt-16 lg:pt-16 xl:pt-16 px-2">
                    {children}
                    </div>
                </div>

            <Alert/>

            <Footer/>
        </div>
    )
}

const mapStateToProps =state=>({
    account: state.web3.account,
    network: state.web3.network,
})

export default connect(mapStateToProps,{
    loadEthereumWallet,
    setEthereumWallet,
    get_network_id,
}) (FullWidthLayout)