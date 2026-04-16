(function () {
  const pubs = window.FISHY_PUBS || [];
  const fish = document.getElementById("fishPointer");
  const button = document.getElementById("spinButton");
  const result = document.getElementById("result");
  const wheel = document.querySelector(".wheel");

  if (!pubs.length || !fish || !button || !result) return;

  const sliceAngle = 360 / pubs.length;
  let currentRotation = 0;
  let spinning = false;

  function clearWinner() {
    document.querySelectorAll(".slice-winner").forEach((el) =>
      el.classList.remove("slice-winner")
    );
  }

  function spin() {
    if (spinning) return;
    spinning = true;
    button.disabled = true;
    result.classList.remove("show");
    result.textContent = "";
    clearWinner();

    fish.classList.add("spinning");

    const winningIndex = Math.floor(Math.random() * pubs.length);
    const sliceCenter = winningIndex * sliceAngle + sliceAngle / 2;

    const fullTurns = 5 + Math.floor(Math.random() * 3);
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.6);
    const targetWithinCircle = (sliceCenter + jitter + 360) % 360;

    const currentMod = ((currentRotation % 360) + 360) % 360;
    const delta = (targetWithinCircle - currentMod + 360) % 360;
    currentRotation = currentRotation + fullTurns * 360 + delta;

    fish.style.transform = `rotate(${currentRotation}deg)`;

    const handleEnd = () => {
      fish.removeEventListener("transitionend", handleEnd);
      const slice = document.getElementById(`slice-${winningIndex}`);
      if (slice) slice.classList.add("slice-winner");
      result.textContent = `This week: ${pubs[winningIndex]}`;
      result.classList.add("show");
      spinning = false;
      button.disabled = false;
    };
    fish.addEventListener("transitionend", handleEnd);
  }

  button.addEventListener("click", spin);
  if (wheel) wheel.addEventListener("click", spin);
})();
