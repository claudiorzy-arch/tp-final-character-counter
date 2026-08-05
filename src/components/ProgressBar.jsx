const ProgressBar = ({ letter }) => {
    return (
        <li className="letter-row">
            <span className="letter-name">
                {letter.letterName.toUpperCase()}
            </span>

            <meter
                min="0"
                max="100"
                value={letter.percentage}
            ></meter>

            <span className="letter-value">
                {letter.amount} ({letter.percentage.toFixed(1)}%)
            </span>
        </li>
    );
};

export { ProgressBar };