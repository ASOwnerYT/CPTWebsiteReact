import HeaderSm from "../components/HeaderSm";

export default function Home() {
  return (
    <div>
      <HeaderSm text="Contact" />
      <section className="container mx-auto mb-32">
        <p className="mb-4 text-gray-900">
          Contact us about anything related to learning to code. We will get back to you as soon as possible.
        </p>
        <form method="GET" action="/formsubmit" className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="programmingLanguage"
              className="block text-sm font-medium text-gray-700"
            >
              Favourite Programming Language
            </label>
            <select
              id="programmingLanguage"
              name="programmingLanguage"
              required
              className="mt-1 p-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            >
              <option value="none">None</option>
              <option value="scratch">Scratch</option>
              <option value="html-css-js">HTML/CSS/JS</option>
              <option value="python">Python</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">Preferred Contact Method</legend>
              <div className="mt-2 space-y-2">
                <div>
                  <input
                    type="radio"
                    id="contactEmail"
                    name="contactMethod"
                    value="email"
                    required
                    className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                  />
                  <label htmlFor="contactEmail" className="ml-2 text-sm text-gray-700">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="contactPhone"
                    name="contactMethod"
                    value="phone"
                    required
                    className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                  />
                  <label htmlFor="contactPhone" className="ml-2 text-sm text-gray-700">
                    Phone
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-700">Topics of Interest</legend>
              <div className="mt-2 space-y-2">
                <div>
                  <input
                    type="checkbox"
                    id="topicWebDev"
                    name="topics"
                    value="webDevelopment"
                    className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                  />
                  <label htmlFor="topicWebDev" className="ml-2 text-sm text-gray-700">
                    Web Development
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="topicDataScience"
                    name="topics"
                    value="dataScience"
                    className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                  />
                  <label htmlFor="topicDataScience" className="ml-2 text-sm text-gray-700">
                    Data Science
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="topicGameDev"
                    name="topics"
                    value="gameDevelopment"
                    className="h-4 w-4 text-sky-600 border-gray-300 focus:ring-sky-500"
                  />
                  <label htmlFor="topicGameDev" className="ml-2 text-sm text-gray-700">
                    Game Development
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
