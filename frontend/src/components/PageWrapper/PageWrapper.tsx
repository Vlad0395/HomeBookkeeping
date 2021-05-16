import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { setHeadersBrearer } from '../../API'
import { useStore } from '../../stores/store'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

interface PropsPageWrapper {}

export const PageWrapper: React.FC<PropsPageWrapper> = observer((props) => {
    const { headerStore, userStore } = useStore()
    const { leftSideBarType } = headerStore!
    const { setTokenInStore, _token } = userStore
    useEffect(() => {
        let token = localStorage.getItem('Token')
        setTokenInStore(token!)
        token && setHeadersBrearer(token)
        headerStore.changeSidebarTheme(headerStore.leftSideBarTheme)
        headerStore.changeSidebarType(headerStore.leftSideBarType, headerStore.isMobile)
    }, [])

    if (_token) {
        return (
            <div>
                <Header />
                <Sidebar type={leftSideBarType} />
                <div className="page-content main-content">{props.children}</div>
                <Footer />
            </div>
        )
    }
    return null
})
