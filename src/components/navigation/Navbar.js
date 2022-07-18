import { connect } from "react-redux";
import { Fragment, useState } from 'react';
import { Menu, Transition, Dialog } from '@headlessui/react'
import { setAlert } from "redux/actions/alert";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/animations/scale.css';
import { Link, NavLink } from "react-router-dom"
import {CopyToClipboard} from 'react-copy-to-clipboard'

import {
    BellIcon,
  ChatIcon,
  SearchIcon,
  
} from "@heroicons/react/outline"

import { XIcon, } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar({
    account,
    setAlert,
    my_user
}){
    const [effectLogin, setEffectLogin] = useState(false);
    const [effectHeart, setEffectHeart] = useState(false);
    const [effectMessage, setEffectMessage] = useState(false);

    let unread_messages = 1
    
    const authLinks = (
        <Fragment>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                <Menu.Button
                onMouseDown={() => setEffectLogin(true)}
                onMouseUp={() => setEffectLogin(false)}
                className={`${  effectLogin && "animate-click"}  transition  ease-in-out inline-block md:h-10 h-8 md:w-10 w-8 rounded-full overflow-hidden dark:bg-dark-second bg-gray-50 hover:bg-gray-100 dark:hover:bg-dark-third`}>
                    
                    <img
                    className="inline-block h-10 w-10 rounded-full object-cover"
                    src={my_user ? my_user.picture : "https://bafybeifj5uqweywvl5ahmytom772hqux3aae2kigshdvqmm54praci6c7y.ipfs.dweb.link/user_default_profile.png"}
                    />
                </Menu.Button>
                </div>

                <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-dark-second ring-1 ring-black ring-opacity-5 divide-y dark:divide-dark-third divide-gray-100 focus:outline-none">
                    <div className="px-4 py-3">
                    <p className="text-sm dark:text-dark-txt font-gilroy-regular">Conectado como:</p>
                        <p className="text-sm font-medium text-gray-900 truncate grid grid-cols-2">
                        
                            <span className="my-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-gilroy-bold shadow cursor-pointer dark:bg-white hover:text-blue-500">
                                {
                                account ?
                                <>{account.slice(0,4)}...{account.slice(-4)}</>:<></>
                                }
                            </span>
                            
                            <CopyToClipboard text={account}>
                            <button onClick={()=>{
                                setAlert('Copiado', 'green')
                            }} className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                            </button>
                            </CopyToClipboard>
                        </p>
                    </div>
                    <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <a
                            href={`/profile/${account}`}
                            className={classNames(
                            window.location.pathname == `/profile/${account}` ? 'dark:bg-dark-main bg-gray-100 dark:text-dark-txt text-gray-900' :  'dark:hover:bg-dark-third hover:bg-gray-50 text-gray-700 dark:text-dark-txt',
                            'block px-4 py-2 text-sm font-gilroy-semibold'
                            )}
                        >
                            Perfil
                        </a>
                        )}
                    </Menu.Item>
                    
                    
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <button
                            onClick={()=>{
                                localStorage.removeItem('account');
                                setTimeout(window.location.href="/",2000)
                            }}
                            className={classNames(
                                active ? 'dark:bg-dark-main bg-gray-100 dark:text-dark-txt text-gray-900' : 'dark:hover:bg-dark-third hover:bg-gray-50 text-gray-700 dark:text-dark-txt',
                                'block w-full text-left px-4 py-2 text-sm font-gilroy-semibold'
                            )}
                            >
                            Desconectar
                            </button>
                        )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
            </Menu>
        </Fragment>
    )

    
    const guestLinks = (
        <Fragment>
            <NavLink
            to='/connect'
                onMouseDown={() => setEffectLogin(true)}
                onMouseUp={() => setEffectLogin(false)}
                className={`${  effectLogin && "animate-click"}  transition  ease-in-out inline-flex items-center justify-center md:px-4 px-2 py-1 md:py-3 dark:hover:text-blue-500 hover:text-blue-500 rounded-lg border shadow sm:text-md text-sm md:text-lg font-gilroy-bold dark:border-dark-third hover:dark:text-dark-txt hover:dark:bg-dark-third text-dark bg-white hover:bg-gray-100 dark:bg-dark-second dark:text-dark-txt`}>
                    Conectar
            </NavLink>  
        </Fragment>
    )

    // SEARCH
    const [term,setTerm]=useState('')
    const [effectSearch, setEffectSearch] = useState(false);

    let handler;

    const handleChange=e=>{
        setTerm(e.target.value)
    }

    const onSubmit= e =>{
        e.preventDefault()
        handler = setTimeout(() => window.location.href=('/search/'+term), 0.2);
        setTerm('')
    }


    return(
    <>
        <nav className="bg-white dark:bg-dark-main h-14 md:h-16 w-full flex flex-col md:flex-row items-center justify-center md:justify-between fixed top-0 z-50 shadow-lg dark:border-dark-second">
            {/* Left Navigation */}
            <div className="flex items-center justify-between w-full md:w-max md:px-4 pl-2 pr-4 py-2">
                {/* LOGO */}
                <div className="flex-shrink-0 flex items-center">
                    <Link to="/">
                    <img
                        src="https://bafybeid6zqgfga36wxrdohicgp3wluq33r5pagbcdaz6jamd3z7fjl4luq.ipfs.dweb.link/Uridium_new_logo.png"
                        width={30}
                        height={20}
                        layout="fixed"
                        alt=""
                        className="dark:hidden  flex"
                    />
                    
                    {/* <img
                        src="https://bafybeiebrtsd7ekcvmnrdi6uzhnfpmh3zv75vjidwxjy4ng5eaw4hrjcqe.ipfs.dweb.link/uridium_new_black.png"
                        width={90}
                        height={80}
                        layout="fixed"
                        alt=""
                        className="dark:hidden lg:flex md:hidden hidden mb-1"
                    /> */}

                    <img
                        src="https://bafybeigwlojghhl5v5iq6cmnl6jqyegakfygugu6c4b3jchytuztdosnxq.ipfs.dweb.link/Uridium_new_logo_white.png"
                        width={30}
                        height={20}
                        layout="fixed"
                        alt=""
                        className="hidden md:hidden dark:flex"
                    />
                    </Link>
                    
                    <div>
                        {
                            localStorage.getItem('theme') === 'dark' ? 
                            <button onClick={()=>{
                                localStorage.setItem('theme', 'light')
                                document.documentElement.classList.remove('dark');
                                window.location.reload(false)
                            }}>
                                <i className='bx bx-sun dark:text-dark-txt hover:text-blue-500 dark:hover:text-blue-500 ml-4 inline-flex text-xl'></i>
                            </button>
                            : 
                            <button onClick={()=>{
                                localStorage.setItem('theme', 'dark')
                                document.documentElement.classList.add('dark');
                                window.location.reload(false)
                            }}>
                                <i className='bx bx-moon dark:text-dark-txt hover:text-blue-500 dark:hover:text-blue-500 ml-4  inline-flex text-xl'></i>
                            </button>
                        }
                        
                    </div> 
                    

                    <div className="md:hidden flex">
                    {/* Search */}
                    <Tippy
                        animation={'scale'}
                        theme={'light'} 
                        interactive={true} 
                        placement='bottom'
                        offset={[-0,10]}
                        trigger='click'
                        className=""
                        arrow=""
                        content={
                        <div>
                        <form onSubmit={(e)=>onSubmit(e)}  className="md:hidden items-center w-full transition duration-500 ease-in-out rounded-full px-2 py-1 ">
                            <button className="w-1/12 text-xl inline-flex items-center justify-center rounded-full"
                            >
                                <SearchIcon className="h-5 w-5 text-gray-400 hover:text-gray-700" aria-hidden="true" />
                            </button>
                        
                            <input 
                            autoComplete="off" 
                            required 
                            value={term} 
                            onChange={handleChange} 
                            type="text" 
                            name="search_box" 
                            placeholder="Busca en Uridium" 
                            className="font-regular text-md w-10/12 py-1 focus:ring-gray-100 focus:border-gray-100 hover:placeholder-gray-400 focus:placeholder-gray-400 dark:placeholder-dark-txt focus:text-gray-600 dark:text-dark-txt text-gray-600 focus:outline-none focus:border-none border-none outline-none bg-transparent"
                            />
                        </form>
                        </div>
                        }
                        >
                        <button 
                        onMouseDown={() => setEffectSearch(true)}
                        onMouseUp={() => setEffectSearch(false)}
                        className={`${  effectSearch && "animate-click"} text-2xl grid place-items-center md:hidden rounded-full sm:w-10 w-8 sm:h-10 h-8 cursor-pointer hover:text-blue-500 text-gray-700  dark:text-dark-txt`} id="dark-mode-toggle-mb">
                            <SearchIcon className="sm:h-5 h-5 sm:w-5 w-5" aria-hidden="true" />
                        </button>
                    </Tippy>
                    </div>
                </div>
                {/* Small Device icons */}
                <div className="md:hidden ml-2 flex items-center justify-between space-x-1">
                
                    <NavLink to="/explore">

                    <i className='bx bx-compass text-xl dark:text-dark-txt dark:hover:text-blue-500'></i>
                    </NavLink>

                    <NavLink to="/resources"><i className='bx bx-file-blank text-xl dark:text-dark-txt dark:hover:text-blue-500'></i></NavLink>

                    <NavLink to="/sell"><i className='bx bx-plus-circle text-xl mr-2 dark:text-dark-txt dark:hover:text-blue-500' ></i></NavLink>

                    {
                        account ?
                        authLinks:guestLinks
                    }
                </div>
            </div>

            {/* Main Navigation */}
            <form className="hidden md:flex items-center  w-9/12 bg-search dark:bg-dark-bg border dark:border-2 border-gray-600 dark:border-dark-third hover:border-gray-700 rounded-full px-2 py-2">
                <button className="w-1/12 text-2xl flex items-center justify-center rounded-full">
                    <SearchIcon className="h-6 w-6 text-gray-400 dark:text-dark-txt hover:text-gray-700 " aria-hidden="true" />
                </button>
                <input autoComplete="off" required  type="text" name="search_box" 
                placeholder="Busca lo que sea" className="font-gilroy-regular w-10/12 py-1 dark:focus:ring-dark-second focus:ring-gray-50 focus:border-gray-50 hover:placeholder-gray-400 focus:placeholder-gray-400 focus:text-gray-600 dark:focus:text-dark-txt text-gray-600 focus:outline-none focus:border-none border-none outline-none bg-transparent text-sm" />
            </form>

            {/* Right Navigation */}
            <NavLink to='/latest' className={`ml-6 md:mr-2 hidden md:inline-flex text-gray-800 font-gilroy-bold text-md dark:hover:text-blue-500 hover:text-blue-500 dark:text-dark-txt  cursor-pointer`}>
                Latest
            </NavLink>
            <NavLink to='/top' className={`ml-4 md:mr-2 hidden md:inline-flex text-gray-800 font-gilroy-bold text-md dark:hover:text-blue-500 hover:text-blue-500 dark:text-dark-txt  cursor-pointer`}>
                Top
            </NavLink>
            <NavLink to='/explore' className={`ml-4 hidden md:inline-flex text-gray-800 font-gilroy-bold text-md dark:hover:text-blue-500 hover:text-blue-500 dark:text-dark-txt  cursor-pointer`}>
                Explore
            </NavLink>
            <ul className="hidden md:flex mx-4 items-center justify-center">
                {
                account ?
                authLinks:guestLinks
                }
            </ul>
        </nav>
    </>
    )
}

const mapStateToProps=state=>({
    account: state.web3.account
})

export default connect(mapStateToProps,{
    setAlert,
})(Navbar)