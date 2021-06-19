import Image from 'next/image'
import avatar from "../../../assets/avatar.png"

const CardAvatar = () => {
    return (
        <div id="card-avatar">
            <Image
                src={avatar}
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                objectPosition="center center"
            />
        </div>
    )
}

export default CardAvatar