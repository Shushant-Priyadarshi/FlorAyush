// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from '../navbar';
// import { Helmet } from 'react-helmet';
// import '../App.css'
//  // Adjust the import path as needed

// const Dashboard = () => {
//   const [user, setUser] = useState({});
//   const [students, setStudents] = useState([]);
//   const [papers, setPapers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const userResponse = await axios.get("/api/user/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(userResponse.data.user);

//         if (userResponse.data.user.role === "expert") {
//           const papersResponse = await axios.get("/api/mentor/research", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setPapers(papersResponse.data.papers);
//         }

//         const studentsResponse = await axios.get("/api/mentor/students", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setStudents(studentsResponse.data.students);

//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <Helmet>
//           <link
//             href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
//             rel="stylesheet"
//           />
//           <title>FlorAyush-Dashbard</title>
//           <link
//             rel="icon"
//             href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
//                     <link rel="icon" href="https://example.com/favicon.ico" />

//         </Helmet>
//       <div style={{ marginTop: "-4.4%" }} className="min-h-screen z-50 bg-gray-900 flex flex-col">
//         <Navbar mt="mt6"/>
//         <div  style={styles.dashboardContainer}>
//           <h1 className="className='text-4xl text-white mt-16">Welcome, {user.name}</h1>
//           {user.role === "expert" ? (
//             <div>
//               <h2 className="text-white">Your Research Papers</h2>
//               <div style={styles.cardContainer}>
//                 {papers.map((paper) => (
//                   <div key={paper._id} style={styles.card}>
//                     <h3>{paper.title}</h3>
//                     <p>{paper.content}</p>
//                     <p>Published on: {new Date(paper.datePublished).toLocaleDateString()}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-white className='text-2xl">Students Interested in Your Expertise</h2>
//               <div style={styles.cardContainer}>
//                 {students.map((student) => (
//                   <div key={student._id} style={styles.card}>
//                     <h3>{student.name}</h3>
//                     <p>{student.email}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     padding: '20px',
//     backgroundColor: '#',
//     minHeight: '100vh'
//   },
//   cardContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px'
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     padding: '15px',
//     width: '300px'
//   }
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MentorDetails from './Mentordetails';
import Navbar from '../navbar';

