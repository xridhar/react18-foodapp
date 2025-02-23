export default function AnalyzedInstruction({ isLoading, food }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
