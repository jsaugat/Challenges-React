import "../App.css";
import Question from "./Question";

function App() {
  const questions = [
    { id: 1, title: "What is react?", info: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies." },
    { id: 2, title: "What is spriing boot?", info: "idk" },
    { id: 3, title: "What is laravel?", info: "a php framework, i guess" },
  ];

  return (
    <main className="w-[600px] bg-neutral-800 py-9 px-7 rounded-3xl space-y-2">
      <h2 className="text-white text-3xl mb-4">FAQs</h2>
      {questions.map((question) => (
        <Question key={question.id} question={question}/>
      ))}
    </main>
  );
}

export default App;
