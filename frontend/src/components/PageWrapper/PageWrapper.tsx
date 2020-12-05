import React from 'react'
import { useStore } from '../../stores/store'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

interface PropsPageWrapper {}

export const PageWrapper: React.FC<PropsPageWrapper> = (props) => {
    const { headerStore } = useStore()
    const { leftSideBarType } = headerStore
    return (
        <div>
            <Header />
            <Sidebar type={leftSideBarType} />
            <div className="page-content main-content">{props.children}</div>
            <Footer />
        </div>
    )
}
