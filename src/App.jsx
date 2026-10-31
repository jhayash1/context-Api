import Card from "./Card";

const card = [
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Card-1",
    des: "Web Development"
  },
  {
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Card-2",
    des: "Digital Marketing"
  },
  {
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    title: "Card-3",
    des: "Programming and Coding"
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Card-4",
    des: "Team Collaboration"
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    title: "Card-5",
    des: "Business Analytics"
  },
  {
    url: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    title: "Card-6",
    des: "UI UX Design"
  },
  {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Card-7",
    des: "Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    title: "Card-8",
    des: "Our Team"
  },
  {
    url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    title: "Card-9",
    des: "Online Learning"
  },
  {
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    title: "Card-10",
    des: "Creative Portfolio"
  }
];

function App() {
  return (
    <>
      <h1>All card here.</h1>
      <div className="grid">
      <Card card={card}/>

      </div>
    </>
  );
}

export default App;
