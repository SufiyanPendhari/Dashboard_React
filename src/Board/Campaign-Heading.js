import CheckBox from './CheckBox'
import '../App.css'

function CampaignHeader() {
    return (
        <div className="CH">
            <div className="ch1"><CheckBox title="Campaign Name"/></div>
            <div className="ch2">Status</div>
            <div className="ch3">Created at</div>
            <div className="ch4">Method</div>
            <div className="ch5">Media</div>
            <div className="ch">Actions</div>
        </div>
    )
}

export default CampaignHeader