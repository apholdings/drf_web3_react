import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"

function Explore({
}) {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <FullWidthLayout>
            
            Explore
            
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{
})(Explore)