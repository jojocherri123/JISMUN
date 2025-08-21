document.querySelectorAll(".feesCard").forEach((btn) => {
    btn.addEventListener("click", function () {
    function random(max) {
      return Math.random() * max;
    }

    var c = document.createDocumentFragment();

    var audio = new Audio("confetti-pop-sound.mp3");
    audio.play();

    for (var i = 0; i < 100; i++) {
        var styles =
        "transform: translate3d(" +
        (random(500) - 250) +
        "px, " +
        (random(200) - 150) +
        "px, 0) rotate(" +
        random(360) +
        "deg);" +
        "background: hsla(" +
        random(360) +
        ",100%,50%,1);" +
        "animation: bang 700ms ease-out forwards;" +
        "opacity: 0;";

        var e = document.createElement("i");
        e.style.cssText = styles;

        e.classList.add("confetti");


        e.onanimationend = () => {
             document.querySelectorAll(".confetti").forEach(box => {
                box.remove();
            });
        }

        // e.addEventListener("animationend", function handler() {
        //     // e.removeEventListener('animationend', handler);
        //     e.style.cssText = "display:none;";
        //     e.remove();
        //     console.log("removed");
        // });

        c.appendChild(e);
    }

    audio.remove();

    this.appendChild(c);
    });
});
