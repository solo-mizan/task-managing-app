import { useState } from "react";

import SearchBar from "./search-bar";
import TaskActions from "./task-actions";
import TaskList from "./task-list";

export default function TaskBoard() {
  const defaultTask = {
    'id': crypto.randomUUID(),
    'title': 'Learn React',
    'description': 'I want to learn ReactJs such that I can treat it like my slave and make it do whatever I want to do.',
    'tags': ['web', 'react', 'js'],
    'priority': 'High',
    'isFavorite': true,
  }
  const [tasks, setTasks] = useState(defaultTask);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* Search Box */}
        <SearchBar />
        {/* Search Box Ends */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
