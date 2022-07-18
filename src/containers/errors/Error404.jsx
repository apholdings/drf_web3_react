import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom"


const Error404 = () =>{

    const navigate = useNavigate()

    return(
        <FullWidthLayout>
           <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid  md:place-items-center lg:px-8">
                <div className="max-w-max mx-auto">
                <main className="sm:flex">
                    <p className="text-4xl font-gilroy-bold text-blue-600 sm:text-5xl">404</p>
                    <div className="sm:ml-6">
                    <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                        <h1 className="text-4xl font-gilroy-bold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
                        <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
                    </div>
                    <div className="mt-10 flex font-gilroy-regular space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                        <button
                        onClick={()=>navigate(-1)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-gilroy-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                        Go back
                        </button>
                        <Link
                        to="/resources"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-gilroy-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                        Contact support
                        </Link>
                    </div>
                    </div>
                </main>
                </div>
            </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    
  })
  
  export default connect(mapStateToProps, {
    
  }) (Error404)