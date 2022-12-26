$("form").on("submit", function (e) {
  e.preventDefault();

  let title = $("#title").val();
  let rating = $("#rating").val();

  const movieData = { title, rating };
  const HTMLtoAppend = createMovieDataHTML(movieData);

  $("#movieTBody").append(HTMLtoAppend);
  $("form").trigger("reset");
});

function createMovieDataHTML(data) {
  return `
    <tr class="addedMovie">
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td><button id="deleteMovie">Delete</button></td>
    </tr>
    `;
}

$("#movieTBody").on("click", "#deleteMovie", function (e) {
  $(e.target).closest("tr").remove();
});
