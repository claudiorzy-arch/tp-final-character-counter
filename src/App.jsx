import { useState } from "react";
import { Header } from "./components/Header";
import { WriteArea } from "./components/WriteArea";
import { Controls } from "./components/Controls";
import { Stats } from "./components/Stats";
import { LetterDensity } from "./components/LetterDensity";

function App() {
    const [dark, setDark] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const [text, setText] = useState("");
    const [excludeSpaces, setExcludeSpaces] = useState(false);
    const [limitCharacter, setLimitCharacter] = useState(false);
    const [limitValue, setLimitValue] = useState(200);

    const handleChangeTextarea = (event) => {
        const newText = event.target.value;

        if (
            limitCharacter &&
            newText.length > Number(limitValue)
        ) {
            return;
        }

        setText(newText);
    };

    const handleExcludeSpaces = () => {
        setExcludeSpaces(!excludeSpaces);
    };

    const handleChangeInputLimit = () => {
        setLimitCharacter(!limitCharacter);
    };

    const handleLimitValue = (event) => {
        setLimitValue(event.target.value);
    };

    const handleDarkTheme = () => {
        const newDarkValue = !dark;

        setDark(newDarkValue);

        if (newDarkValue) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    };

    const characters = excludeSpaces
        ? text.replace(/\s/g, "").length
        : text.length;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    const sentences =
        text.trim() === ""
            ? 0
            : text
                  .split(/[.!?]/)
                  .filter(
                      (sentence) =>
                          sentence.trim() !== ""
                  ).length;

    const readingTime = Math.ceil(words / 200);

    const letters = text
        .toLowerCase()
        .replace(/[^a-záéíóúüñ]/g, "");

    const letterCount = {};

    for (const letter of letters) {
        letterCount[letter] =
            (letterCount[letter] || 0) + 1;
    }

    const sortLetters = Object.entries(letterCount)
        .map(([letterName, amount]) => ({
            letterName,
            amount,
            percentage:
                letters.length === 0
                    ? 0
                    : (amount / letters.length) * 100
        }))
        .sort((a, b) => b.amount - a.amount);

    return (
        <main
            className={`app ${
                dark ? "dark-theme" : "light-theme"
            }`}
        >
            <Header
                dark={dark}
                handleDarkTheme={handleDarkTheme}
            />

            <h2>Analyze your text in real-time.</h2>

            <WriteArea
                text={text}
                handleChangeTextarea={
                    handleChangeTextarea
                }
            />

            <Controls
                excludeSpaces={excludeSpaces}
                handleExcludeSpaces={
                    handleExcludeSpaces
                }
                limitCharacter={limitCharacter}
                handleChangeInputLimit={
                    handleChangeInputLimit
                }
                limitValue={limitValue}
                handleLimitValue={handleLimitValue}
                readingTime={readingTime}
            />

            <Stats
                characters={characters}
                words={words}
                sentences={sentences}
            />

            {text && (
                <LetterDensity
                    sortLetters={sortLetters}
                />
            )}
        </main>
    );
}

export default App;