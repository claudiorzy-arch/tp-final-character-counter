const Stats = ({ characters, words, sentences }) => {
    return (
        <section className="stats">
            <article className="stat-card stat-card-purple">
                <h2>{characters}</h2>
                <p>Total Characters</p>
            </article>

            <article className="stat-card stat-card-yellow">
                <h2>{words}</h2>
                <p>Word Count</p>
            </article>

            <article className="stat-card stat-card-orange">
                <h2>{sentences}</h2>
                <p>Sentence Count</p>
            </article>
        </section>
    );
};

export { Stats };