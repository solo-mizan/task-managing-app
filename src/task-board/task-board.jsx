import SearchBar from "./search-bar";
import TaskActions from "./task-actions";
import TaskList from "./task-list";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box */}
        <SearchBar />
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList />
        </div>
      </div>
    </section>
  );
}
