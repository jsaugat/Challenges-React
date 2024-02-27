 //* Topic : search and find real time users on Github
import { useEffect, useRef, useState } from "react";
import "../App.css";

//? App Component
export default function App() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState({}); // All user data state in an object
  const [loading, setLoading] = useState(false); // Fake loading state while fetching data
  const [notFound, setNotFound] = useState(false); // State for handling not found scenario
  const [submitted, setSubmitted] = useState(false); // 'true'  when the form is submitted

  const inputRef = useRef(null);

  // auto-focus input on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const fetchUser = (e) => {
    e.preventDefault();
    setLoading(true); // Set fake loading to true when starting the fetch

    const API_URL = `https://api.github.com/search/users?q=${query}`;
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          const user = data.items[0];
          setUserData({
            username: user.login,
            avatar: user.avatar_url,
            profileUrl: user.html_url,
          });
          setNotFound(false); // Reset notFound state if user is found
        } else {
          setNotFound(true); // Set notFound state if user is not found
        }
      })
      .catch((err) => console.log("something went wrong: " + err))
      .finally(() => {
        setSubmitted(true);
        setTimeout(() => {
          setLoading(false); // Set the fake loading to false after half a second
        },500)
      });
  };

  return (
    <main className="space-y-5">
      <h2 className="text-3xl text-left">Github User Search</h2>
      <Form query={query} setQuery={setQuery} fetchUser={fetchUser} inputRef={inputRef} />
      <div className="space-y-4">
        <h3 className="text-left text-xl">Results :</h3>
        {loading ? (
          <p>Fetching data...</p>
        ) : (
          submitted && (
            notFound ? (
              <p className="text-red-500">User not found</p>
            ) : (
              <UserResult
                username={userData.username}
                profileUrl={userData.profileUrl}
                avatar={userData.avatar}
              />
            )
          )
        )}
      </div>
    </main>
  );
}

//? Search Form Component w/ required props
const Form = ({ query, setQuery, fetchUser, inputRef }) => (
  <form className="space-x-4" onSubmit={fetchUser}>
    <input
      ref={inputRef}
      type="text"
      className="px-3 py-2 rounded-lg"
      placeholder="enter a username"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button>Search</button>
  </form>
);

//? Found Result Component w/ required props
const UserResult = ({ profileUrl, username, avatar }) => (
  <section className="border border-white/30 rounded-md py-4 px-6 space-y-4">
    <a href={profileUrl}>
      <img src={avatar} width="90" alt="" className="rounded-full m-auto" />
    </a>
    <p>
      🔗
      <a
        href={profileUrl}
        className="hover:text-white text-blue-400 cursor-pointer font-semibold"
      >
        {username}
      </a>
    </p>
  </section>
);
