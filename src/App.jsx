import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import TrandingSlider from "./Pages/HomePage/component/TrandingSlider/TrandingSlider";
import BlogPostPage from "./Pages/HomePage/component/BlogPostpage/BlogPostPage";
import PersonalisedTrips from "./Pages/PersonalisedTrips/PersonalisedTrips";
import GroupTripPage from "./Pages/GroupTrips/GroupTrips";
import ScrollToTop from "./ScrollToTop";
import CorporatePage from "./Pages/CorporatePage/CorporatePage";
import Error404Page from "./Pages/Error/Error404Page";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndCondition from "./Pages/TermsAndCondition/TermsAndCondition";
import UpcomingTripCard from "./Components/UpcomingTripCard";
import { useState, useEffect } from "react";

const groupTripsData = {
  mumbai: {
    title: "Mood Indigo and Mumbai Darshan",
    upcomingTrip: "mid December",
    price: "11499/-",
    description:
      'Mood Indigo and Mumbai Darshan together create an unforgettable blend of cultural immersion and urban exploration. As IIT Bombay’s premier cultural festival, Mood Indigo is a high-energy, multi-day extravaganza, drawing students and artists from across the country to showcase their talents in music, dance, arts, literature, and more. Known for its electrifying pro shows, thought-provoking panel discussions, and diverse workshops, Mood Indigo offers a one-of-a-kind experience of creativity, expression, and skill-building. Festival-goers are immersed in a world of lively competitions, interactive workshops, and incredible performances by renowned artists and inspiring personalities, making Mood Indigo a pinnacle of India’s collegiate cultural festivals. Adding to this festival spirit, Mumbai Darshan offers participants the chance to explore the vibrant city of Mumbai, known as the "City of Dreams" and a melting pot of history, culture, and modernity. From the iconic Gateway of India and Marine Drive’s coastal charm to the bustling markets of Colaba and the historic Prince of Wales Museum, Mumbai Darshan takes travelers on a whirlwind tour of the city’s most celebrated landmarks. This exploration also includes stops at Juhu Beach, Siddhivinayak Temple, and the Bandra-Worli Sea Link, showcasing the beauty and diversity of Mumbai’s iconic locations. The journey through Mumbai\'s famed streets, rich with cultural heritage and urban flair, complements the dynamic atmosphere of Mood Indigo, creating a truly immersive and memorable experience for all attendees.',
    itinerary: [
      {
        day: 1,
        title: "Departure for Mumbai",
        activities: [
          "Assemble at the railway station to board the train (contact for train timings and details).",
          "Overnight train journey with group meet-up, interaction, and introductions.",
        ],
      },
      {
        day: 2,
        title: "Mumbai Arrival | Mood Indigo",
        activities: [
          "Arrive at the railway station in Mumbai and transfer to IIT Bombay.",
          "Check into IIT Bombay Hostel. Freshen up and have breakfast.",
          "Enjoy Mood Indigo’s pre-fest activities.",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 3,
        title: "Mood Indigo | First Day",
        activities: [
          "Competetions: Third bell eliminations, vogue, mantra, mehfil-e-indigo, agar, slam poetry, speak up, MI Tales, and many more.",
          "Proshows AND Workshops: Tinder Dating ,Bollywood panel, Talent Fista, Drum Circle, YUGM, Afternite, Skateboarding workshop and many more.",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 4,
        title: "Mood Indigo | Second day",
        activities: [
          "Competetions: Desi Beats, Double Trouble, Jester Fiesta, Conchord, Jam, Wordemort, Humour Us, and more.",
          "Proshows AND Workshops: Improv comedy , Mallakhamb YouTubers Panel, Theatrefest, Physical Theatre Workshop, and many more.",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 5,
        title: "Mood Indigo | Third day",
        activities: [
          "Competetions- Indigo Saga,trashion, Speak up, MI Tales, Mime Time, Monostrokes Sanskriti, MIGT finals, Virtuoso and many more",
          "Proshows and Workshop- The trend titans, Surprise element Bollywood Panel, Dance Fest, Salsa, Bhangra Show.. AND MANY MORE EVENTS",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 6,
        title: "Mumbai Darshan",
        activities: [
          "Check out from IIT Bombay.",
          'Mumbai sightseeing tour via AC bus, visiting "Boating Club", "Gateway of India", "Bombay Stock Exchange (BSE)", "Prince of Wales Museum", "Jahangir Art Gallery", "Marine Drive", "Malabar Hill", "Mantralaya", "Wankhede Stadium", "Hanging Garden", "Boot House Racecourse", "Juhu Beach", "Tower of Silence", "Siddhivinayak Temple" and "Band Stand (Bandra)"',
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 7,
        title: "Return Journey",
        activities: [
          "Overnight train journey back to your location.",
          "Arrive back home with memorable experiences and moments to share.",
        ],
      },
    ],
    images: [
      "/IITMoodIndigo.jpg",
      "/Marine_Drive.jpg",
      "/Wankhede.jpg",
      "/GatewayOfIndia.jpg",
    ],
  },

  panchmarhi: {
    title: "Panchmarhi – The Queen of Satpura",
    upcomingTrip: "none",
    price: "none",
    description:
      'Pachmarhi, the "Queen of Satpura," is a picturesque hill station with rich natural and cultural allure. Known for its ancient caves, captivating waterfalls, and stunning viewpoints, Pachmarhi offers an ideal blend of history and nature. Start by exploring the mystical Pandav Caves and the remarkable cave pavements estimated to be over 10,000 years old. These historical sites give a glimpse into ancient civilizations and local legends. Nature lovers will be enchanted by the area’s waterfalls, such as the grand Rajat Prapat and the popular Bee Fall, perfect for cooling off in the midst of lush landscapes. The fairy-like Apsara Falls, Dutchess Fall, and Little Fall add to the tranquil experience, offering picturesque spots to relax and enjoy nature’s splendor. Adventure seekers and pilgrims alike can hike up to Chauragarh, especially vibrant during Mahashivratri, and take in the breathtaking views from Dhupgarh, the highest peak in the Satpura Range. The scenic beauty continues with other notable points like Handi Khoh, a deep valley, and viewpoints such as Pachmarhi Hill, Rajendra Giri, and Lady Robertson’s View, each offering unique perspectives of Pachmarhi’s landscape. For those seeking a touch of adventure, activities like paragliding and boating are available, making Pachmarhi a well-rounded destination for history, nature, and thrill in one memorable visit.',
    itinerary: [
      {
        day: 1,
        title: "Indore to Pachmarhi",
        activities: [
          "We will assemble at Radisson Square, indore at night 10:00PM. After meeting with other group members and initial introduction, we will depart for Pachmarhi.",
          "Travelers who wants to join from Bhopal, Dewas and Pipariya, kindly contact the team.",
        ],
      },
      {
        day: 2,
        title: "Pachmarhi Sightseeing",
        activities: [
          "Arriving Pachmarhi in the morning, check-in to the Hotel/Camps, Rooms will be alloted on a sharing basis.",
          "After getting refreshed we'll start our sightseeing tour of Pachmarhi.",
          "Visit: Pandav Caves, Gupt and Bada Mahadev, Handi Khoh and chaura garh trek (optional).",
          "Enjoy Musical night and Bonfire at night.",
          "Dinner and overnight stay in camps/hotel.",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 3,
        title: "Gypsy Sightseeing",
        activities: [
          "Wake up in the morning and have breakfast.",
          "We will board the gypsy and start our sightseeing tour of Pachmarhi.",
          "Visit: Bee Fall, Reechagarh, Dhoopgarh (the highest sunset point of madhya pradesh), Jata Shankar.",
          "Enjoy Musical night and have a special dinner and then we will proceed back towards Indore.",
          "Meals: Breakfast and Dinner included.",
        ],
      },
      {
        day: 4,
        title: "Reached Indore",
        activities: [
          "Arrival in Indore in the morning.",
          "Trip ends with unforgettable memories of Pachmarhi.",
        ],
      },
    ],
    images: [
      "/Pachmarhi_valley_Madhya_Pradesh_INDIA.jpg",
      "/Bee_Fall.jpg",
      "/Chouragarh_temple.jpg",
      "/Sunset_Point.jpeg",
    ],
  },

  goa: {
    title: "Goa – The Pearl of the Indian Ocean",
    upcomingTrip: "none",
    price: "none",
    description: `
      Embark on an exhilarating group trip to Goa, the vibrant coastal paradise, with Btech TravelWala as your trusted companion. 
      This tropical destination, famous for its golden beaches, lively nightlife, and rich cultural heritage, promises an unforgettable adventure. 
      We handle all the logistics, ensuring a seamless and enjoyable experience for you and your fellow travellers.

      Start the trip with a beachside bonfire and DJ party, setting the mood for fun and relaxation. 
      Indulge in thrilling water sports, explore the local markets, and soak up the sun on Goa's pristine beaches. 
      As the night falls, join us for a musical night under the stars, complete with group games, dancing, and live performances by the group. 

      Enjoy sightseeing tours to iconic spots such as Baga Beach, Dudhsagar Waterfalls, Fort Aguada, and the ancient churches of Old Goa. 
      Let Btech TravelWala guide you through this exciting journey, where Goa’s vibrant charm and your newfound friendships will create lasting memories.`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Goa",
        activities: [
          "Evening: Departure from your location to Goa by train, group interaction, and introductions.",
          "Overnight journey to Goa.",
        ],
      },
      {
        day: 2,
        title: "Arrival in Goa",
        activities: [
          "Arrival at railway Station, transfer to the resort/hotel, check-in, and freshen up.",
          "Check into AC deluxe rooms with Swimming Pool( 3 star Hotel in north Goa).",
          "Meal: Dinner",
        ],
      },
      {
        day: 3,
        title: "Pool Party",
        activities: [
          "Today you are free to explore Goa on your own.",
          "In evening, enjoy the pool party with DJ setup at resort/hotel.",
          "Meal: Breakfast and Dinner",
        ],
      },
      {
        day: 4,
        title: "Beach Party in Evening",
        activities: [
          "You are free to do anything and explore anywhere in Goa.",
          "In evening, get dressed up and ready for beach party at Shack and today's dinner will be served at Beach Party only, not at Hotel.",
          "Meal: Breakfast and Dinner",
        ],
      },
      {
        day: 5,
        title: "Explore Unexplored Goa | South Goa",
        activities: [
          "We will explre extreme South Goa via AC Bus.",
          "Cabo de Rama, Patolem Beach, Betul beach, and Butterfly beach.",
          "Come back to hotel in evening, you are free to explore or do anything.",
          "Meal: Breakfast and Dinner",
        ],
      },
      {
        day: 6,
        title: "Checkout and Departure",
        activities: [
          "After breakfast, leave your rooms by 11:00 AM (else 1 day room charges will be applicable).",
          "Keep you luggage in the Hotel Premises Safely (Transfer to Airport/Railway Stations as per timings).",
          "Meal: Breakfast",
        ],
      },
      {
        day: 7,
        title: "Travelling in Train",
        activities: [
          "Overnight journey to your location.",
          "Arrive back home with unforgettable memories of Goa!",
        ],
      },
    ],
    images: [
      "/Doodhsagar_Fall.jpg",
      "/Cabo_de_Rama_Entrance.jpg",
      "/Palolem_Beach,_South_Goa.jpg",
      "/BeachFun.jpg",
    ],
  },

  udaipur: {
    title: "Udaipur and Mount Abu",
    upcomingTrip: "none",
    price: "none",
    description: `
      Udaipur, often called the "Venice of the East," is a picturesque city in Rajasthan known for its enchanting lakes, majestic palaces, and vibrant culture. Founded by Maharana Udai Singh II in 1559, Udaipur's royal heritage is evident in its grand architecture and historic sites. The City Palace complex, perched along Lake Pichola, is a breathtaking example of intricate Rajput artistry, while Jag Mandir and Jag Niwas (Lake Palace) add to the city’s charm with their island settings. Udaipur’s markets, like Hathi Pol and Bada Bazaar, are bustling with local crafts, including traditional Rajasthani jewelry, textiles, and miniature paintings. Visitors can enjoy serene boat rides on Lake Pichola and Fateh Sagar Lake, each providing stunning sunset views. Beyond its architectural beauty, Udaipur is also a gateway to Rajasthan’s rich cultural heritage, offering festivals, folk music, and dance that bring the city’s history to life. 
      Nestled in the Aravalli Range, Mount Abu is Rajasthan's only hill station and a refreshing retreat from the desert heat. Known for its cool climate and lush greenery, Mount Abu is dotted with forests, rivers, and waterfalls. The Dilwara Temples, an architectural masterpiece, showcase detailed marble carvings and serve as a spiritual center for Jain pilgrims. Nakki Lake, a tranquil water body surrounded by hills, offers paddle boating and scenic views. For breathtaking panoramas of the Aravalli range, visitors can head to Guru Shikhar, the highest peak in Rajasthan, or enjoy a peaceful walk in Peace Park, which features beautifully maintained gardens and meditative spaces. With its serene environment, Mount Abu provides a unique experience in Rajasthan, combining natural beauty with cultural landmarks and a touch of adventure, making it a popular destination for both locals and tourists alike.`,
    itinerary: [
      {
        day: 1,
        title: "Departure for Udaipur",
        activities: [
          "Our Journey will start from Indore at railway station according to train schedule to catch Veerbhumi Chittaurgarh Exp(19315)",
          "Overnight Stay: Overnight journey in train",
        ],
      },
      {
        day: 2,
        title: "Mount Abu Sightseeing",
        activities: [
          "We will reach udaipur early in the moring (around 4:15AM).",
          "Upon reaching Udaipur transfer to Mount Abu (2-3 hours Journey).",
          "Check in to the hotel, freshen up and have breakfast.",
          "After that visit - Nakki Lake, Dilwara Temple, Sunset Point.",
          "After sightseeing, we move back to the Hotel at Mount Abu.",
          "Enjoy Musical night.",
          "Meal: Breakfast and Dinner",
          "Stay: Hotel at Mount Abu",
        ],
      },
      {
        day: 3,
        title: "Udaipur Sightseeing First Day",
        activities: [
          "Early morning transfer to Udaipur (2-3 hours Journey).",
          "Check in to the hotel, freshen up and have breakfast.",
          "After that visit - Karni Mata Temple, Luvkush Vatika, City Palace, Lake Pichola, Bagore ki Haveli, Gangaur Ghat, Ambrai Ghat and the local market.",
          "After sightseeing, we move back to the Hotel at Udaipur.",
          "Dinner and overnight stay.",
          "Meal: Breakfast and Dinner",
          "Stay: Hotel at Udaipur",
        ],
      },
      {
        day: 4,
        title: "Udaipur Sightseeing Second Day",
        activities: [
          "Early morning enjoy pool, freshen up, and checkout from hotel.",
          "After breakfast, visit - Bahubali hills, Fateh Sagar Lake, Sajjangarh Palace, Saheliyon ki Bari, Nimach Mata Temple (Ropeway), Sajjangarh Wildlife Sanctuary.",
          "After sightseeing, we move back to the Hotel at Udaipur railway station at 7:00PM to catch Veerbhumi Chittaurgarh Express (19316) departed by 08:20 PM. ",
          "Overnight journey in train.",
          "Meal: Breakfast",
        ],
      },
      {
        day: 5,
        title: "Reach Indore",
        activities: [
          "Arrival at Indore railway station in the morning.",
          "Trip ends with unforgettable memories of Udaipur and Mount Abu.",
        ],
      },
    ],
    images: [
      "/Nakki_Lake.jpg",
      "/Jagdish_Temple_(4).jpg",
      "/20191207_City_Palace,_Udaipur_1701_7325.jpg",
      "/View_of_Udaipur_from_City_Palace.jpg",
    ],
  },
};

const slideData = [
  {
    title: "Mystical Varanasi: A Journey to the Soul",
    description:
      "Experience the spiritual essence of Varanasi. Witness the Ganga Aarti on the ghats and immerse yourself in the city's deep-rooted traditions.",
    imgSrc: "/path/to/img1.jpg",
  },
  {
    title: "The Tranquility of Kerala's Backwaters",
    description:
      "Discover the peaceful backwaters of Kerala, where you can relax on a houseboat and enjoy the lush greenery and traditional village life along the waterways.",
    imgSrc: "/path/to/img2.jpg",
  },
  {
    title: "The Vibrant Streets of Mumbai",
    description:
      "Dive into the bustling life of Mumbai, India’s financial capital. From iconic landmarks like the Gateway of India to the vibrant street food scene.",
    imgSrc: "/path/to/img3.jpg",
  },
  {
    title: "Royal Heritage in Jaipur",
    description:
      " Explore the royal heritage of Jaipur, the Pink City. Visit grand palaces, majestic forts, and vibrant markets that reflect the rich history and culture of Rajasthan.",
    imgSrc: "/path/to/img4.jpg",
  },
  {
    title: "The Serenity of Himachal Pradesh",
    description:
      "Escape to the serene landscapes of Himachal Pradesh, where the mountains offer a perfect retreat. Enjoy trekking and breathe in the fresh mountain air",
    imgSrc: "/path/to/img5.jpg",
  },
  {
    title: "Exploring the Rann of Kutch",
    description:
      "Experience the unique beauty of the Rann of Kutch, where the white salt desert stretches as far as the eye can see. Visit during the Rann Utsav for cultural performances, handicrafts, and traditional cuisine.",
    imgSrc: "/path/to/img6.jpg",
  },
];

function App() {
  const [showUpcomingTripCard, setShowUpcomingTripCard] = useState(false);

  const handleClose = () => {
    setShowUpcomingTripCard(false);
  };

  useEffect(() => {
    // Check if the component has already been shown in the current session
    const hasShown = sessionStorage.getItem("hasShownUpcomingTripCard");

    if (!hasShown) {
      // Show the component with a delay and set flag in session storage
      const timer = setTimeout(() => {
        setShowUpcomingTripCard(true);
        sessionStorage.setItem("hasShownUpcomingTripCard", "true");
      }, 2000);

      return () => clearTimeout(timer); // Clean up timer on unmount
    }
  }, []);

  return (
    <BrowserRouter>
      {showUpcomingTripCard && (
        <UpcomingTripCard handleClose={handleClose}></UpcomingTripCard>
      )}
      {/* Conditionally render */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personalised-trips" element={<PersonalisedTrips />} />
        <Route
          path="/corporate-trips"
          element={<CorporatePage></CorporatePage>}
        />
        <Route
          path="/group-trips/:location"
          element={<GroupTripPage groupTripsData={groupTripsData} />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<TrandingSlider />} />
        <Route
          path="/blog/:id"
          element={<BlogPostPage slideData={slideData} />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition></TermsAndCondition>}
        />
        <Route path="*" element={<Error404Page></Error404Page>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
