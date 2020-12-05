import React, { useEffect } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import MetisMenu from 'metismenujs'

interface PropsSidebarContent {
    type: string
}

const activateParentDropdown = (item: any) => {
    item.classList.add('active')
    const parent = item.parentElement

    if (parent) {
        parent.classList.add('mm-active')
        const parent2 = parent.parentElement

        if (parent2) {
            parent2.classList.add('mm-show')

            const parent3 = parent2.parentElement

            if (parent3) {
                parent3.classList.add('mm-active') // li
                parent3.childNodes[0].classList.add('mm-active') //a
                const parent4 = parent3.parentElement
                if (parent4) {
                    parent4.classList.add('mm-active')
                }
            }
        }
        return false
    }
    return false
}

export const WrapperSidebarContent: React.FC<RouteComponentProps & PropsSidebarContent> = (props) => {
    useEffect(() => {
        let pathName = props.location!.pathname
        const initMenu = () => {
            new MetisMenu('#side-menu')
            let matchingMenuItem = null
            let ul: HTMLElement | null = document.getElementById('side-menu')
            let items = ul!.getElementsByTagName('a')
            for (let i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i]
                    break
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem)
            }
        }
        initMenu()
    }, [props.location!.pathname, props.type])

    return (
        <>
            <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title">Menu</li>
                    <li>
                        <Link to="/dashboard" className="waves-effect">
                            <i className="bx bx-home-circle"></i>
                            {/* <span className="badge badge-pill badge-info float-right">03</span> */}
                            <span>Транзакції</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export const SidebarContent = withRouter(WrapperSidebarContent)
