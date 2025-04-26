export default function Feedback({feedbacks, totalFeedback}) {
    const { good, neutral, bad } = feedbacks;

    return (
        <>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{totalFeedback}</span></p>
            <p>Positive: <span>{Math.round((good / totalFeedback) * 100)}%
</span></p>
        </>
    )
    
}