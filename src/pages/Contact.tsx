function Contact() {
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 mt-20 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h1>

        <p className="mb-4 text-gray-700">
          I would like to hear from you. Whether you have questions, feedback, or
          just want to say hello, feel free to reach out via any of the ways
          below
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Email:</strong> sharmakaran2030@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 9588695873
          </li>
          <li>
            <strong>Address:</strong> Pune, Maharashtra, India
          </li>
        </ul>

        <div className="mt-8 p-4 bg-blue-50 text-blue-900 rounded-md">
          <p>
            You can also reach me on social media through <a href="www.linkedin.com/in/karan-sharma-6961651b3" target="_blank" className="text-black hover:text-blue-400" >linkedin</a>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
