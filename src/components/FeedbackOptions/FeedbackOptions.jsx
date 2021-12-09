
export const FeedbackOptions = ({ categories, onClickBtn }) => {
    return (
        <div>
            {categories.map(category => (
                <button
                    key={category}
                    type="button"
                    onClick={() => onClickBtn(category)}
                >
                    {categories}
                </button>
            ))}
        </div>
    );
};