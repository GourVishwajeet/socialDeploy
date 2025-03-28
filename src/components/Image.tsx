import React from "react";
import styled from "styled-components";

type ImageProps = {
    classname?: string
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>


const Image = (props: ImageProps) => {
    const { classname } = props;
    return (
        <ImageComp {...props} className={`object-contain ${classname}`} decoding="async" />
    )
}

const ImageComp = styled.img`
    max-height:100%;
    max-width:100%;
`


export default Image;