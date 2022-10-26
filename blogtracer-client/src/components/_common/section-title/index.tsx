import React from 'react';

interface IProps {
    value: string
}

const SectionTitle = (props: IProps) => {
    return (
        <h4 className="section-title">{props.value}</h4>
    )
}

export default SectionTitle;