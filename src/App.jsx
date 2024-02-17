import Header from "./Header";
import Footer from "./footer";
import HeroSection from "./hero-section";
import TaskBoard from "./task-board/task-board";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
