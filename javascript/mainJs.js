console.log("script is running");

document.addEventListener("DOMContentLoaded", () => {
    const Pimgs = document.querySelectorAll(".image-wrapper1 img");
    const Simgs = document.querySelectorAll(".image-wrapper2 img");
    const Ptitles = document.querySelectorAll(".title-wrapper1 h3");
    const Stitles = document.querySelectorAll(".title-wrapper2 h3");
    const Ptext = document.querySelectorAll(".text-wrapper1 p");
    const Stext = document.querySelectorAll(".text-wrapper2 p");

    let Pindex = 0;
    let Sindex = 0;
    function cycle() {
        // cycle images text and titles on the left panel
        Pimgs[Pindex].classList.remove('active');
        Ptitles[Pindex].classList.remove('active');
        Ptext[Pindex].classList.remove('active');

        Pindex = (Pindex + 1) % Pimgs.length;

        Pimgs[Pindex].classList.add('active');
        Ptitles[Pindex].classList.add('active');
        Ptext[Pindex].classList.add('active');

        // cycle images text and titles on the right panel
        Simgs[Sindex].classList.remove('active');
        Stitles[Sindex].classList.remove('active');
        Stext[Sindex].classList.remove('active');

        Sindex = (Sindex + 1) % Simgs.length;

        Simgs[Sindex].classList.add('active');
        Stitles[Sindex].classList.add('active');
        Stext[Sindex].classList.add('active');
    }

    setInterval(cycle,8000);

    Pimgs[0].classList.add('active');
    Simgs[0].classList.add('active');
    Ptitles[0].classList.add('active');
    Stitles[0].classList.add('active');
    Ptext[0].classList.add('active');
    Stext[0].classList.add('active');
})