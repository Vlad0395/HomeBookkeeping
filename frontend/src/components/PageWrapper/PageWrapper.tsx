import React from 'react'

interface PropsPageWrapper {}

export const PageWrapper: React.FC<PropsPageWrapper> = (props) => {
    return <div>{props.children}</div>
}
