import React from 'react'
import { Link } from 'react-router-dom'
// import { UncontrolledTooltip } from 'reactstrap'
import { Landlord } from '../../../models/landlordModels'

interface PropsLandlord {
    landlord: Landlord
}

export const CardLandlord = (props: PropsLandlord) => {
    const { landlord } = props
    return (
        <tr>
            <td>
                {landlord.img === 'Null' ? (
                    <div className="avatar-xs">
                        <span className="avatar-title rounded-circle">{landlord.last_name.charAt(0)}</span>
                    </div>
                ) : (
                    <div>
                        <img className="rounded-circle avatar-xs" src={landlord.img} alt="" />
                    </div>
                )}
            </td>
            <td>
                <h5 className="font-size-14 mb-1">
                    <Link to="#" className="text-dark">
                        {landlord.last_name} {landlord.first_name} {landlord.middle_name}
                    </Link>
                </h5>
                <p className="text-muted mb-0">{landlord.note}</p>
            </td>
            <td>{landlord.amount_of_land}</td>
            <td>
                <Link to="#" id={'message' + landlord.id}>
                    {landlord.cost_of_year}
                </Link>
            </td>
            <td>
                <li className="list-inline-item px-2">
                    <Link to="#" id={'profile' + landlord.id}>
                        {landlord.contact_number}
                    </Link>
                </li>
            </td>
        </tr>
    )
}
