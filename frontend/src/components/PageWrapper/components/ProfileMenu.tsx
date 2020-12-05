import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import user1 from '../../../assets/images/users/avatar-3.jpg'
import { useStore } from '../../../stores/store'

export const ProfileMenu = () => {
    const { userStore } = useStore()
    const [menu, setMenu] = useState(false)
    const { logout } = userStore
    const [username] = useState('Admin')
    return (
        <React.Fragment>
            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block">
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    <img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ml-2 mr-1">{username}</span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </DropdownToggle>
                <DropdownMenu right>
                    <div onClick={logout} className="dropdown-item logout">
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                        <span>Logout</span>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}
