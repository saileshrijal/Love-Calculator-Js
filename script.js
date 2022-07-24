let boyfriend = document.getElementById('boyfriend');

let girlfriend = document.getElementById('girlfriend');

let calculate_btn = document.getElementById('calculate_love');

let output_section = document.querySelector('.output');

let music = new Audio('assets/pop.mp3')

let go_back = document.getElementById('go_back')

let girlfriend_output = document.getElementById('output_girlfriend');

let boyfriend_output = document.getElementById('output_boyfriend')

let score_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let love_score = document.getElementById('love_score')

calculate_btn.onclick = () => {
    if (boyfriend.value != "" && girlfriend.value != "") {
        output_section.style.top = 0;
        music.currentTime = 0;
        music.play();
        girlfriend_output.innerText = girlfriend.value;
        boyfriend_output.innerText = boyfriend.value;
        let random_score = Math.floor(Math.random() * score_value.length);
        love_score.innerText = random_score;
    }
}

go_back.onclick = () => {
    output_section.style.top = "-100%";
    music.currentTime = 0;
    music.play();
}