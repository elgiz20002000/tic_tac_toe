'use strict';

document.addEventListener("DOMContentLoaded", () => {
    let boards = document.querySelectorAll('.board'),
        player_turn = document.querySelector('.player_turn'),
        player_1_count = document.querySelector('.p_1_count'),
        player_2_count = document.querySelector('.p_2_count'),
        bg = document.querySelector('.bg'),
        info = document.querySelector('.info'),
        button = document.querySelector('.button'),
        x = true;

    player_turn.innerHTML = `<img src="./icon/x.svg" alt="x">`;

    function when_full() {
        if (boards[0].querySelector('img') && boards[1].querySelector('img') && boards[2].querySelector('img') && boards[3].querySelector('img') && boards[4].querySelector('img') && boards[5].querySelector('img') && boards[6].querySelector('img') && boards[7].querySelector('img') && boards[8].querySelector('img')) {
            bg.style.cssText = 'display:block;';
            info.textContent = "The End";
        }
    }


    function game_function(boards) {
        let p_1_current_count = +player_1_count.textContent, p_2_current_count = +player_2_count.textContent;
        if (boards[0].querySelector('img') && boards[1].querySelector('img') && boards[2].querySelector('img')) {
            if ((boards[0].children[0].alt == 'x' && boards[1].children[0].alt == 'x' && boards[2].children[0].alt == 'x') || (boards[0].children[0].alt == 'zero' && boards[1].children[0].alt == 'zero' && boards[2].children[0].alt == 'zero')) {
                if (boards[0].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[0].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[3].querySelector('img') && boards[4].querySelector('img') && boards[5].querySelector('img')) {
            if ((boards[3].children[0].alt == 'x' && boards[4].children[0].alt == 'x' && boards[5].children[0].alt == 'x') || (boards[3].children[0].alt == 'zero' && boards[4].children[0].alt == 'zero' && boards[5].children[0].alt == 'zero')) {
                if (boards[3].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[3].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[6].querySelector('img') && boards[7].querySelector('img') && boards[8].querySelector('img')) {
            if ((boards[6].children[0].alt == 'x' && boards[7].children[0].alt == 'x' && boards[8].children[0].alt == 'x') || (boards[6].children[0].alt == 'zero' && boards[7].children[0].alt == 'zero' && boards[8].children[0].alt == 'zero')) {

                if (boards[6].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[6].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[0].querySelector('img') && boards[3].querySelector('img') && boards[6].querySelector('img')) {
            if ((boards[0].children[0].alt == 'x' && boards[3].children[0].alt == 'x' && boards[6].children[0].alt == 'x') || (boards[0].children[0].alt == 'zero' && boards[3].children[0].alt == 'zero' && boards[6].children[0].alt == 'zero')) {
                if (boards[0].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[0].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[1].querySelector('img') && boards[7].querySelector('img') && boards[7].querySelector('img')) {
            if ((boards[1].children[0].alt == 'x' && boards[4].children[0].alt == 'x' && boards[7].children[0].alt == 'x') || (boards[1].children[0].alt == 'zero' && boards[4].children[0].alt == 'zero' && boards[7].children[0].alt == 'zero')) {
                if (boards[1].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[1].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[2].querySelector('img') && boards[5].querySelector('img') && boards[8].querySelector('img')) {
            if ((boards[2].children[0].alt == 'x' && boards[5].children[0].alt == 'x' && boards[8].children[0].alt == 'x') || (boards[2].children[0].alt == 'zero' && boards[5].children[0].alt == 'zero' && boards[8].children[0].alt == 'zero')) {
                if (boards[2].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[2].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        }
        if (boards[0].querySelector('img') && boards[4].querySelector('img') && boards[8].querySelector('img')) {
            if ((boards[0].children[0].alt == 'x' && boards[4].children[0].alt == 'x' && boards[8].children[0].alt == 'x') || (boards[0].children[0].alt == 'zero' && boards[4].children[0].alt == 'zero' && boards[8].children[0].alt == 'zero')) {
                if (boards[0].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[0].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        } if (boards[2].querySelector('img') && boards[4].querySelector('img') && boards[6].querySelector('img')) {
            if ((boards[2].children[0].alt == 'x' && boards[4].children[0].alt == 'x' && boards[6].children[0].alt == 'x') || (boards[2].children[0].alt == 'zero' && boards[4].children[0].alt == 'zero' && boards[6].children[0].alt == 'zero')) {
                if (boards[2].children[0].alt == 'x') {
                    player_1_count.textContent = p_1_current_count + 1;
                    info.textContent = "Player 1 Won";
                } else if (boards[2].children[0].alt == 'zero') {
                    player_2_count.textContent = p_2_current_count + 1;
                    info.textContent = "Player 2 Won";
                }
                bg.style.cssText = 'display:block;';
                return;
            }
        }
    }

    boards.forEach((item) => {
        item.addEventListener('click', () => {
            if (x === true) {
                if (!(item.querySelector('img'))) {
                    item.innerHTML = `<img src="./icon/x.svg" alt="x">`;
                    x = false;
                    player_turn.innerHTML = `<img src="./icon/zero.svg" alt="zero">`;
                }
            } else {
                if (!(item.querySelector('img'))) {
                    item.innerHTML = `<img src="./icon/zero.svg" alt="zero">`;
                    x = true;
                    player_turn.innerHTML = `<img src="./icon/x.svg" alt="x">`;
                }
            }
            when_full();
            game_function(boards);
        });
    });

    button.addEventListener('click', () => {
        boards.forEach((item) => {
            if (item.querySelector('img')) {
                item.querySelector('img').remove();
            }
        });
        bg.style.cssText = 'display:none;';
        player_turn.innerHTML = `<img src="./icon/x.svg" alt="x">`;
        x = true;
    });
});