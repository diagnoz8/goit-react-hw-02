export default function Feedback({feedbacks}) {
   const {good, neutral, bad} = feedbacks;
    return (
        <>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
        {/* <p>Total: <span></span></p>
            <p>Positive: <span></span></p> */}
        </>
    )
}