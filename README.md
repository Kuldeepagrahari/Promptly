<h1>🧠 Promptly - Generative AI Software</h1>

<p>A fully functional <strong>ChatGPT-like AI chatbot</strong> built using the <strong>MERN stack</strong>, integrated with <strong>Clerk</strong> for authentication and <strong>Gemini API</strong> for AI responses. Includes secure chat storage, responsive UI, and modern tooling like <strong>ImageKit</strong> for media handling.</p>

<hr>

<h2>🚀 Features</h2>

<h3>✅ Core Functionalities</h3>
<ul>
  <li>🔐 <strong>Clerk Authentication</strong><br>Email, social login, and OTP verification. Session management with secure JWT-based user flow.</li>
  <li>🤖 <strong>AI Chat Responses</strong><br>Integrated with <strong>Gemini API</strong> for dynamic, intelligent conversation generation.</li>
  <li>💬 <strong>Persistent Chat History</strong><br>MongoDB-based storage for user-specific chat history.</li>
  <li>📱 <strong>Responsive UI</strong><br>Fully mobile-friendly and adaptive layout using React.js.</li>
  <li>🖼️ <strong>Optimized Image Handling</strong><br>Uses <strong>ImageKit.io</strong> for fast, CDN-powered image delivery.</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Frontend</td><td>React.js</td></tr>
    <tr><td>Backend</td><td>Node.js, Express.js</td></tr>
    <tr><td>Database</td><td>MongoDB</td></tr>
    <tr><td>Auth</td><td>Clerk</td></tr>
    <tr><td>AI Engine</td><td>Gemini API</td></tr>
    <tr><td>Image CDN</td><td>ImageKit.io</td></tr>
  </tbody>
</table>

<hr>

<h2>📦 Setup Instructions</h2>

<h3>📋 Prerequisites</h3>
<ul>
  <li>Node.js & npm</li>
  <li>MongoDB Atlas or local DB</li>
  <li>Clerk account setup</li>
  <li>Gemini API Key</li>
  <li>ImageKit account</li>
</ul>
<h2>📸 Screenshots</h2>

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2cc694e7-b536-4a24-bf69-1229e77284a3" alt="Chat2" width="500"/></td>
    <td><img src="https://github.com/user-attachments/assets/cbca4730-a487-4a38-b6d7-23fba111383c" alt="Chat1" width="800"/><img src="https://github.com/user-attachments/assets/d50b7db4-fd94-4120-921a-aab1fb1af418" alt="Chat3" width="800"/> </td>
  </tr>
</table>

<hr>

<h3>🧪 Installation</h3>

<ol>
  <li><strong>Clone the Repository</strong>
    <pre><code>git clone https://github.com/Kuldeepagrahari/Promptly.git
cd chatgpt-clone</code></pre>
  </li>
  <li><strong>Install Dependencies</strong>
    <pre><code>npm install
cd client
npm install
cd ..</code></pre>
  </li>
  <li><strong>Environment Variables</strong><br>Create a <code>.env</code> file in the root folder:
    <pre><code>PORT=5000
MONGO_URI=your_mongodb_connection_string
CLERK_FRONTEND_API=your_clerk_frontend_api
CLERK_API_KEY=your_clerk_api_key
GEMINI_API_KEY=your_gemini_api_key
IMAGEKIT_PUBLIC_API_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint</code></pre>
  </li>
  <li><strong>Run the App</strong>
    <pre><code># Start Backend
npm start

# Start Frontend
cd client
npm start</code></pre>
  </li>
</ol>

<hr>

<h2>📁 Project Structure</h2>

<pre><code>📦 chatgpt-clone/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
├── models/
├── routes/
├── server.js
├── .env
└── README.md</code></pre>

<hr>

<h2>📡 API Endpoints</h2>

<h3>🔐 Authentication</h3>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td>/auth/login</td><td>Login user</td></tr>
    <tr><td>POST</td><td>/auth/register</td><td>Register new user</td></tr>
  </tbody>
</table>

<h3>💬 Chat</h3>
<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>POST</td><td>/api/chat</td><td>Save user message + AI response</td></tr>
    <tr><td>GET</td><td>/api/chat</td><td>Retrieve user's chat history</td></tr>
  </tbody>
</table>

<hr>



<h2>🌟 Future Enhancements</h2>
<ul>
  <li>🌐 Multilingual Chat Support</li>
  <li>🎙️ Voice-to-Text Interaction</li>
  <li>🌙 Dark Mode Toggle</li>
  <li>🔒 Role-based Access Control</li>
  <li>🔄 Chat Export & Download</li>
</ul>

<hr>

<h2>🤝 Contributing</h2>

<ol>
  <li>Fork the repository</li>
  <li>Create a branch
    <pre><code>git checkout -b feature-name</code></pre>
  </li>
  <li>Make your changes</li>
  <li>Push to GitHub
    <pre><code>git push origin feature-name</code></pre>
  </li>
  <li>Submit a Pull Request</li>
</ol>

<hr>

<h2>📬 Contact</h2>

<ul>
  <li><strong>Developer:</strong> Kuldeep Agrahari</li>
  <li><strong>Email:</strong> kuldeepagrahari9103@gmail.com</li>
  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/kuldeep-agrahari-56b159260" target="_blank">Kuldeep Agrahari</a></li>
</ul>

<hr>

<h3>⭐ If you like this project, don’t forget to star the repo!</h3>
