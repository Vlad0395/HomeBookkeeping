import React from 'react'

import SimpleBar from 'simplebar-react'
import { SidebarContent } from './SidebarContent'

interface PropsSidebar {
    type: string
}

export const Sidebar: React.FC<PropsSidebar> = (props) => {
    return (
        <React.Fragment>
            <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    {props.type !== 'condensed' ? (
                        <SimpleBar style={{ maxHeight: '100%' }}>
                            <SidebarContent type={props.type!} />
                        </SimpleBar>
                    ) : (
                        <SidebarContent type={props.type!} />
                    )}
                </div>
            </div>
        </React.Fragment>
    )
}
