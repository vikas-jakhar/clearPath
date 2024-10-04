interface IconProps {
    iconName?: string;
    className?: string;
}

const Icon: React.FC<IconProps> = (props) => {
    const IconList: { [key: string]: JSX.Element } = {

    };

    return (
        <span data-aos='zoom-in' className={`flex ${props.className || ''}`}>
            {props.iconName && IconList[props.iconName]}
        </span>
    );
};

export default Icon;