import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";

export default function Results() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const results = [
    { team: "TG 03 A6 6064", lead: "Tejomurtula Murali Samant", college: "VNR VJIET" },
  { team: "Vasude Vought", lead: "Chityala Srakshin", college: "GRIT" },
  { team: "Nothing", lead: "Phaniharam Venkata Ram Kaushik", college: "VNR VJIET" },
  { team: "Slytherin", lead: "Vejella Monvita Sai", college: "VNR   VJIET" },
  { team: "Punch", lead: "Vinayasree Myadam", college: "VNR VJIET" },
  { team: "Pivot!", lead: "Pracheth Miriyala", college: "VNR VJIET" },
  { team: "pikachu", lead: "Lalithaditya Saripalli", college: "VNR VJIET" },
  { team: "QuadraTech", lead: "Singidi Anish Reddy", college: "VNR VJIET" },
  { team: "VAAR MINDS", lead: "Arham Raza Shaik", college: "VNR VJIET" },
  { team: "Data Stormers", lead: "Birakayala Snehitha Pranusha", college: "Gokaraju Rangaraju Institute of Engineering and Technology" },
  { team: "spirit", lead: "K. Sai Venkat", college: "Jawaharlal Nehru Technological University" },
  { team: "Protominds", lead: "Marru Mahathi Rao", college: "Chaitanya Bharathi Institute Of Technology" },
  { team: "code blooded", lead: "R. Laxmi Prasanna", college: "VNR VJIET" },
  { team: "Git Push and Pray", lead: "Thanikachalam A", college: "Dhanalakshmi College of Engineering, Chennai" },
  { team: "Codeblooded", lead: "Parineeth Boyina", college: "VNR VJIET" },
  { team: "Hack.py", lead: "Kannedari Srisheershika", college: "VNR VJIET" },
  { team: "Neural", lead: "Revanth Adepu", college: "GRIET, Hyderabad" },
  { team: "CodeCrushers", lead: "Prithvi Chandra Galidevara", college: "VNR VJIET" },
  { team: "Git happened", lead: "Varshaa Balasubramanian", college: "JNTUH" },
  { team: "SIDNIT", lead: "Earlapally Sahith Siddarth", college: "Amrita Vishwa Vidyapeetham (AVV), Amritapuri" },
  { team: "Team Light", lead: "Phanisri Routhu", college: "VNR VJIET" },
  { team: "KETOS", lead: "Alle Nithya Hasini", college: "VNR VJIET" },
  { team: "BroCode", lead: "Kruthikha Reddy B", college: "VNR VJIET" },
  { team: "Team Heisenberg", lead: "Durgesh Chaudhari", college: "Vishwakarma Institute of Technology, Pune" },
  { team: "Walkers", lead: "Shaun Angel Domathoti", college: "VNR VJIET" },
  { team: "TEAM PAST", lead: "Badugu Venkat Tejaswin Kumar", college: "VNR VJIET" },
  { team: "ProblemCreators", lead: "Jeevana Harshini Mukku", college: "VNR VJIET" },
  { team: "Anonymous", lead: "Adithya Pottavathi", college: "GRIET, Hyderabad" },
  { team: "Init To Winit", lead: "Chittabiona Sathvik Yadav", college: "GCET Hyderabad" },
  { team: "espresso martini", lead: "Gojuri Aakruthi", college: "VNR VJIET" },
  { team: "Ctrl+S", lead: "Hasini Chekka", college: "VNR VJIET" },
  { team: "VanishingOfWillByers", lead: "Naga Jahnavi Dannayak", college: "VNR VJIET" },
  { team: "ZENITSU_FANBASE", lead: "Shivani Puppala", college: "VNR VJIET" },
  { team: "<ChocolateCoffee>", lead: "Anudeep Reddy", college: "VNR VJIET" },
  { team: "GINGER ALE :)", lead: "Abhinav Ayyagari", college: "Indian Institute of Technology (IIT), Madras" },
  { team: "NoOne", lead: "Anoosh Dhamshetty", college: "KMIT" },
  { team: "DashCoders", lead: "Palavarapu Daiwik", college: "Jawaharlal Nehru Technological University" },
  { team: "Peaky Blinders", lead: "G Varshanth", college: "VNR VJIET" },
  { team: "VAGAbonds", lead: "Akshaya Chundi", college: "VNR VJIET" },
  { team: "sky blue", lead: "Vooturi Akshay Kumar", college: "VNR VJIET" },
  ];

  const filteredResults = results.filter((item) =>
    `${item.team} ${item.lead} ${item.college}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="results-container">
      <div className="results-content">

        <h1 className="results-heading">ROUND 1 RESULTS</h1>

        {/* ✅ SEARCH BAR (correct place) */}
        <input
          type="text"
          placeholder="Search by team, lead, or college..."
          className="results-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-wrapper">
          <table className="results-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Team Name</th>
                <th>Team Lead</th>
                <th>College Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredResults.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.team}</td>
                  <td>{item.lead}</td>
                  <td>{item.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional */}
        {filteredResults.length === 0 && (
          <p className="results-note">No results found</p>
        )}

      </div>
    </div>
  );
}