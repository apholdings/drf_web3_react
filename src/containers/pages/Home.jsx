import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { get_blog_list } from "redux/actions/blog";
import { get_categories } from "redux/actions/categories";

function Home({
    get_categories,
    categories,
    get_blog_list,
    
}) {

    const [count, setCount] = useState()
    const [next, setNext] = useState()
    const [posts, setPosts] = useState()
    const [previous, setPrevious] = useState()

    useEffect(()=>{
        window.scrollTo(0, 0);
        get_categories()
        fetch(`${process.env.REACT_APP_API_URL}/api/blog/`)
          .then((res)=> res.json())
          .then((data)=>{
            setPosts(data.results.posts)
            setCount(data.count)
            setNext(data.next)
            setPrevious(data.previous)
          })
      },[])

      const [active, setActive] = useState(1);
      const [listingsPerPage, setListingsPerPage] = useState(6);
      const [currentPage, setCurrentPage] = useState(1);

      const indexOfLastListing = currentPage * listingsPerPage;
      const indexOfFirstListing = indexOfLastListing - listingsPerPage;
      const currentListings = posts && posts.slice(indexOfFirstListing, indexOfLastListing);

      const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
        fetch(`${process.env.REACT_APP_API_URL}/api/blog/?p=${page}`)
          .then((res)=> res.json())
          .then((data)=>{
            setPosts(data.results.posts)
            setCount(data.count)
            setNext(data.next)
            setPrevious(data.previous)
          })
      }

      const previous_number = () => {
        window.scrollTo(0, 0);
          if (currentPage !== 1) {
              setCurrentPage(currentPage-1);
              setActive(currentPage-1);
              fetch(`${process.env.REACT_APP_API_URL}/api/blog/?p=${currentPage-1}`)
              .then((res)=> res.json())
              .then((data)=>{
                setPosts(data.results.posts)
                setCount(data.count)
                setNext(data.next)
                setPrevious(data.previous)
              })
          }
      };

      const next_number = () => {window.scrollTo(0, 0);
        if (currentPage !== Math.ceil(posts.length/3)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
            fetch(`${process.env.REACT_APP_API_URL}/api/blog/?p=${currentPage+1}`)
            .then((res)=> res.json())
            .then((data)=>{
              setPosts(data.results.posts)
              setCount(data.count)
              setNext(data.next)
              setPrevious(data.previous)
            })
        }
      };

      const getNumbers = () => {
        let numbers = [];
        let itemsPerPage = listingsPerPage;
        let pageNumber = 1;
  
        for (let i = 0; i < count; i += itemsPerPage) {
            const page = pageNumber;
            let content = null;
  
            if (active === page) {
                content = (
                    <div key={i} className={`hidden md:-mt-px md:flex`}>
                        <div className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        {pageNumber}
                        </div>
                    </div>
                );
            }
            else {
                content = (
                    <div key={i} onClick={() => {
                      visitPage(page)
                      }} className={`hidden md:-mt-px md:flex`}>
                      <div className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        {pageNumber}
                      </div>
                    </div>
                );
            }
  
            numbers.push(
                content
            );
            pageNumber++;
        }
  
        return numbers;
    };
    
    return (
        <FullWidthLayout>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
            <div className="max-w-5xl mx-auto">

                {/* Categories */}
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-6 lg:max-w-none">
                {
                    categories ?
                    categories.map((category, index)=>(
                        <a href={`/category/${category.id}`} key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden w-full">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={category.thumbnail} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                
                                <a href={`/category/${category.id}`} className="block mt-2">
                                    <p className="text-xl font-semibold justify-center text-center text-gray-900">{category.name}</p>
                                </a>
                                </div>
                                
                            </div>
                        </a>
                        ))
                        :
                        <>Loading categories</>
                    }
                </div>

            </div>
            </div>

            <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Press</h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">Get weekly articles in your inbox on how to grow your business.</p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  className="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts && posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="mt-3">
                <a href={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

            <nav className=" border-gray-200 px-4 mt-20 flex items-center justify-between sm:px-0">
               {currentPage !== 1 ?
                <div className="-mt-px w-0 flex-1 flex">
                  <div
                    onClick={()=>{previous_number()}}
                    className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    Previous
                  </div>
                </div>
                :
                <div className="-mt-px w-0 flex-1 flex">
                  <div
                    
                    className="cursor-pointer border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  >
                    
                  </div>
                </div>
                }
                
                {getNumbers()}

                {
                    currentPage === count ?
                    <></>
                    :
                    <div className="-mt-px w-0 flex-1 flex justify-end">
                    <button
                        onClick={()=>{next_number()}}
                        className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    >
                        Next
                        <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </button>
                    </div>
                }
              </nav>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list
})(Home)