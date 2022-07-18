
import Header from "components/home/Header";
import LeftSidebar from "components/navigation/sidebars/LeftSidebar";
import RightSidebar from "components/navigation/sidebars/RightSidebar";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"

function Home({
}) {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <FullWidthLayout>
            
            <Header/>
            
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{
})(Home)