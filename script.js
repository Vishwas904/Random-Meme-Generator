function fetchData() {
    fetch("https://meme-api.com/gimme")
      .then((data) => {
        if (!data.ok) throw new Error("Image didn't load!!");
        return data.json();
      })
      .then((data) => {
        const img = document.getElementById("meme");
        img.setAttribute("src", data.url);
      })
      .catch((error) => {
        fetchData();
      });
  }
  fetchData();