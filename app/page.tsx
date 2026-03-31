import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentSection from "@/components/ContentSection";
import Footer from "@/components/Footer";

const sections = [
  {
    number: "01" as const,
    tagline: "GEt Started",
    heading: "What level of hiker are you?",
    body: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    imgSrc: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    imgAlt: "Hiker on mountain trail",
    reverse: false,
  },
  {
    number: "02" as const,
    tagline: "Hiking Essentials",
    heading: "Picking the right Hiking Gear!",
    body: "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
    imgSrc: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    imgAlt: "Hiking gear and equipment",
    reverse: true,
  },
  {
    number: "03" as const,
    tagline: "where you go is the key",
    heading: "Understand Your Map & Timing",
    body: "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that in a mile, I make a right turn at the junction.",
    imgSrc: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80",
    imgAlt: "Mountain map and compass",
    reverse: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {sections.map((s) => (
        <ContentSection key={s.number} {...s} />
      ))}
      <Footer />
    </>
  );
}
