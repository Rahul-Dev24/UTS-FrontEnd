import { Card } from '@mui/material'
import "./TopSection.css"
const TopSection = () => {
    return (
        <div className="topSectionContainer">
            <div className="row">
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/cancel_ticket_uts.png" width={20} height={20} />
                    <p>CANCEL TICKET</p>
                </Card>
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/booking_history_uts.png" width={20} height={20} />
                    <p>BOOKING HISTORY</p>
                </Card>
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/show_booked_ticket_uts.png" width={20} height={20} />
                    <p>SHOW TICKET</p>
                </Card>
            </div>
            <div className="row">
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/wallet_1_uts.png" width={20} height={20} />
                    <p>R-WALLET</p>
                </Card>
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/profile_avatar_uts.png" width={20} height={20} />
                    <p>PROFILE</p>
                </Card>
                <Card sx={{ borderRadius: 0, paddingTop: "5px" }}>
                    <img src="/payment_option_uts.png" className="payment" width={20} height={20} />
                    <p>TRANSACTIONS</p>
                </Card>
            </div>
        </div>
    )
}

export default TopSection
