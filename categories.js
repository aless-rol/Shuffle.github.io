document.addEventListener("DOMContentLoaded", function () {
  const selectedInterests = new Set();
  const selectedSkills = new Set();

  const interestsContainer = document.getElementById("interests-container");
  const skillsContainer = document.getElementById("skills-container");

  function toggleTag(event) {
    const tag = event.target.closest(".tag");
    if (!tag) return;

    const tagId = tag.dataset.id || tag.id;
    const isInterest = tag.closest("#interests-container") !== null;

    if (isInterest) {
      if (selectedInterests.has(tagId)) {
        selectedInterests.delete(tagId);
        tag.classList.remove("selected");
      } else {
        selectedInterests.add(tagId);
        tag.classList.add("selected");
      }
    } else {
      if (selectedSkills.has(tagId)) {
        selectedSkills.delete(tagId);
        tag.classList.remove("selected");
      } else {
        selectedSkills.add(tagId);
        tag.classList.add("selected");
      }
    }
  }

  interestsContainer.addEventListener("click", toggleTag);
  skillsContainer.addEventListener("click", toggleTag);

  document.querySelector(".add-button").addEventListener("click", () => {
    console.log(
      "Centres d'intérêt sélectionnés:",
      Array.from(selectedInterests),
    );
    console.log("Compétences sélectionnées:", Array.from(selectedSkills));

    alert(
      "Sélections enregistrées!\nIntérêts: " +
        Array.from(selectedInterests).join(", ") +
        "\nCompétences: " +
        Array.from(selectedSkills).join(", "),
    );
  });
});
