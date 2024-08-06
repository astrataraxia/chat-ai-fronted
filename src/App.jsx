import "./App.css";
import { User, MessageCircle, X, Heart } from "lucide-react";

const ProfileSelector = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="relative">
        <img src="http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black">
          <h2 className="text-3x1 font-bold">Foo Bar, 30</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">
          I am a software engineer with 10 years of experience in the industry.
          I am looking for a new job.
        </p>
      </div>
      <div className="p-4 flex justify-center space-x-4">
        <button
          className="bg-red-500 rounded-full p-4 text-white hover:bg-red-700"
          onClick={() => console.log("left")}
        >
          <X size={24} />
        </button>
        <button
          className="bg-green-500 rounded-full p-4 text-white hover:bg-green-700"
          onClick={() => console.log("right")}
        >
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};

const MatchesList = () => {
  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-4">Matches</h2>
      <ul>
        {[
          {
            id: 1,
            firstname: "Foo",
            lastname: "Bar",
            imageUrl:
              "http://localhost:8080/images/0b1273d4-ab2f-4edd-858b-6f1ff1071fb9.jpg",
          },
          {
            id: 2,
            firstname: "Baz",
            lastname: "Qux",
            imageUrl:
              "http://localhost:8080/images/2fc4a600-3bad-4753-b5c7-ebcc987c460b.jpg",
          },
        ].map((match) => (
          <li key={match.id} className="mb-2">
            <button className="w-full hover:bg-gray-100 rounded flex item-center">
              <img
                src={match.imageUrl}
                className="w-16 h-16 rounded-full mr-3 object-cover"
              />
              <span>
                <h3 className="font-bold">
                  {match.firstname} {match.lastname}
                </h3>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <nav className="flex justify-between mb-4">
        <User />
        <MessageCircle />
      </nav>
      <ProfileSelector />
      {/* <MatchesList /> */}
    </div>
  );
}

export default App;
