// Validate user input and send login request
const handleBioSubmit = async (event) => {
  event.preventDefault();
  try {
    const bio = document.querySelector(".bio");
    const bioText = document.querySelector("#user-bio-text").value;

    const response = await fetch("/api/users", {
      method: "UPDATE",
      body: JSON.stringify({ bioText }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    // Display a message on screen if the save was successful
    // or not
    if (!response.ok) {
      bio.classList.remove("bio-form-success");
      bio.classList.add("bio-form-error");
    } else {
      bio.classList.remove("bio-form-error");
      bio.classList.add("bio-form-success");
    }
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".bio").addEventListener("submit", handleBioSubmit);
