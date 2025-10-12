import Image from "next/image";

export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20">
      <div className="flex flex-col justify-center items-center my-8">
        <h1 className="text-4xl my-2">Michael Mangialardi</h1>
        <h2 className="text-xl">Classical Education & Technology</h2>
      </div>
      <main className="flex flex-col max-w-3xl">
        <div className="flex flex-col my-4">
            <div className="flex flex-col mb-2">
              <div className="font-bold my-2">About</div>
              <div className="my-2">
                I'm a Dean of Students and Teacher at a classical Christian school with 10 years of software engineering experience (3 years managing software development teams). I bridge classical education philosophy with modern technology, offering tutoring, consulting, and speaking on the intersection of timeless wisdom and contemporary challenges.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-bold my-2">Credentials</div>
              <ul className="list-inside text-sm/6 text-center sm:text-left my-2">
                <li>- Master of Studies in Classical Christian Studies (Davenant Hall, Spring 2026)</li>
                <li>- B.S. Computer Science, Loras College</li>
              </ul>
            </div>
        </div>
        <div className="flex flex-col items-center sm:items-start mb-4">
          <div className="font-bold my-2">Services</div>
          <ul className="list-inside text-sm/6 text-center sm:text-left px-4">
            <div className="my-2 font-bold">Tutoring:</div>
              <ul className="list-inside text-sm/6 text-center sm:text-left">
                <li>- Latin (Beginner or Intermediate)</li>
                <li className="text-cyan-200">- $45/hour | In-person or virtual</li>
              </ul>
              <div className="my-2 font-bold">Consulting:</div>
              <ul className="list-inside text-sm/6 text-center sm:text-left">
                <li>- Design Systems and UI Development</li>
                <li>- Principled Software Development Leadership</li>
                <li>- Organizational Transformation</li>
                <li className="text-cyan-200">- $80/hour | Flexible Scope</li>
              </ul>
              <div className="my-2 font-bold">Speaking:</div>
              <ul className="list-inside text-sm/6 text-center sm:text-left">
                <li>- Modernity and Technology</li>
                <li>- AI and Medieval Philosophy</li>
                <li>- Principled Leadership</li>
              </ul>
          </ul>
        </div>
        <hr className="mt-4" />
      </main>
      <footer className="flex flex-col w-full max-w-3xl mt-4">
          <div className="font-bold my-2">Contact</div>
          <div>
            <span className="font-bold mr-2">Email:</span>
            <a href="mailto:mikemangialardi94@gmail.com">mikemangialardi94@gmail.com</a>
          </div>
          <div>
            <span className="font-bold mr-2">Phone:</span>
            <a href="tel:5408354896">540-835-4896</a>
          </div>
      </footer>
    </div>
  );
}
