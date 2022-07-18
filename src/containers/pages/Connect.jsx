/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon, ChevronDownIcon, MailIcon } from '@heroicons/react/solid'
import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import { useEffect } from 'react'
import { Disclosure } from '@headlessui/react'

import { loadEthereumWallet } from 'redux/actions/web3'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { create_user } from 'redux/actions/user'

  const faqs = [
    {
      question: "Como instalar una billetera?",
      answer:
        "Debes instalar un widget para tu buscador llamado 'Metamask'. Ingresa a https://metamask.io luego sigue los pasos del sitio web.",
    },
    {
      question: "Hago click y no ocurre nada...",
      answer:
        "Instala una billetera web3 'Metamask' en tu buscador y verifica que la ventana de hacer login no este oculta.",
    },
    // More questions...
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Connect({
  loadEthereumWallet,
  account,
  create_user
}) {

  useEffect(()=>{
      window.scrollTo(0, 0);
    },[])

  return (
      <FullWidthLayout>

        <div className="">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-xl font-gilroy-bold dark:text-dark-txt text-gray-900 sm:text-2xl sm:tracking-tight lg:text-3xl">
                        Login con Web3
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl dark:text-dark-txt text-gray-500">
                        Conecte con uno de nuestros proveedores de billeteras.
                    </p>
                </div>

                <br/>

                <div className=" dark:bg-dark-second hover:dark:bg-dark-third shadow overflow-hidden sm:rounded-md">
                    <ul role="list" className="divide-y divide-gray-200">
                    <li>
                            <div className="block hover:dark:bg-dark-third transition duration-300 ease-in-out cursor-pointer" onClick={()=>{
                              loadEthereumWallet()
                              
                              }}>
                            <div className="flex items-center px-4 py-4 sm:px-6">
                                <div className="min-w-0 flex-1 flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 rounded-full" src="https://bafybeig2busro4zb47v54tvsfrm65k7342e5pojww26ys2bi2msxhf6ei4.ipfs.dweb.link/metamask-2728406-2261817.webp" alt="" />
                                </div>
                                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                    <div>
                                    <p className="text-sm font-medium dark:text-dark-txt text-gray-800 truncate">Metamask</p>
                                    
                                    </div>
                                    <div className="hidden md:block">
                                    <div>
                                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                          Popular
                                      </span>
                              
                                    </div>
                                    {/* <div className="hidden md:block">
                                      <div>
                                        
                                        <p className="mt-2 flex items-center text-sm text-gray-500">
                                          <CheckCircleIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" aria-hidden="true" />
                                          Conectado
                                        </p>
                                      </div>
                                    </div> */}
                                    </div>
                                </div>
                                </div>
                                <div>
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                            </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
          
        <div className="max-w-7xl mx-auto py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 dark:divide-dark-second divide-gray-200">
          <h2 className="text-center text-xl font-gilroy-semibold dark:text-dark-txt text-gray-900 sm:text-2xl">Preguntas Frecuentes</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-dark-second">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start dark:text-dark-txt text-gray-400">
                        <span className="font-medium dark:text-dark-txt text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base dark:text-dark-txt text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
      <br/>
    </FullWidthLayout>
  )
}


const mapStateToProps =state=>({
  account: state.web3.account,
})

export default connect(mapStateToProps,{
  loadEthereumWallet,
  create_user
}) (Connect)