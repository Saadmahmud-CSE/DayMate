export default function SuggestionsCard({ backendSuggestions = [] }) {
  if (!backendSuggestions || backendSuggestions.length === 0) {
    return <p className="text-gray-500">No suggestions available</p>;
  }

  return (
    <ul className="space-y-4">
      {backendSuggestions.map((s, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-teal-300 font-extrabold text-xl">Checkmark</span>
          <span className="text-lg text-gray-200 dark:text-gray-200">{s}</span>
        </li>
      ))}
    </ul>
  );
}