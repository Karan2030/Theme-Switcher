function About() {
  return (
    <>
      <h1 className="text-2xl font-bold p-10">About</h1>
      <h2 className="text-xl font-bold pb-10">The Multi-Theme Changer</h2>
      <p className="text-lg">
        Our multi-theme changer lets you personalize your browsing experience by
        switching between different color themes seamlessly. Whether you prefer
        a bright, light mode for daytime or a soothing dark mode for night, you
        can easily toggle across multiple themes to match your mood and
        environment.
      </p>
      <h2 className="text-xl font-bold p-10">Key Features:</h2>
      <p className="text-lg">
        <ul
          className="space-y-2
        [.theme1_&]:bg-white [.theme1_&]:text-gray-800
  [.theme2_&]:bg-gray-900 [.theme2_&]:text-gray-100
  [.theme3_&]:bg-blue-50 [.theme3_&]:text-blue-900
  p-6 rounded-lg"
        >
          <li>
            <h3>Dynamic theme switching: </h3>
            <p>Change themes instantly without refreshing the page.</p>
          </li>
          <li>
            <h3>Multiple preset themes: </h3>
            <p>Choose from light, dark, and other theme.</p>
          </li>
          <li>
            <h3>User preference persistence: </h3>
            <p>
              Your chosen theme is remembered and applied on your next visit.
            </p>
          </li>
          <li>
            <h3>Accessibility friendly: </h3>
            <p>
              Select themes that are easier on the eyes and improve readability.
            </p>
          </li>
          <li>
            <h3>Customizable styles: </h3>
            <p>
              Extend and create your own themes for a truly personalized look.
            </p>
          </li>
          <li>
            <h3>
              With the multi-theme changer, your interface adapts to you, making
              every visit comfortable, visually appealing, and uniquely yours.
            </h3>
          </li>
        </ul>
      </p>
    </>
  );
}

export default About;
