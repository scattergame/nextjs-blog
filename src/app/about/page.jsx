export default function About() {
  return (
    <div className="min-h-screen space-y-4">
      <h1 className="text-2xl font-medium text-amber-500 max-w-6xl px-6">
        About
      </h1>
      <div className="space-y-2 px-6">
        <p>
          ReactJS is an open-source JavaScript library that is used for building
          user interfaces in a declarative and efficient way. It is a
          component-based front-end library responsible only for the view layer
          of an MVC (Model View Controller) architecture.
        </p>
        <p>
          React is used to create modular user interfaces and it promotes the
          development of reusable UI components that display dynamic data.
          ReactJS uses a declarative paradigm which makes it possible for
          applications to be both effective and flexible. It creates simple
          views for each state in your application and efficiently updates and
          renders just the right component when your data changes. The
          declarative view makes your code more predictable and easier to debug.
          Each component in a React application is responsible for rendering a
          separate, reusable piece of HTML code. The ability to nest components
          within other components allows for the building of complex
          applications from simple building blocks.
        </p>
        <p>
          A component may also keep track of its internal state, for example, a
          TabList component may keep a variable for the open tab in memory.
        </p>
      </div>
    </div>
  );
}
