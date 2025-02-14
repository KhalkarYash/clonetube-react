# **CloneTube** 🎥 | A YouTube Clone  

CloneTube is a YouTube clone built using **React.js, Redux, Tailwind CSS, and the YouTube API**. It replicates core YouTube functionalities like video search, recommendations, and live chat, offering a sleek and responsive user experience.  

---

## **🚀 Features**  

✅ **Video Streaming** – Fetches videos dynamically using the YouTube API.  
✅ **Search Functionality** – Users can search for videos just like on YouTube.  
✅ **Video Recommendations** – Displays related video suggestions.  
✅ **Live Chat (Mock)** – Simulated real-time chat functionality.  
✅ **Trending Videos** – Fetches trending content dynamically.  
✅ **Dark Mode Support** – User-friendly UI with dark/light mode toggle.  
✅ **Responsive Design** – Fully optimized for all screen sizes using Tailwind CSS.  

---

## **🛠️ Tech Stack**  

- **Frontend:** React.js, Redux, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **API Integration:** YouTube Data API  
- **Styling:** Tailwind CSS  
- **Live Chat (Mock):** Redux + setInterval (Simulated messages)  

---

## **📸 Screenshots**  

(Include screenshots of your homepage, search page, video player, and live chat.)  

---

## **🔧 Installation & Setup**  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/KhalkarYash/CloneTube.git
   cd CloneTube
   ```  
   
2. **Install dependencies:**  
   ```bash
   npm install
   ```  

3. **Get a YouTube API Key:**  
   - Go to [Google Cloud Console](https://console.cloud.google.com/) and create a new project.  
   - Enable the **YouTube Data API v3**.  
   - Generate an API key.  

4. **Create a `.env` file in the root directory:**  
   ```plaintext
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```  

5. **Run the project:**  
   ```bash
   npm start
   ```  

---

## **📚 Folder Structure**  

```
CloneTube/
│── public/            # Static assets
│── src/
│   ├── components/    # UI Components (Navbar, VideoCard, etc.)
│   ├── pages/         # Main pages (Home, Watch, Search)
│   ├── redux/         # Redux store & slices
│   ├── utils/         # Helper functions
│   ├── App.js         # Main App Component
│   ├── index.js       # Root React file
│── .env               # Environment variables
│── package.json       # Project dependencies
│── README.md          # Project Documentation
```

---

## **🎯 Future Enhancements**  

- ✅ **Real-time live chat using Firebase**  
- ✅ **User authentication (Login & Signup)**  
- ✅ **Custom video upload feature**  
- ✅ **Like, Comment, and Subscribe functionality**  

---

## **🤝 Contributing**  

Contributions are welcome! Feel free to open an issue or submit a pull request.  

---

## **📜 License**  

This project is for **educational purposes only**. YouTube and its logo are trademarks of Google LLC.  

---

## **⭐ Show Your Support**  

If you found this project useful, don't forget to **star** 🌟 the repository!  
