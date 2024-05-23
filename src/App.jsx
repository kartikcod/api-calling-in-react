import React, { useEffect } from "react";

const DATA =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-04-19&sortBy=publishedAt&apiKey=50fe681fbe264d7c95516b20f3a537fb";

const fetchApiData = async (url) => {
  try {
    const res = await fetch(url);
    const api = await res.json();
    console.log(api);
  } catch (error) {
    console.log(error);
  }
};
function App(){
useEffect(() => {
  fetchApiData(DATA);
},[]);

function App() {
  return (
    <div>
      <h1>kartik mahato</h1>
    </div>
  );
}
}

export default App;
