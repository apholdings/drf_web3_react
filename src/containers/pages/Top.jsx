import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react"
import { connect } from "react-redux"

function Top({
}) {

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <FullWidthLayout>
            
            Top
            
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps,{
})(Top)