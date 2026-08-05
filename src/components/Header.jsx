const Header = ({ dark, handleDarkTheme }) => {
    return (
        <header className="header">
            <h1>Character Counter</h1>

            <button
                className="theme-button"
                type="button"
                onClick={handleDarkTheme}
                aria-label="Cambiar tema"
            >
                {dark ? "☀️" : "🌙"}
            </button>
        </header>
    );
};

export { Header };