const mentorData = [
  {
    id: 1,
    name: "Dr. Ayurveda Singh",
    expertise: "Plant Medicine",
    bio: "Dr. Ayurveda Singh is a distinguished scholar and practitioner in Ayurvedic plant-based treatments. With over 25 years of experience, Dr. Singh has dedicated his career to integrating traditional Ayurvedic principles with modern therapeutic practices. His research focuses on the use of medicinal plants in treating chronic conditions, emphasizing natural remedies and holistic health. He has authored several influential papers on Ayurvedic medicine, contributing significantly to the understanding and application of ancient healing techniques in contemporary healthcare. Dr. Singh's approach combines deep knowledge of ancient texts with practical, evidence-based treatments, making him a leading authority in the field.",
    category: "Ayurveda",
    image: "ezyzipmain/src/assets/doctor1.jpg",
    researchPapers: [
      {
        title: "Ayurvedic Medicine in Modern Treatment",
        link: "https://example.com/paper1"
      }, {
        "title": "India and Ayurveda, the start",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    id: 2,
    name: "Dr. Herbal Green",
    expertise: "Herbal Remedies",
    bio: "Dr. Herbal Green is a renowned expert in herbal remedies and natural treatments, specializing in the application of botanical medicine for various health issues. With a Ph.D. in Herbal Medicine, Dr. Green has spent over two decades researching and developing herbal formulations that address both common and complex ailments. Her work is characterized by a commitment to sustainable and ethical sourcing of herbs, as well as a focus on personalized treatment plans. Dr. Green has been a keynote speaker at numerous international conferences and has published extensively on the benefits of herbal medicine in modern therapeutics.",
    category: "Herbalist",
    image: "ezyzipmain/src/assets/doctor2.avif",
    researchPapers: [
      {
        title: "Herbal Treatments for Common Illnesses",
        link: "https://example.com/paper2"
      }, {
        "title": "Ancient Remedies for Modern Ailments",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 3,
    "name": "Dr. Naturopath Sunil",
    "expertise": "Natural Healing",
    "bio": "Dr. Naturopath Sunil is a leading figure in naturopathy and holistic healing techniques. His practice emphasizes the body's natural ability to heal itself through a balanced lifestyle and natural therapies. Dr. Sunil's extensive training in various modalities, including hydrotherapy, nutrition, and botanical medicine, allows him to offer comprehensive care that addresses the root causes of illness rather than just symptoms. He is known for his innovative approach to integrating traditional naturopathic practices with contemporary wellness strategies, and his work has been featured in several prestigious health journals.",
    "category": "Naturopath",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "The Power of Natural Healing",
        "link": "https://example.com/paper3"
      }, {
        "title": "Modern Ailments are not to worry!",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Healing, Naturally a path to heaven",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 4,
    "name": "Dr. Botanical Sharma",
    "expertise": "Plant Medicine",
    "bio": "Dr. Botanical Sharma is an esteemed researcher and educator in the field of botanical medicine. His work focuses on the use of botanical plants in therapeutic applications, with a particular emphasis on their role in treating chronic diseases and promoting overall wellness. Dr. Sharma's research has led to groundbreaking discoveries in plant-based treatments, and he is a sought-after speaker at academic and professional conferences. His dedication to advancing the field of botanical medicine is evident in his numerous publications and contributions to both clinical practice and educational programs.",
    "category": "Ayurveda",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Healing Power of Botanicals",
        "link": "https://example.com/paper4"
      }, {
        "title": "Ancient Remedies for Modern Ailments",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 5,
    "name": "Dr. Flora Gupta",
    "expertise": "Herbal Remedies",
    "bio": "Dr. Flora Gupta is a leading practitioner and educator in herbal medicine, specializing in the application of herbal remedies for physical and mental wellness. With a career spanning over 20 years, Dr. Gupta has developed a reputation for her in-depth knowledge of herbal therapeutics and her innovative approach to integrating traditional practices with modern scientific research. Her work includes developing new herbal formulations and educating others on the benefits of herbal medicine through workshops, publications, and community outreach. Dr. Gupta's commitment to advancing the field is reflected in her extensive research and dedication to patient care.",
    "category": "Herbalist",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Herbal Solutions for Stress and Anxiety",
        "link": "https://example.com/paper5"
      }, {
        "title": "Ancient Remedies for Modern Ailments",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 6,
    "name": "Dr. Vedic Patel",
    "expertise": "Ayurvedic Nutrition",
    "bio": "Dr. Vedic Patel is a specialist in Ayurvedic nutrition, with a focus on the intersection of traditional Ayurvedic principles and contemporary nutritional science. His work explores how dietary practices can be used to enhance health and prevent disease, drawing on ancient wisdom and modern research. Dr. Patel's holistic approach to nutrition emphasizes personalized dietary plans tailored to individual needs, supported by extensive clinical experience and research. His contributions to the field include numerous publications and presentations on Ayurvedic nutrition and its impact on overall health.",
    "category": "Ayurveda",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Ayurvedic Nutrition and Balanced Life",
        "link": "https://example.com/paper6"
      }, {
        "title": "Ancient Remedies for Modern Ailments",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 7,
    "name": "Dr. Harit Kapoor",
    "expertise": "Natural Remedies",
    "bio": "Dr. Harit Kapoor is an expert in natural remedies and their application to modern health challenges. His practice integrates a wide range of natural treatments, including herbal medicine, nutrition, and lifestyle modifications, to address chronic conditions and promote well-being. Dr. Kapoor's innovative approach to natural medicine combines traditional knowledge with cutting-edge research, making him a leading authority in the field. He is known for his comprehensive and individualized treatment plans, as well as his dedication to educating the public about the benefits of natural healing.",
    "category": "Naturopath",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Natural Remedies for Chronic Conditions",
        "link": "https://example.com/paper7"
      }, {
        "title": "Naturopathy for all",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Heal by nature, a guide to healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 8,
    "name": "Dr. Priya Khurana",
    "expertise": "Herbal Remedies",
    "bio": "Dr. Priya Khurana is a dedicated researcher and practitioner in the field of herbal remedies, with a focus on skin and hair care. Her work emphasizes the use of natural ingredients to address various dermatological and cosmetic concerns, drawing on both traditional herbal knowledge and modern scientific research. Dr. Khurana's innovative formulations and treatments have garnered recognition in the field of herbal medicine, and she is a sought-after expert for her insights into the benefits of herbal remedies for skincare. Her contributions include numerous articles, presentations, and community workshops.",
    "category": "Herbalist",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Herbal Solutions for Skincare",
        "link": "https://example.com/paper8"
      }, {
        "title": "Why Go Herbel?",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Healing Herbally",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 9,
    "name": "Dr. Sanjay Deshmukh",
    "expertise": "Ayurveda",
    "bio": "Dr. Sanjay Deshmukh is a researcher in Ayurvedic plant medicine with a focus on metabolic health. His work explores the role of Ayurvedic herbs and treatments in managing metabolic disorders such as diabetes, obesity, and hypertension. Dr. Deshmukh's research combines traditional Ayurvedic practices with modern scientific methods to develop effective treatment strategies. His contributions to the field include extensive publications and collaborations with other researchers, as well as a commitment to advancing the understanding of Ayurvedic medicine's role in metabolic health.",
    "category": "Ayurveda",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Ayurvedic Approaches to Metabolism",
        "link": "https://example.com/paper9"
      }, {
        "title": "What is Ayurveda?",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Ayurvedic Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 10,
    "name": "Dr. Deepak Reddy",
    "expertise": "Natural Medicine",
    "bio": "Dr. Deepak Reddy is an expert in natural medicine, specializing in ancient healing techniques and their application in contemporary healthcare. His practice focuses on integrating traditional healing practices with modern medical approaches to provide holistic care for a range of conditions. Dr. Reddy's extensive training in various natural medicine modalities allows him to offer personalized and effective treatment plans. His contributions to the field include numerous research papers, lectures, and workshops on the benefits of natural medicine and its role in modern health care.",
    "category": "Naturopath",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Traditional Healing in Modern Times",
        "link": "https://example.com/paper10"
      },
      {
        "title": "Ancient Remedies for Modern Ailments",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Integrative Approaches to Healing",
        "link": "https://example.com/paper12"
      }
    ]
  },
  {
    "id": 11,
    "name": "Dr. Ramya Bhat",
    "expertise": "Herbal Medicine",
    "bio": "Dr. Ramya Bhat is a researcher in herbal medicine, focusing on the integration of traditional herbal treatments with modern medical practices. Her work explores the efficacy of herbal remedies in addressing contemporary health challenges and promoting overall well-being. Dr. Bhat's research includes developing new herbal formulations and studying their impact on various diseases. She is a recognized authority in the field of herbal medicine, with extensive publications and contributions to both clinical practice and educational programs.",
    "category": "Herbalist",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Herbal Medicine in Combating Modern Diseases",
        "link": "https://example.com/paper11"
      }
    ]
  },
  {
    "id": 12,
    "name": "Dr. Vishal Mehra",
    "expertise": "Plant Medicine",
    "bio": "Dr. Vishal Mehra is a researcher specializing in the medicinal properties of rare plants. His work focuses on identifying and utilizing the therapeutic potential of lesser-known botanical species for treating various health conditions. Dr. Mehra's research combines fieldwork, laboratory studies, and clinical trials to explore the benefits of rare plants in medicine. His contributions to the field include numerous publications, presentations, and collaborations with other researchers, as well as a commitment to advancing the understanding of plant medicine's role in health and wellness.",
    "category": "Ayurveda",
    "image": "https://via.placeholder.com/150",
    "researchPapers": [
      {
        "title": "Rare Plants and Their Medicinal Uses",
        "link": "https://example.com/paper12"
      }, {
        "title": "Plants are not just for aesthetics",
        "link": "https://example.com/paper11"
      },
      {
        "title": "Medicine : Plants, India and Holisiticy",
        "link": "https://example.com/paper12"
      }
    ]
  }

];

