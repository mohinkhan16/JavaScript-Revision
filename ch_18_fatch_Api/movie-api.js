document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const movieName = document.getElementById("movie").value.trim();

        const container = document.getElementById("container");
        container.innerHTML = "";

        const response = await fetch(
            `https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`
        );

        const data = await response.json();

        console.log(data);

        if (data.Response === "True") {
            data.Search.forEach((movie) => {
                const img = document.createElement("img");

                img.src = movie.Poster;
                img.alt = movie.Title;
                img.style.width = "150px";
                img.style.margin = "10px";

                container.appendChild(img);
            });
        } else {
            container.innerHTML = "<h1>Movie Not Found</h1>";
        }
    } catch (error) {
        console.log(error.message);
    }
});