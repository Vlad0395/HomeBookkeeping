import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.svg'
import logoLightPng from '../../../assets/images/logo-light.png'
import logoLightSvg from '../../../assets/images/logo-light.svg'
import logoDark from '../../../assets/images/logo-dark2.png'
import { withStore } from '../../../stores/store'
import { ProfileMenu } from './ProfileMenu'
import { observer } from 'mobx-react'
import { HeaderStore } from '../../../stores/headearStore'

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

interface PropsWrapper {
    headerStore?: HeaderStore
}

const WrapperHeader = (props: PropsWrapper) => {
    console.log('this.props', props)
    const { headerStore } = props
    const [search, setsearch] = useState(false)

    const handleClick = () => {
        const { toggleLeftmenu, leftMenu, leftSideBarType, changeSidebarType } = headerStore!
        toggleLeftmenu(!leftMenu)
        if (leftSideBarType === 'default') {
            changeSidebarType('condensed', isMobile)
        } else if (leftSideBarType === 'condensed') {
            changeSidebarType('default', isMobile)
        }
    }
    return (
        <>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/dashboard" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src={logo} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoDark} alt="" height="27" />
                                </span>
                            </Link>

                            <Link to="/dashboard" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src={logoLightSvg} alt="" height="22" />
                                </span>
                                <span className="logo-lg">
                                    <img src={logoLightPng} alt="" height="19" />
                                </span>
                            </Link>
                        </div>

                        <button
                            type="button"
                            onClick={handleClick}
                            className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                            id="vertical-menu-btn"
                        >
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <span className="bx bx-search-alt"></span>
                            </div>
                        </form>
                    </div>
                    <div className="d-flex">
                        <div className="dropdown d-inline-block d-lg-none ml-2">
                            <button
                                onClick={() => {
                                    setsearch(!search)
                                }}
                                type="button"
                                className="btn header-item noti-icon waves-effect"
                                id="page-header-search-dropdown"
                            >
                                <i className="mdi mdi-magnify"></i>
                            </button>
                            <div
                                className={
                                    search
                                        ? 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show'
                                        : 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0'
                                }
                                aria-labelledby="page-header-search-dropdown"
                            >
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search ..."
                                                aria-label="Recipient's username"
                                            />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="submit">
                                                    <i className="mdi mdi-magnify"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div style={{margin:100}}>
                            <button onClick={()=>headerStore.click(headerStore.test+1)}>click</button>
                            {headerStore.test}
                        </div> */}
                        <ProfileMenu />
                    </div>
                </div>
            </header>
        </>
    )
}

export const Header = withStore(observer(WrapperHeader))