const MentorList = () => {
  const [mentors, setMentors] = useState(mentorData);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedField, setSelectedField] = useState('');
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    // Filtering mentors based on category and field of expertise
    let filteredMentors = mentorData;

    if (selectedCategory) {
      filteredMentors = filteredMentors.filter(
        (mentor) => mentor.category === selectedCategory
      );
    }

    if (selectedField) {
      filteredMentors = filteredMentors.filter(
        (mentor) => mentor.expertise === selectedField
      );
    }

    setMentors(filteredMentors);
  }, [selectedCategory, selectedField]);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleFieldChange = (e) => setSelectedField(e.target.value);
  const handleClick = (mentor) => setSelectedMentor(mentor);

  if (selectedMentor) {
    return <MentorDetails mentor={selectedMentor} setSelectedMentor={setSelectedMentor} />;
  }

  return (
    <div className="min-h-screen bg-green-50">
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <title>FlorAyush - Mentors</title>
        <link
          rel="icon"
          href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Helmet>

      <Navbar mt="mt-0" />
      <div className="container mx-auto p-5">
        <h1 className="text-3xl text-green-600 font-bold mb-6">Mentor Directory</h1>

        {/* Filter Section */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter Mentors By:</h2>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-2 text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="block w-full bg-green-100 border border-green-300 rounded px-3 py-2"
              >
                <option value="">All Categories</option>
                <option value="Ayurveda">Ayurveda</option>
                <option value="DPM">Doctor of Plant Medicine (DPM)</option>
                <option value="Herbalist">Herbalist</option>
                <option value="Naturopath">Naturopathic Doctor</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Expertise</label>
              <select
                value={selectedField}
                onChange={handleFieldChange}
                className="block w-full bg-green-100 border border-green-300 rounded px-3 py-2"
              >
                <option value="">All Expertise</option>
                <option value="Plant Medicine">Plant Medicine</option>
                <option value="Herbal Remedies">Herbal Remedies</option>
                <option value="Natural Healing">Natural Healing</option>
              </select>
            </div>
          </div>
        </div>

        {/* Mentor Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                onClick={() => handleClick(mentor)}
              >
                <img
                  src="https://images.unsplash.com/photo-1726743887906-9a3b86e0e9ad?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl text-center font-bold">{mentor.name}</h3>
                <p className="text-green-600 text-center">{mentor.expertise}</p>
              </div>
            ))
          ) : (
            <p>No mentors found matching the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorList;
