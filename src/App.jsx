import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex min-h-screen bg-slate-700 flex-col max-w-full  bg-opacity-40  ">
      <div className="mx-auto my-0 bg-gradient-to-br from-blue-500 from-10%  via-blue-800 to-blue-900 to-100%">
        <div className="">
          <Header />
          <h1 className="w-4xl">
            Hello Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sapiente, aliquam reiciendis. Maiores in natus corporis accusamus
            eos quisquam, delectus laudantium repellat voluptatibus, debitis ab
            molestias. Rerum esse dignissimos expedita quo!!!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
