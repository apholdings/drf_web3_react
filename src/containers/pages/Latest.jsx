import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"

function Latest({
}) {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <FullWidthLayout>
            
            Latest
            
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{
})(Latest)