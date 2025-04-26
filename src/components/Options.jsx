export default function Options({ updateFeedback, resetFeedbacks }) {
    
    return (
        <>
            <button onClick ={() => updateFeedback("good")} >Good</button>
            <button onClick ={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            <button onClick={() => resetFeedbacks()}>Reset</button>
        </>
    )
}