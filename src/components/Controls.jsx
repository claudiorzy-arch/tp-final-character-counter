const Controls = ({
    excludeSpaces,
    handleExcludeSpaces,
    limitCharacter,
    handleChangeInputLimit,
    limitValue,
    handleLimitValue,
    readingTime
}) => {
    return (
        <div className="controls">
            <div className="controls-left">
                <label>
                    <input
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={handleExcludeSpaces}
                    />
                    Excluir espacios
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={limitCharacter}
                        onChange={handleChangeInputLimit}
                    />
                    Límite de caracteres
                </label>

                {limitCharacter && (
                    <input
                        type="number"
                        min="1"
                        value={limitValue}
                        onChange={handleLimitValue}
                    />
                )}
            </div>

            <p className="reading-time">
                Approx. reading time: {readingTime} min
            </p>
        </div>
    );
};

export { Controls };