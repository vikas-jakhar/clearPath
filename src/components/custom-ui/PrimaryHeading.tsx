interface PrimaryHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    text: string;
    reduceBelow?: number;
    maxFontSize?: number;
    minFontSize?: number;
    className?: string;
}

const PrimaryHeading: React.FC<PrimaryHeadingProps> = ({
    text,
    reduceBelow = 1024,
    maxFontSize = 40,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 data-aos='zoom-in'
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-bold font-messiri leading-custom-sm md:leading-custom-lg lg:leading-custom-xl`}
        >
            {text}
        </h2>
    );
};

export default PrimaryHeading;