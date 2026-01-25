import "./index.css";
import Card from "./components/Card";

function App() {
  const jobs = [
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg",
      company: "Meta",
      role: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$120/hr",
      location: "Menlo Park USA",
      postedTime: "2 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
      company: "Amazon",
      role: "Cloud Solutions Architect",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$140/hr",
      location: "Seattle USA",
      postedTime: "5 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg",
      company: "Apple",
      role: "iOS App Developer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$100/hr",
      location: "Cupertino USA",
      postedTime: "1 day ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/netflix.svg",
      company: "Netflix",
      role: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior-level",
      pay: "$160/hr",
      location: "Los Gatos USA",
      postedTime: "3 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
      company: "Google",
      role: "Site Reliability Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$130/hr",
      location: "Mountain View USA",
      postedTime: "6 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg",
      company: "Meta",
      role: "Data Scientist",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$135/hr",
      location: "New York USA",
      postedTime: "4 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg",
      company: "Amazon",
      role: "UX Designer",
      tag1: "Full-time",
      tag2: "Entry-level",
      pay: "$85/hr",
      location: "Austin USA",
      postedTime: "7 days ago",
    },
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
      company: "Google",
      role: "Frontend Engineer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$110/hr",
      location: "Remote USA",
      postedTime: "Today",
    },
    // Added object 9
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg",
      company: "Microsoft",
      role: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid-level",
      pay: "$125/hr",
      location: "Redmond USA",
      postedTime: "2 days ago",
    },
    // Added object 10
    {
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/spotify.svg",
      company: "Spotify",
      role: "Mobile App Designer",
      tag1: "Full-time",
      tag2: "Junior-level",
      pay: "$95/hr",
      location: "Stockholm Sweden",
      postedTime: "Today",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              logo={elem.logo}
              company={elem.company}
              postedTime={elem.postedTime}
              role={elem.role}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
