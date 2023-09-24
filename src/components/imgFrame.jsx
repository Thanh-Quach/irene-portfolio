import { Image } from "react-bootstrap"

export default function ImgFrame (props) {

    const {
        className,
        style,
        src
    } = props
    return(
    <div className={className}>
        <Image
            style={style}
            className={style?"":"w-100"}
            src={src}
        />
    </div>
    )
}