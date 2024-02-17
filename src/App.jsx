import Header from "./Header";
import Footer from "./footer";
import HeroSection from "./hero-section";
import TaskBoard from "./task-board/task-board";

function App() {
  return (
    <div className="body">
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </div>
  );
}

export default App;
