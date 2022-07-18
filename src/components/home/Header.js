import { Link } from 'react-router-dom';

const Header = () => {

    return(
        <>
        <main className=" mx-auto max-w-7xl px-4 sm:px-6  bg-[url('https://bafybeibplczbkhrpmrq272kco5xenr4elvyxhet666jyj56cfejwe4dl4y.ipfs.dweb.link/ecommerce.png')]" >
          <div className="lg:grid lg:grid-cols-7 lg:gap-8 ">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left mt-6">
              <h1>
                <span className="mt-8 block text-4xl tracking-tight font-gilroy-bold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Compra y vende </span><span className="text-blue-500">productos digitales.</span>
                </span>
              </h1>

              <p className="mt-3 text-base font-gilroy-regular text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Mercado decentralizado para comprar y vender productos digitales.
              </p>

                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="">
                        <Link
                        to="/explore"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-gilroy-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 md:py-3 md:text-lg md:px-10"
                        >
                        Explorar
                        </Link>
                    </div>
                    <div className="mt-3  sm:mt-0 sm:ml-3">
                        <Link
                        to="/sell"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-gilroy-medium rounded-md text-blue-500 bg-white hover:text-blue-600 md:py-4 md:text-lg md:px-10"
                        >
                        Vender
                        </Link>
                    </div>
                </div>
              
              <Link to='/about' className="my-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 inline-flex text-blue-500 hover:text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <p className="ml-2 text-base font-gilroy-medium">Aprende mas sobre uridium</p>
              </Link>

            </div>
            
          </div>

          <div className="bg-white mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://bafybeifc6d66nqr4p767aai6k5sv2ezocikw6t3dc7csaahp5knfrededi.ipfs.dweb.link/ethereumgray.png" alt="Ethereum" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://bafybeib6f46aylzvadohrdet5226kvxt4ydvlqu2olkq4bwmlivrhiguau.ipfs.dweb.link/polygon.png" alt="Polygon" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://bafybeidnjp44w4ot5d2x2w6bwn7fkdevxgbrv3ul6d76lgzdc3qfnwptnq.ipfs.dweb.link/mmeta.png" alt="Metamask" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://bafybeibug3xg4lpcnsz66bmnvk24coelotber7jlrxzq4v6bbeyfmiljqy.ipfs.dweb.link/uridium_gray.png"
                    alt="Transistor"
                  />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>

        </main>

        </>
    )
}

export default Header