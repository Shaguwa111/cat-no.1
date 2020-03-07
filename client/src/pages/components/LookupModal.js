import React from 'react'
import ReactDOM from 'react-dom'
import LookupDetails from './LookupDetails'

const LookupModal = ({ item, setSelectedItem }) => {
    if (item) {
        return ReactDOM.createPortal(
            <React.Fragment>
                <div className="modal-overlay">
                    <div className="modal-wrapper" onClick={() => setSelectedItem(null)}>
                        <div className="lookup-modal" onClick={e => e.stopPropagation()}>
                            <div className="lookup-modal-header">
                                Product Details
                            </div>
                            <LookupDetails selectedItem={item} setSelectedItem={setSelectedItem}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>, document.body
        )
    } else {
        return null
    }
}

export default LookupModal