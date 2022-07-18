import { Dialog, Transition } from '@headlessui/react'
import { SpeakerphoneIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const networks = {
  1: "Ethereum Main Network",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  0x539: "Ganache",
}

const column1 = [
  // { name: 'Empresas', href: '/business'},
  // { name: 'teach_on_vudera', href: '/teach' },
  // { name: 'download_app', href: '/app' },
  { name: 'Nosotros', href: '/about' },
  { name: 'Ayuda', href: '/resources' },
]

const column2 = [
  { name: 'Carreras', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  
  // { name: 'affiliate', href: '/affiliate' },
]

const column3 = [
  // { name: 'Terminos', href: '/terms' },
  // { name: 'Privacidad', href: '/privacy' },
  // { name: 'sitemap', href: '/api/sitemap' },
]

function Footer ({
  network
}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
      <>
      

      <footer className="bg-gray-footer-500 dark:bg-dark-main font-sofiapro-regular">
        

        <div className=" max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className=" xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul className=" space-y-1">
                      {column1.map((item) =>( 
                          <NavLink to={item.href} key={item.name}
                          >
                          <li >
                              <span className={`${window.location.pathname == item.href && "text-white"} cursor-pointer text-sm font-medium text-gray-300 hover:text-white`}>
                                {item.name}
                              </span>
                          </li>
                          </NavLink>
                      ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <ul className=" space-y-1">
                      {column2.map((item)=>(
                          <Link to={item.href} key={item.name}>
                          <li >
                              <span className={`${window.location.pathname == item.href && "text-white"} cursor-pointer text-sm font-medium text-gray-300 hover:text-white`}>
                                {item.name}
                              </span>
                          </li>
                          </Link>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <ul className=" space-y-1">
                      {column3.map((item)=>(
                          <Link to={item.href} key={item.name}>
                          <li >
                              <span className={`${window.location.pathname == item.href && "text-white"} cursor-pointer text-sm font-medium text-gray-300 hover:text-white`}>
                                {item.name}
                              </span>
                          </li>
                          </Link>
                      ))}
                  </ul>
                </div>
                <div className="mt-8 xl:mt-0">
                  <button type="button" onClick={openModal} className="inline-flex items-center transition duration-300 px-4 py-2 border-white hover:border-blue-500 border-2 shadow-sm text-sm font-medium text-white bg-gray-footer-500 hover:bg-blue-500 hover:text-white rounded-md focus:outline-none ">
                    <Transition.Root show={isOpen} as={Fragment}>
                      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto"  onClose={setIsOpen}>
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                          >
                              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                          </Transition.Child>

                          {/* This element is to trick the browser into centering the modal contents. */}
                          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                              &#8203;
                          </span>
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                              enterTo="opacity-100 translate-y-0 sm:scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div>
                                    
                                    <div className="mt-3 sm:mt-5">
                                    <Dialog.Title as="h3" className="text-xl leading-6 font-bold text-gray-900">
                                      Recibe Noticias Importantes
                                    </Dialog.Title>
                                    
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 sm:grid grid-cols-3 sm:gap-3 sm:grid-flow-row-dense">
                                
                                  Subbscribe form here
                                  
                                </div>
                                
                              </div>
                            </Transition.Child>
                        </div>
                      </Dialog>
                    </Transition.Root>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                      Subscribe
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-8  text-gray-400 pt-8 md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2 text-xs text-white font-semibold">
                  <span>&copy; 2022 | <a target="_blank" className='text-blue-500 hover:text-blue-600'  href="https://uridium.network">Uridium Network</a></span> 
              </div>
              <p className="mt-8 md:mt-0 md:order-1">
              
                  
              
              </p>
          </div>
        </div>
        
      </footer>
      </>
    )
  }

const mapStateToProps=state=>({
  network: state.web3.network
})


export default connect(mapStateToProps,{

})(Footer)