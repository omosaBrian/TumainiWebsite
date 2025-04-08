import { useState } from "react";
import { Mail, Phone } from "lucide-react";

// Define the faculty member type
type FacultyMember = {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  imageUrl: string;
};

// Sample faculty data
const facultyData: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. James Mwangi",
    position: "Principal",
    department: "Administration",
    email: "principal@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Dr. Mwangi holds a Ph.D. in Educational Administration and has over 20 years of experience in education leadership. Under his guidance, Tumaini Kiage Boys High School has achieved significant academic improvements and expanded its facilities.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 2,
    name: "Mrs. Faith Njeri",
    position: "Deputy Principal, Academics",
    department: "Administration",
    email: "academics@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mrs. Njeri oversees all academic programs and ensures high standards of teaching and learning. She holds a Master's degree in Curriculum Development and has implemented several educational innovations at the school.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 3,
    name: "Mr. David Omondi",
    position: "Deputy Principal, Administration",
    department: "Administration",
    email: "admin@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mr. Omondi manages the day-to-day operations of the school, including facilities, support staff, and logistics. With a background in Business Administration, he ensures efficient resource management.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 4,
    name: "Ms. Sarah Kimani",
    position: "Head of Sciences",
    department: "Sciences",
    email: "sciences@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Ms. Kimani leads our Science department with passion and expertise. She holds a Master's in Chemistry and has been instrumental in enhancing our laboratory facilities and promoting research among students.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 5,
    name: "Mr. Peter Wanyama",
    position: "Head of Mathematics",
    department: "Mathematics",
    email: "mathematics@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mr. Wanyama is known for making mathematics accessible and engaging for all students. His innovative teaching methods have contributed to the school's outstanding performance in national mathematics competitions.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 6,
    name: "Mrs. Elizabeth Muthoni",
    position: "Head of Languages",
    department: "Languages",
    email: "languages@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mrs. Muthoni oversees English, Kiswahili, and French instruction. Her emphasis on effective communication has led to improved language proficiency among students and success in debating competitions.",
    imageUrl: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 7,
    name: "Mr. Joseph Kipchirchir",
    position: "Head of Humanities",
    department: "Humanities",
    email: "humanities@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mr. Kipchirchir brings history and geography to life through experiential learning. He organizes educational trips and uses contemporary events to make the humanities relevant to students' lives.",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 8,
    name: "Ms. Janet Akinyi",
    position: "Head of Technical Subjects",
    department: "Technical",
    email: "technical@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Ms. Akinyi leads our technical education programs, including Computer Studies and Agriculture. She emphasizes practical skills that prepare students for both higher education and immediate career opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 9,
    name: "Mr. Geoffrey Mutua",
    position: "Director of Sports",
    department: "Sports",
    email: "sports@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mr. Mutua is a former national athlete who now channels his passion for sports into developing our students' athletic abilities. Under his leadership, the school has excelled in various sports competitions.",
    imageUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 10,
    name: "Mrs. Grace Maina",
    position: "School Counselor",
    department: "Student Affairs",
    email: "counseling@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mrs. Maina provides mental health support and guidance to our students. With a background in Psychology, she helps students navigate the challenges of adolescence and prepare for future success.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 11,
    name: "Mr. Charles Ndirangu",
    position: "Head of Boarding",
    department: "Boarding",
    email: "boarding@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Mr. Ndirangu ensures that our boarding facilities provide a safe and supportive second home for students. He organizes weekend activities and promotes a sense of community among boarders.",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  },
  {
    id: 12,
    name: "Ms. Irene Otieno",
    position: "Head of Creative Arts",
    department: "Arts",
    email: "arts@tumainikaige.ac.ke",
    phone: "+254 7XX XXX XXX",
    bio: "Ms. Otieno nurtures creativity through music, drama, and visual arts. Her dedication has led to our school's recognition in national drama and music festivals.",
    imageUrl: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
  }
];

// Define the department filter options
const departments = [
  "All",
  "Administration",
  "Sciences",
  "Mathematics",
  "Languages",
  "Humanities",
  "Technical",
  "Sports",
  "Student Affairs",
  "Boarding",
  "Arts"
];

const FacultyGrid = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  // Filter faculty members based on selected department
  const filteredFaculty = selectedDepartment === "All" 
    ? facultyData 
    : facultyData.filter(member => member.department === selectedDepartment);

  const toggleBio = (id: number) => {
    setExpandedBio(expandedBio === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Department filters */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 min-w-max pb-4">
          {departments.map(department => (
            <button
              key={department}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === department 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>
      </div>

      {/* Faculty grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFaculty.map(member => (
          <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-gray-700 font-medium mb-3">{member.position}</p>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${member.email}`} className="hover:text-primary">
                  {member.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Phone size={16} className="mr-2" />
                <a href={`tel:${member.phone}`} className="hover:text-primary">
                  {member.phone}
                </a>
              </div>
              
              <div className={`mt-4 transition-all duration-300 ${
                expandedBio === member.id ? "max-h-96" : "max-h-24 overflow-hidden"
              }`}>
                <p className="text-gray-700">{member.bio}</p>
              </div>
              
              {member.bio.length > 120 && (
                <button 
                  className="mt-3 text-primary hover:text-primary/80 text-sm font-medium flex items-center"
                  onClick={() => toggleBio(member.id)}
                >
                  {expandedBio === member.id ? "Read Less" : "Read More"}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    className={`ml-1 h-4 w-4 transition-transform ${expandedBio === member.id ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No faculty members found in this department.</p>
        </div>
      )}
    </div>
  );
};

export default FacultyGrid;
