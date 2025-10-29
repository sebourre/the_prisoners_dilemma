const lock = document.getElementById('lock');
const lockOpen = document.getElementById('lock_open');
const lockClosed = document.getElementById('lock_closed');
const windowTopLeft = document.getElementById('window_top_left');
const windowBottomRight = document.getElementById('window_bottom_right');
const openingTitle = document.getElementById('opening_title');
const h1 = document.querySelector('h1');
const underline = document.getElementById('underline');
const progressBar = document.getElementById('progress_bar');

const nav = document.querySelector('nav');
const buttonAdjustments = document.getElementById('button_adjustments');
const buttonOpponent = document.getElementById('button_opponent');
const buttonHistory = document.getElementById('button_history');
const buttonRules = document.getElementById('button_rules');
const buttonSettings = document.getElementById('button_settings');
const adjustments = document.getElementById('adjustments');
const opponent = document.getElementById('opponent');
const history = document.getElementById('history');
const rules = document.getElementById('rules');
const settings = document.getElementById('settings');

const adjustmentsRoundsInput = document.getElementById('adjustments_rounds_input');
const adjustmentsRoundsAdditional = document.querySelector('#adjustments_rounds_additional span');
const adjustmentsOpponentsSelect = document.getElementById('adjustments_opponents_select');
const adjustmentsOpponentsAdditional = document.querySelector('#adjustments_opponents_additional span');
const adjustmentsBonusesWayback = document.getElementById('adjustments_bonuses_wayback');
const adjustmentsBonusesWinrate = document.getElementById('adjustments_bonuses_winrate');
const adjustmentsButtonApply = document.getElementById('adjustments_button_apply');
const adjustmentsButtonReset = document.getElementById('adjustments_button_reset');
const adjustmentsButtonResetImg = adjustmentsButtonReset.querySelector('img');
const adjustmentsButtonApplyError = document.getElementById('adjustments_button_apply_error');
const settingsDarkmode = document.getElementById('settings_darkmode');
const settingsDarkmodeText = document.getElementById('settings_darkmode_text');
const settingsClearLocalStorage = document.getElementById('settings_clear_localstorage');
const settingsCloseWebsite = document.getElementById('settings_close_website');

const historyGameTemplate = document.getElementById('history_game_template');

const scoreboard = document.getElementById('scoreboard');
const scoreboardButtons = document.getElementById('scoreboard_buttons');
const scoreboardButtonInfo = document.getElementById('scoreboard_button_info');
const scoreboardRound = document.getElementById('scoreboard_round');
const scoreboardResult = document.getElementById('scoreboard_result');
const scoreboardButtonWayback = document.getElementById('scoreboard_button_wayback');
const scoreboardButtonRestart = document.getElementById('scoreboard_button_restart');
const scoreboardButtonRestartImg = scoreboardButtonRestart.querySelector('img');
const scorePlayer = document.getElementById('score_player');
const scoreOpponent = document.getElementById('score_opponent');

const buttonCooperateDefect = document.getElementById('button_cooperate_defect');
const buttonCooperate = document.getElementById('button_cooperate');
const buttonDefect = document.getElementById('button_defect');
const buttonMiddle = document.getElementById('button_middle');

const winrate = document.getElementById('winrate');
const winrateCooperate = document.getElementById('winrate_cooperate');
const winrateDefect = document.getElementById('winrate_defect');
const winrateNumberOfCooperate = document.getElementById('winrate_number_of_cooperate');
const winrateNumberOfDefect = document.getElementById('winrate_number_of_defect');

document.addEventListener('keydown', function(e){
    if(e.key === 'w'){
        skipOpeningTitle();
    }else if(e.key === 'x'){
        localStorage.removeItem('opening');
    }
});

function skipOpeningTitle(){
    openWindows();
    lock.style.display = 'none';
    openingTitle.style.display = 'none';
    document.documentElement.style.setProperty('--windowTL-color', 'var(--shade-a)');
    document.documentElement.style.setProperty('--windowBR-color', 'var(--shade-e)');
    setTimeout(() => {nav.style.zIndex = '3';}, 500);
}

// Windows animations
function openWindows(){
    windowTopLeft.style.borderTop = '5vw solid var(--windowTL-color)';
    windowTopLeft.style.borderRight = '5vw solid transparent';
    windowBottomRight.style.borderBottom = '5vw solid var(--windowBR-color)';
    windowBottomRight.style.borderLeft = '5vw solid transparent';
}
function slightOpenWindows(){
    windowTopLeft.style.borderTop = '74.5vw solid var(--windowTL-color)';
    windowTopLeft.style.borderRight = '74.5vw solid transparent';
    windowBottomRight.style.borderBottom = '74.5vw solid var(--windowBR-color)';
    windowBottomRight.style.borderLeft = '74.5vw solid transparent';
}
function closeWindows(){
    windowTopLeft.style.borderTop = '75vw solid var(--windowTL-color)';
    windowTopLeft.style.borderRight = '75vw solid transparent';
    windowBottomRight.style.borderBottom = '75vw solid var(--windowBR-color)';
    windowBottomRight.style.borderLeft = '75vw solid transparent';
}

// Opening
function onLockEnter(){
    lock.style.backgroundColor = 'var(--white-hue)';
    lock.style.outline = '5px solid var(--white-hue)';
    lock.style.outlineOffset = '5px';
    lockOpen.style.animation = 'jiggle .2s ease-in-out infinite';
    lockOpen.style.filter = 'none';
    windowTopLeft.style.animation = 'slight_open_window_tl .5s ease-in-out';
    windowBottomRight.style.animation = 'slight_open_window_br .5s ease-in-out';
}
function onLockLeave(){
    lock.style.backgroundColor = 'var(--black-hue)';
    lock.style.outline = '0 solid var(--white-hue)';
    lock.style.outlineOffset = '0';
    lockOpen.style.animation = 'none';
    lockOpen.style.filter = 'invert(1)';
    windowTopLeft.style.animation = 'none';
    windowBottomRight.style.animation = 'none';
}
lock.addEventListener('mouseenter', onLockEnter);
lock.addEventListener('mouseleave', onLockLeave);

lock.onclick = function(){
    lock.style.pointerEvents = 'none';
    lock.removeEventListener('mouseenter', onLockEnter);
    lock.removeEventListener('mouseleave', onLockLeave);
    lock.style.backgroundColor = 'var(--white-hue)';
    lock.style.boxShadow = '0 0 0 0 var(--black-hue)';
    lock.style.outline = '0 solid var(--white-hue)';
    lock.style.cursor = 'default';
    lockOpen.style.opacity = '0';
    lockOpen.style.animation = 'none';
    lockClosed.style.opacity = '1';
    setTimeout(() => {slightOpenWindows();}, 100);
    setTimeout(() => {
        if (!localStorage.getItem('opening')){
            displayOpeningTitle();
            localStorage.setItem('opening', 'true');
        }else{
            skipOpeningTitle();
        }
    }, 500);
}

function displayOpeningTitle(){
    openWindows();
    lock.style.zIndex = '2';
    lock.style.backgroundColor = 'transparent';
    setTimeout(() => {
        lock.style.top = '37.5%';
        lock.style.transform = 'translateX(-50%)';
    }, 500);

    let title = 'the prisoner\'s dilemma';
    let i = 0;
    function addLetters(){
        if(i < title.length){
            const newSpan = document.createElement('span');
            newSpan.innerHTML = title.charAt(i);
            newSpan.id = `letter_${i}`;
            newSpan.classList.add('letter');
            i++;
            h1.appendChild(newSpan);
            addLetters();
        }
    }
    addLetters();

    setTimeout(() => {
        underline.style.width = '65rem'; 
        progressBar.style.animation = 'progress 5s linear forwards';
    }, 700);

    let j = 0;
    function typeWriter(){
        if(j < title.length){
            const letter = document.getElementById(`letter_${j}`);
            letter.style.opacity = 1;
            j++;
            setTimeout(typeWriter, 100);
        }else{
            setTimeout(loading, 100);
        }
    }
    setTimeout(typeWriter, 1500);

    function loading(){
        underline.style.padding = '.25rem';
        progressBar.style.display = 'flex'; 
        setTimeout(() => {
            progressBar.style.opacity = '1';
            progressBar.style.width = '.5rem';
            progressBar.style.height = '.5rem';
        }, 0);
        setTimeout(() => {
            progressBar.style.transition = '1s ease';
            progressBar.style.width = '100%';
            windowTopLeft.style.transition = '1s';
            windowBottomRight.style.transition = '1s';
            document.documentElement.style.setProperty('--windowTL-color', 'var(--shade-a)');
            document.documentElement.style.setProperty('--windowBR-color', 'var(--shade-e)');
        }, 1000);
        setTimeout(() => {
            windowTopLeft.style.transition = '.5s ease';
            windowBottomRight.style.transition = '.5s ease';
            closeWindows();
        }, 2000);
        setTimeout(() => {
            lock.style.display = 'none';
            openingTitle.style.display = 'none';
        }, 2500);
        setTimeout(() => {openWindows();}, 2800);
        setTimeout(() => {nav.style.zIndex = '3';}, 3300);
    }
}

// Menu
let activeMenuButton = buttonAdjustments;
let activeMenuClass = 'adjustments';
activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
let activeMenuContent = adjustments;
function hideSections(){
    const sections = document.querySelectorAll(`#${activeMenuClass} .section`);
    sections.forEach(el => {
        el.style.transition = '.1s';
        el.style.opacity = '0';
    });
}
function displaySections(){
    const sections = document.querySelectorAll(`#${activeMenuClass} .section`);
    sections.forEach(el => {
        el.style.transition = '.1s .15s';
        el.style.opacity = '1';
    });
}

buttonAdjustments.onclick = function(){
    if(activeMenuContent != adjustments){
        buttonAdjustments.classList.toggle('active_button_adjustments');
        activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
        activeMenuButton = buttonAdjustments;
        hideSections();
        activeMenuClass = 'adjustments';
        displaySections();
        adjustments.style.padding = '1rem';
        adjustments.style.width = '100%';
        activeMenuContent.style.padding = '0';
        activeMenuContent.style.width = '0';
        activeMenuContent = adjustments;
    }
}
buttonOpponent.onclick = onOpponentClick;
function onOpponentClick(){
    if(activeMenuContent != opponent){
        buttonOpponent.classList.toggle('active_button_opponent');
        activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
        activeMenuButton = buttonOpponent;
        hideSections();
        activeMenuClass = 'opponent';
        displaySections();
        opponent.style.padding = '1rem';
        opponent.style.width = '100%';
        activeMenuContent.style.padding = '0';
        activeMenuContent.style.width = '0';
        activeMenuContent = opponent;
    }
}
buttonHistory.onclick = function(){
    if(activeMenuContent != history){
        buttonHistory.classList.toggle('active_button_history');
        activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
        activeMenuButton = buttonHistory;
        hideSections();
        activeMenuClass = 'history';
        displaySections();
        history.style.padding = '1rem';
        history.style.width = '100%';
        activeMenuContent.style.padding = '0';
        activeMenuContent.style.width = '0';
        activeMenuContent = history;
    }
}
buttonRules.onclick = function(){
    if(activeMenuContent != rules){
        buttonRules.classList.toggle('active_button_rules');
        activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
        activeMenuButton = buttonRules;
        hideSections();
        activeMenuClass = 'rules';
        displaySections();
        rules.style.padding = '1rem';
        rules.style.width = '100%';
        activeMenuContent.style.padding = '0';
        activeMenuContent.style.width = '0';
        activeMenuContent = rules;
    }
}
buttonSettings.onclick = function(){
    if(activeMenuContent != settings){
        buttonSettings.classList.toggle('active_button_settings');
        activeMenuButton.classList.toggle(`active_button_${activeMenuClass}`);
        activeMenuButton = buttonSettings;
        hideSections();
        activeMenuClass = 'settings';
        displaySections();
        settings.style.padding = '1rem';
        settings.style.width = '100%';
        activeMenuContent.style.padding = '0';
        activeMenuContent.style.width = '0';
        activeMenuContent = settings;
    }
}

function hideContent(section){
    const element = document.getElementById(`section_${section}`);
    const height = window.getComputedStyle(element).height;
    if(height !== '0px'){
        element.style.height = '0';
    }else{
        element.style.height = 'fit-content';
    }
}

// Adjustments
document.getElementById('rounds').addEventListener('click', () => hideContent('rounds'));
document.getElementById('opponents').addEventListener('click', () => hideContent('opponents'));
document.getElementById('bonuses').addEventListener('click', () => hideContent('bonuses'));

function updateValue(input, additional, e){
    const value = e ? e.target.value : input.value;
    if(value === ''){
        additional.textContent = 'x';
        return;
    }
    const num = Number(value);
    if(num >= 10 && num <= 20){
        additional.textContent = num;
    }else if(num <= 10){
        additional.textContent = '10 (min)';
    }else if(num >= 20){
        additional.textContent = '20 (max)';
    }
}
updateValue(adjustmentsRoundsInput, adjustmentsRoundsAdditional);
adjustmentsRoundsInput.addEventListener('input', () => {updateValue(adjustmentsRoundsInput, adjustmentsRoundsAdditional)});

const prisonersID = [
    '16',
    '41',
    '45',
    '70',
    '92',
    '105',
    '111',
    '129',
    '132',
    '167',
    '188',
    '200'
]
const prisonersName = [
    'Raymond "Ray" Dillard',
    'Marcus Holloway',
    'Ethan Cole',
    'Samuel "Sammy" Vargas',
    'Leonard "Lenny" Brooks',
    'Derrick Malone',
    'Travis "T-Bone" Keller',
    'Oscar Jennings',
    'Calvin "Cal" Monroe',
    'Victor "Vic" Hanley',
    'Frankie Doyle',
    'Harold "Hal" Simmons'
]
function updateOpponentsSelected(e){
    const value = e ? e.target.value : adjustmentsOpponentsSelect.value;
    const num = Number(value);
    adjustmentsOpponentsAdditional.innerHTML = `${prisonersName[num - 1]}.`;
}
updateOpponentsSelected();
adjustmentsOpponentsSelect.addEventListener('change', updateOpponentsSelected);

adjustmentsBonusesWayback.addEventListener('change', () => {
    if(adjustmentsBonusesWayback.checked){
        scoreboardButtonWayback.style.display = 'flex';
    }else{
        scoreboardButtonWayback.style.display = 'none';
    }
});
adjustmentsBonusesWinrate.addEventListener('change', () => {
    if(adjustmentsBonusesWinrate.checked){
        winrate.style.display = 'flex';
    }else{
        winrate.style.display = 'none';
    }
});

let isGameOngoing = false;
adjustmentsButtonApply.onclick = function(){
    if(isNumberOfRoundsCorrect(adjustmentsRoundsInput.value) && !isGameOngoing){
        const previousOpponentValue = currentOpponentValue;
        currentOpponentValue = adjustmentsOpponentsSelect.value;
        activeOpponent(previousOpponentValue, currentOpponentValue);
        displayScoreboard();
        adjustmentsButtonReset.style.display = 'flex';
        scoreboard.style.gridTemplateColumns = `repeat(${numberOfRounds}, auto)`;
        onOpponentClick();
        adjustmentsButtonApplyError.textContent = '';
        isGameOngoing = true;
        disableInputs();
    }else if(isGameOngoing){
        adjustmentsButtonApplyError.textContent = 'Reset the ongoing game first.';
    }else{
        adjustmentsButtonApplyError.textContent = 'Number of rounds invalid.';
    }
}
function isNumberOfRoundsCorrect(number){
    const value = Number(number);
    if(value >= 10 && value <= 20){
        return true;
    }else{
        return false;
    }
}
function displayScoreboard(){
    scoreboard.style.top = '10%';
    buttonCooperateDefect.style.left = '50%';
    winrate.style.top = '80%';
    scoreboardButtonRestart.style.display = 'none';
    let value = adjustmentsRoundsInput.value;
    let round = 1;
    for(let i = 0; i < value; i++){
        const newRound = document.createElement('div');
        newRound.classList.add('round');
        newRound.id = (`round${round}_player`);
        round++;
        scoreboard.insertBefore(newRound, scoreboard.querySelector('p:nth-of-type(1)'));
    }

    round = 1;
    for(let i = 0; i < value; i++){
        const newRound = document.createElement('div');
        newRound.classList.add('round');
        newRound.id = (`round${round}_opponent`);
        round++;
        scoreboard.insertBefore(newRound, scoreboard.querySelector('p:nth-of-type(1)'));
    }

    if(value >= 15){
        scoreboard.style.left = '30%';
        scoreboard.style.transform = 'none';
    }

    numberOfRounds = value;

    if(isInfoOn){
        const elements = document.querySelectorAll('.round');
        elements.forEach(el => {el.style.color = 'var(--black-hue)';});
    }

    document.getElementById(`round${currentRound}_player`).style.border = '3px solid var(--blue-hue)';
    document.getElementById(`round${currentRound}_opponent`).style.border = '3px solid var(--blue-hue)';
}

let imgResetRotation = 0;
adjustmentsButtonReset.onclick = function(){
    if(isGameOngoing){
        closeWindows();
        imgResetRotation += 180;
        adjustmentsButtonResetImg.style.transform = `rotate(-${imgResetRotation}deg)`;
        setTimeout(() => {
            const rounds = scoreboard.querySelectorAll('.round');
            rounds.forEach(round => round.remove());
            currentRound = 1;
            currentScorePlayer = 0;
            currentScoreOpponent = 0;
            scorePlayer.textContent = currentScorePlayer;
            scoreOpponent.textContent = currentScoreOpponent;
            adjustmentsButtonApplyError.textContent = '';
            scorePlayer.style.backgroundColor = 'var(--purple-hue)';
            scoreOpponent.style.backgroundColor = 'var(--purple-hue)';
            scoreboardRound.textContent = `Round ${currentRound}`;
            scoreboardResult.textContent = 'Result'; 
            scoreboardResult.style.backgroundColor = 'var(--purple-hue)'; 
            isWaybackUsed = false;
            scoreboardButtonWayback.style.backgroundColor = 'var(--shade-e)';
            scoreboardButtonWayback.style.pointerEvents = 'auto';
            scoreboardButtonWayback.addEventListener('mouseenter', onScoreboardWaybackEnter);
            scoreboardButtonWayback.addEventListener('mouseleave', onScoreboardWaybackLeave);
            scoreboard.style.top = '-25%';
            scoreboard.style.left = '50%';
            scoreboard.style.transform = 'translateX(-50%)';
            buttonCooperateDefect.style.left = '115%';
            winrate.style.top = '115%';
            roundsCooperated = 0;
            roundsDefected = 0;
            reactive = .5;
            winrateNumberOfCooperate.textContent = roundsCooperated;
            winrateNumberOfDefect.textContent = roundsDefected;
            winrateCooperate.textContent = '50%';
            winrateDefect.textContent = '50%';
            winrate.style.backgroundPositionX = '50%';
        }, 500);
        const previousOpponentValue = currentOpponentValue;
        currentOpponentValue = undefined;
        activeOpponent(previousOpponentValue, currentOpponentValue);
        setTimeout(() => {
            openWindows();
            isGameOngoing = false;
            disableInputs();
        }, 800);
    }
}

function disableInputs(){
    if(isGameOngoing){
        adjustmentsRoundsInput.style.border = '3px solid var(--red-hue)';
        adjustmentsRoundsInput.style.pointerEvents = 'none';
        adjustmentsOpponentsSelect.style.border = '3px solid var(--red-hue)';
        adjustmentsOpponentsSelect.style.pointerEvents = 'none';
    }else{
        adjustmentsRoundsInput.style.border = '3px solid var(--black-hue)';
        adjustmentsRoundsInput.style.pointerEvents = 'auto';
        adjustmentsOpponentsSelect.style.border = '3px solid var(--black-hue)';
        adjustmentsOpponentsSelect.style.pointerEvents = 'auto';
    }
}

// Opponent
document.getElementById('prisoner16').addEventListener('click', () => hideContent('prisoner16'));
document.getElementById('prisoner41').addEventListener('click', () => hideContent('prisoner41'));
document.getElementById('prisoner45').addEventListener('click', () => hideContent('prisoner45'));
document.getElementById('prisoner70').addEventListener('click', () => hideContent('prisoner70'));
document.getElementById('prisoner92').addEventListener('click', () => hideContent('prisoner92'));
document.getElementById('prisoner105').addEventListener('click', () => hideContent('prisoner105'));
document.getElementById('prisoner111').addEventListener('click', () => hideContent('prisoner111'));
document.getElementById('prisoner129').addEventListener('click', () => hideContent('prisoner129'));
document.getElementById('prisoner132').addEventListener('click', () => hideContent('prisoner132'));
document.getElementById('prisoner167').addEventListener('click', () => hideContent('prisoner167'));
document.getElementById('prisoner188').addEventListener('click', () => hideContent('prisoner188'));
document.getElementById('prisoner200').addEventListener('click', () => hideContent('prisoner200'));

let prisoner;
let currentOpponentValue = undefined;
function activeOpponent(prev, curr){
    if(prev == undefined){
        prisoner = document.getElementById(`prisoner${prisonersID[curr - 1]}`);
        prisoner.classList.toggle('section_title');
        prisoner.classList.toggle('opponent_selected_name');
        document.querySelector(`#prisoner${prisonersID[curr - 1]} + .section_content`).style.height = 'fit-content';
    }else if(curr == undefined){
        prisoner.classList.toggle('section_title');
        prisoner.classList.toggle('opponent_selected_name');
        document.querySelector(`#prisoner${prisonersID[prev - 1]} + .section_content`).style.height = '0';
        prisoner = undefined;
    }else if(prev != curr){
        prisoner.classList.toggle('section_title');
        prisoner.classList.toggle('opponent_selected_name');
        document.querySelector(`#prisoner${prisonersID[prev - 1]} + .section_content`).style.height = '0';
        prisoner = document.getElementById(`prisoner${prisonersID[curr - 1]}`);
        prisoner.classList.toggle('section_title');
        prisoner.classList.toggle('opponent_selected_name');
        document.querySelector(`#prisoner${prisonersID[curr - 1]} + .section_content`).style.height = 'fit-content';
    }
}

const difficulties = document.querySelectorAll('.difficulty'); 
difficulties.forEach(difficulty => {
    const text = difficulty.textContent; 
    if(text == 'Low'){
        difficulty.style.color = 'green';
    }else if(text == 'Medium'){
        difficulty.style.color = 'orange';
    }else if(text == 'High'){
        difficulty.style.color = 'red';
    }else if(text == 'Impossible'){
        difficulty.style.color = 'purple';
    }
});

// Rules
document.getElementById('legend').addEventListener('click', () => hideContent('legend'));

// Settings
document.getElementById('sources').addEventListener('click', () => hideContent('sources'));

function setDarkmode(){
    document.body.style.backgroundImage = 'linear-gradient(135deg, var(--shade-a), var(--black-hue), var(--shade-e))';
    settingsDarkmodeText.textContent = 'Darkmode (on)';
}
function setLightmode(){
    document.body.style.backgroundImage = 'linear-gradient(135deg, var(--shade-a), var(--white-hue), var(--shade-e))';
    settingsDarkmodeText.textContent = 'Darkmode (off)';
}
let isDarkmodeOn = false;
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
    setLightmode();
}else{
    setDarkmode();
}
settingsDarkmode.onclick = updateDarkmode;
function updateDarkmode(){
    if(!isDarkmodeOn){
        setDarkmode();
        settingsDarkmode.querySelector('img:nth-child(1)').style.display = 'none';
        settingsDarkmode.querySelector('img:nth-child(2)').style.display = 'block';
        settingsDarkmode.style.backgroundColor = 'var(--black-hue)';
        isDarkmodeOn = true;
    }else{
        setLightmode();
        settingsDarkmode.querySelector('img:nth-child(1)').style.display = 'block';
        settingsDarkmode.querySelector('img:nth-child(2)').style.display = 'none';
        settingsDarkmode.style.backgroundColor = 'var(--white-hue)';
        isDarkmodeOn = false;
    }
}
updateDarkmode();

settingsClearLocalStorage.onclick = function(){
    localStorage.clear();
    settingsClearLocalStorage.style.backgroundColor = 'var(--red-hue)';
    settingsClearLocalStorage.style.pointerEvents = 'none';
    settingsClearLocalStorage.querySelector('img').style.filter = 'invert(1)';
}

settingsCloseWebsite.onclick = function(){
    window.close();
}

// Scoreboard
scoreboardButtonInfo.addEventListener('mouseenter', () => {
    scoreboardButtonInfo.style.backgroundColor = 'var(--blue-hue)';
    scoreboardButtonInfo.querySelector('img').style.filter = 'invert(1)';
});
function onScoreboardInfoLeave(){
    scoreboardButtonInfo.style.backgroundColor = 'var(--shade-a)';
    scoreboardButtonInfo.querySelector('img').style.filter = 'none';
}
scoreboardButtonInfo.addEventListener('mouseleave', onScoreboardInfoLeave);
let isInfoOn = false;
scoreboardButtonInfo.onclick = function(){
    if(!isInfoOn){
        scoreboardButtonInfo.removeEventListener('mouseleave', onScoreboardInfoLeave);
        const elements = document.querySelectorAll('.round');
        elements.forEach(el => {
            el.style.color = 'var(--black-hue)';
            el.style.userSelect = 'auto';
        });
        isInfoOn = true;
    }else{
        scoreboardButtonInfo.addEventListener('mouseleave', onScoreboardInfoLeave);
        const elements = document.querySelectorAll('.round');
        elements.forEach(el => {
            el.style.color = 'transparent';
            el.style.userSelect = 'none';
        });
        isInfoOn = false;
    }
}

function onScoreboardWaybackEnter(){
    if(currentRound > 1){
        scoreboardButtonWayback.style.backgroundColor = 'var(--blue-hue)';
        scoreboardButtonWayback.querySelector('img').style.filter = 'invert(1)';
        scoreboardButtonWayback.style.cursor = 'pointer';
    }else{
        scoreboardButtonWayback.style.cursor = 'not-allowed';
    }
}
function onScoreboardWaybackLeave(){
    scoreboardButtonWayback.style.backgroundColor = 'var(--shade-e)';
    scoreboardButtonWayback.querySelector('img').style.filter = 'none';
}
scoreboardButtonWayback.addEventListener('mouseenter', onScoreboardWaybackEnter);
scoreboardButtonWayback.addEventListener('mouseleave', onScoreboardWaybackLeave);
let isWaybackUsed = false;
scoreboardButtonWayback.onclick = function(){
    if(currentRound > 1){
        isWaybackUsed = true;
        currentRound--;
        scoreboardRound.textContent = `Round ${currentRound}`;
        scoreboardButtonWayback.style.backgroundColor = 'var(--red-hue)';
        scoreboardButtonWayback.querySelector('img').style.filter = 'none';
        scoreboardButtonWayback.style.pointerEvents = 'none';
        scoreboardButtonWayback.removeEventListener('mouseenter', onScoreboardWaybackEnter);
        scoreboardButtonWayback.removeEventListener('mouseleave', onScoreboardWaybackLeave);
        const playedRoundPlayer = document.getElementById(`round${currentRound}_player`);
        const playedRoundOpponent = document.getElementById(`round${currentRound}_opponent`);
        const move = window.getComputedStyle(playedRoundOpponent).backgroundColor;
        updateWinrate(move, isWaybackUsed);
        playedRoundPlayer.style.backgroundColor = 'var(--white-hue)';
        playedRoundPlayer.textContent = '';
        playedRoundOpponent.style.backgroundColor = 'var(--white-hue)';
        playedRoundOpponent.textContent = '';
        currentScorePlayer -= lastRewardPlayer;
        scorePlayer.textContent = currentScorePlayer;
        currentScoreOpponent -= lastRewardOpponent;
        scoreOpponent.textContent = currentScoreOpponent;
        if(currentScorePlayer < currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--red-hue)';
            scoreOpponent.style.backgroundColor = 'var(--blue-hue)';
        }else if(currentScorePlayer == currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--purple-hue)';
            scoreOpponent.style.backgroundColor = 'var(--purple-hue)';
        }else if(currentScorePlayer > currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--blue-hue)';
            scoreOpponent.style.backgroundColor = 'var(--red-hue)';
        }
        scoreboardResult.style.backgroundColor = 'var(--blue-hue)';
        scoreboardResult.textContent = 'Wayback used';
    }
}

scoreboardButtonRestart.addEventListener('mouseenter', () => {
    scoreboardButtonRestart.style.backgroundColor = 'var(--blue-hue)';
    scoreboardButtonRestartImg.style.filter = 'invert(1)';
});
scoreboardButtonRestart.addEventListener('mouseleave', () => {
    scoreboardButtonRestart.style.backgroundColor = 'var(--shade-e)';
    scoreboardButtonRestartImg.style.filter = 'none';
});
let imgRestartRotation = 0;
scoreboardButtonRestart.onclick = function(){
    closeWindows();
    imgRestartRotation += 360;
    scoreboardButtonRestartImg.style.transform = `rotate(${imgRestartRotation}deg)`;
    setTimeout(() => {
        const rounds = scoreboard.querySelectorAll('.round');
        rounds.forEach(round => round.remove());
        currentRound = 1;
        currentScorePlayer = 0;
        currentScoreOpponent = 0;
        scorePlayer.textContent = currentScorePlayer;
        scoreOpponent.textContent = currentScoreOpponent;
        adjustmentsButtonApplyError.textContent = '';
        scorePlayer.style.backgroundColor = 'var(--purple-hue)';
        scoreOpponent.style.backgroundColor = 'var(--purple-hue)';
        scoreboardRound.textContent = `Round ${currentRound}`;
        scoreboardResult.textContent = 'Result'; 
        scoreboardResult.style.backgroundColor = 'var(--purple-hue)'; 
        isWaybackUsed = false;
        scoreboardButtonWayback.style.backgroundColor = 'var(--shade-e)';
        scoreboardButtonWayback.style.pointerEvents = 'auto';
        scoreboardButtonWayback.addEventListener('mouseenter', onScoreboardWaybackEnter);
        scoreboardButtonWayback.addEventListener('mouseleave', onScoreboardWaybackLeave);
        roundsCooperated = 0;
        roundsDefected = 0;
        reactive = .5;
        winrateNumberOfCooperate.textContent = roundsCooperated;
        winrateNumberOfDefect.textContent = roundsDefected;
        winrateCooperate.textContent = '50%';
        winrateDefect.textContent = '50%';
        winrate.style.backgroundPositionX = '50%';
    }, 500);
    setTimeout(() => {
        openWindows();
        scoreboardButtonRestart.style.display = 'none';

        let value = adjustmentsRoundsInput.value;
        let round = 1;
        for(let i = 0; i < value; i++){
            const newRound = document.createElement('div');
            newRound.classList.add('round');
            newRound.id = (`round${round}_player`);
            round++;
            scoreboard.insertBefore(newRound, scoreboard.querySelector('p:nth-of-type(1)'));
        }

        round = 1;
        for(let i = 0; i < value; i++){
            const newRound = document.createElement('div');
            newRound.classList.add('round');
            newRound.id = (`round${round}_opponent`);
            round++;
            scoreboard.insertBefore(newRound, scoreboard.querySelector('p:nth-of-type(1)'));
        }

        if(isInfoOn){
            const elements = document.querySelectorAll('.round');
            elements.forEach(el => {el.style.color = 'var(--black-hue)';});
        }

        document.getElementById(`round${currentRound}_player`).style.border = '3px solid var(--blue-hue)';
        document.getElementById(`round${currentRound}_opponent`).style.border = '3px solid var(--blue-hue)';
    }, 800);
}

// Button cooperate-defect
function onCooperateEnter(){
    buttonCooperate.style.textShadow = '2px 2px 0 var(--white-hue)';
    buttonCooperate.style.outline = '5px solid var(--shade-a)';
    buttonMiddle.querySelector('img:first-child').style.display = 'block';
    buttonMiddle.style.backgroundPosition = '0% 0%';
    windowTopLeft.style.animation = 'bouncing_window_tl .8s ease-in-out infinite';
}
function onCooperateLeave(){
    buttonCooperate.style.textShadow = '0 0 0 var(--white-hue)';
    buttonCooperate.style.outline = '5px solid transparent';
    buttonMiddle.querySelector('img:first-child').style.display = 'none';
    buttonMiddle.style.backgroundPosition = '50% 50%';
    windowTopLeft.style.animation = 'none';
}
function onDefectEnter(){
    buttonDefect.style.textShadow = '2px 2px 0 var(--white-hue)';
    buttonDefect.style.outline = '5px solid var(--shade-e)';
    buttonMiddle.querySelector('img:last-child').style.display = 'block';
    buttonMiddle.style.backgroundPosition = '100% 100%';
    windowBottomRight.style.animation = 'bouncing_window_br .8s ease-in-out infinite';
}
function onDefectLeave(){
    buttonDefect.style.textShadow = '0 0 0 var(--white-hue)';
    buttonDefect.style.outline = '5px solid transparent';
    buttonMiddle.querySelector('img:last-child').style.display = 'none';
    buttonMiddle.style.backgroundPosition = '50% 50%';
    windowBottomRight.style.animation = 'none';
}
buttonCooperate.addEventListener('mouseenter', onCooperateEnter);
buttonCooperate.addEventListener('mouseleave', onCooperateLeave);
buttonDefect.addEventListener('mouseenter', onDefectEnter);
buttonDefect.addEventListener('mouseleave', onDefectLeave);

let currentRound = 1;
let numberOfRounds;
let currentScorePlayer = 0;
let currentScoreOpponent = 0;
buttonCooperate.onclick = function(){
    const playerMove = 'cooperate';
    if(currentRound <= numberOfRounds){
        const currentRoundPlayer = document.getElementById(`round${currentRound}_player`);
        const currentRoundOpponent = document.getElementById(`round${currentRound}_opponent`);
        currentRoundPlayer.style.backgroundColor = 'gold';
        opponentMove(playerMove, currentRoundOpponent);
        updateScores(currentRoundPlayer, currentRoundOpponent);
        currentRoundPlayer.style.border = '3px solid var(--black-hue)';
        currentRoundOpponent.style.border = '3px solid var(--black-hue)';
        currentRound++;
        if(currentRound <= numberOfRounds){
            document.getElementById(`round${currentRound}_player`).style.border = '3px solid var(--blue-hue)';
            document.getElementById(`round${currentRound}_opponent`).style.border = '3px solid var(--blue-hue)';
        }
        if(currentRound <= numberOfRounds){
            scoreboardRound.textContent = `Round ${currentRound}`;
        }else{
            scoreboardRound.textContent = 'Game over';
            scoreboardButtonWayback.style.backgroundColor = 'var(--red-hue)';
            scoreboardButtonWayback.style.pointerEvents = 'none';
            scoreboardButtonRestart.style.display = 'flex';
            updateHistory();
        }
    }
}
buttonDefect.onclick = function(){
    const playerMove = 'defect';
    if(currentRound <= numberOfRounds){
        const currentRoundPlayer = document.getElementById(`round${currentRound}_player`);
        const currentRoundOpponent = document.getElementById(`round${currentRound}_opponent`);
        currentRoundPlayer.style.backgroundColor = 'violet';
        opponentMove(playerMove, currentRoundOpponent);
        updateScores(currentRoundPlayer, currentRoundOpponent);
        currentRoundPlayer.style.border = '3px solid var(--black-hue)';
        currentRoundOpponent.style.border = '3px solid var(--black-hue)';
        currentRound++;
        if(currentRound <= numberOfRounds){
            document.getElementById(`round${currentRound}_player`).style.border = '3px solid var(--blue-hue)';
            document.getElementById(`round${currentRound}_opponent`).style.border = '3px solid var(--blue-hue)';
        }
        if(currentRound <= numberOfRounds){
            scoreboardRound.textContent = `Round ${currentRound}`;
        }else{
            scoreboardRound.textContent = 'Game over';
            scoreboardButtonWayback.style.backgroundColor = 'var(--red-hue)';
            scoreboardButtonWayback.style.pointerEvents = 'none';
            scoreboardButtonRestart.style.display = 'flex';
            updateHistory();
        }
    }
}

const opponentMoves = [
    'gold', 
    'violet'
]
let reactive = .5;
function opponentMove(pM, cRO){
    let move;
    const previousRoundPlayer = document.getElementById(`round${currentRound - 1}_player`);
    const previousRoundOpponent = document.getElementById(`round${currentRound - 1}_opponent`);
    switch(currentOpponentValue){
        case '1': 
            // Random
            move = opponentMoves[Math.floor(Math.random() * opponentMoves.length)];
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '2': 
            // Antagonist
            if(pM == 'cooperate'){
                move = 'violet';
                cRO.style.backgroundColor = move;
            }else if(pM == 'defect'){
                move = 'gold';
                cRO.style.backgroundColor = move;
            }
            updateWinrate(move, false);
            break;
        case '3':
            // Tit for tat
            if(currentRound == 1){
                move = 'gold';
            }else{
                if(previousRoundPlayer.style.backgroundColor == 'gold'){
                    move = 'gold';
                }else if(previousRoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '4': 
            // Delayed tit for tat
            if(currentRound <= 2){
                move = 'gold';
            }else{
                const previous2RoundPlayer = document.getElementById(`round${currentRound - 2}_player`);
                if(previous2RoundPlayer.style.backgroundColor == 'gold'){
                    move = 'gold';
                }else if(previous2RoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '5': 
            // Tit for two tats
            if(currentRound <= 2 || previousRoundOpponent.style.backgroundColor == 'violet'){
                move = 'gold';
            }else{
                const previous2RoundPlayer = document.getElementById(`round${currentRound - 2}_player`);
                if(previousRoundPlayer.style.backgroundColor == 'violet' && previous2RoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }else{
                    move = 'gold';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '6': 
            // Two tits for tat
            if(currentRound == 1){
                move = 'gold';
            }else{
                const previous2RoundOpponent = document.getElementById(`round${currentRound - 2}_opponent`);
                if(previousRoundOpponent.style.backgroundColor == 'violet' && previous2RoundOpponent.style.backgroundColor == 'violet'){
                    move = 'gold';
                }else if(previousRoundOpponent.style.backgroundColor == 'violet'){
                    move = 'violet';
                }else if(previousRoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }else{
                    move = 'gold';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '7': 
            // Friedman
            if(currentRound == 1){
                move = 'gold';
            }else{
                if(previousRoundOpponent.style.backgroundColor == 'violet'){
                    move = 'violet';
                }else if(previousRoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }else{
                    move = 'gold';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '8': 
            // Sneaky
            if(currentRound == 1){
                move = 'gold';
            }else{
                if(previousRoundPlayer.style.backgroundColor == 'gold'){
                    let r = Math.random();
                    if(r <= .1){
                        move = 'violet';
                    }else{
                        move = 'gold';
                    }
                }else if(previousRoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '9': 
            // Tester
            if(currentRound == 1){
                move = 'violet';
            }else if(currentRound == 2){
                move = 'gold';
            }else if(currentRound == 3){
                if(previousRoundPlayer.style.backgroundColor == 'gold'){
                    move = 'gold';
                }else if(previousRoundPlayer.style.backgroundColor == 'violet'){
                    move = 'violet';
                }
            }else{
                const previous2RoundOpponent = document.getElementById(`round${currentRound - 2}_opponent`);
                move = previous2RoundOpponent.style.backgroundColor;
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '10': 
            // Pavlov
            if(currentRound == 1){
                let r = Math.random();
                if(r <= .5){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else{
                if(previousRoundPlayer.style.backgroundColor == previousRoundOpponent.style.backgroundColor){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '11': 
            // Reactive 
            // ! Problèmes d'incrémentation/décrémentation de variable + wayback pas update
            if(currentRound == 1){
                let r = Math.random();
                if(r <= reactive){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else{
                if(previousRoundPlayer.style.backgroundColor == 'gold'){
                    if(reactive < 1){
                        reactive += .1;
                        console.log(reactive);
                    }
                }else{
                    if(reactive > 0){
                        reactive -= .2;
                        console.log(reactive);
                    }
                }
                let r = Math.random();
                if(r <= reactive){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        case '12': 
            // Memory-one
            const cc = 0.9;
            const cd = 0.7;
            const dc = 0.3;
            const dd = 0.1;
            if(currentRound == 1){
                let r = Math.random();
                if(r <= .5){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else if(previousRoundPlayer.style.backgroundColor == 'gold' && previousRoundOpponent.style.backgroundColor == 'gold'){
                let r = Math.random();
                if(r <= cc){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else if(previousRoundPlayer.style.backgroundColor == 'gold' && previousRoundOpponent.style.backgroundColor == 'violet'){
                let r = Math.random();
                if(r <= cd){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else if(previousRoundPlayer.style.backgroundColor == 'violet' && previousRoundOpponent.style.backgroundColor == 'gold'){
                let r = Math.random();
                if(r <= dc){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }else if(previousRoundPlayer.style.backgroundColor == 'violet' && previousRoundOpponent.style.backgroundColor == 'violet'){
                let r = Math.random();
                if(r <= dd){
                    move = 'gold';
                }else{
                    move = 'violet';
                }
            }
            cRO.style.backgroundColor = move;
            updateWinrate(move, false);
            break;
        default:
            console.log('Error');
    }
}
let lastRewardPlayer;
let lastRewardOpponent;
function updateScores(cRP, cRO){
    const rewardCC = 3;
    const rewardCD = 0;
    const rewardDC = 5;
    const rewardDD = 1;
    function displayScore(rewardPlayer, rewardOpponent, diff, color){
        scorePlayer.textContent = currentScorePlayer;
        cRP.textContent = '+' + rewardPlayer; 
        scoreOpponent.textContent = currentScoreOpponent;
        cRO.textContent = '+' + rewardOpponent; 
        if(currentScorePlayer < currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--red-hue)';
            scoreOpponent.style.backgroundColor = 'var(--blue-hue)';
        }else if(currentScorePlayer == currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--purple-hue)';
            scoreOpponent.style.backgroundColor = 'var(--purple-hue)';
        }else if(currentScorePlayer > currentScoreOpponent){
            scorePlayer.style.backgroundColor = 'var(--blue-hue)';
            scoreOpponent.style.backgroundColor = 'var(--red-hue)';
        }
        function difference(){
            scoreboardResult.textContent = `Diff: ${diff}`;
            scoreboardResult.style.backgroundColor = color; 
            if(currentRound == numberOfRounds){
                if(currentScorePlayer < currentScoreOpponent){
                    gameResult = 'lost';
                    scoreboardResult.textContent = `You lost (${(currentScorePlayer - currentScoreOpponent)})`;
                    scoreboardResult.style.backgroundColor = 'var(--red-hue)'; 
                }else if(currentScorePlayer == currentScoreOpponent){
                    gameResult = 'drawn';
                    scoreboardResult.textContent = 'Drawn';
                    scoreboardResult.style.backgroundColor = 'var(--purple-hue)'; 
                }else if(currentScorePlayer > currentScoreOpponent){
                    gameResult = 'won';
                    scoreboardResult.textContent = `You won (+${(currentScorePlayer - currentScoreOpponent)})`;
                    scoreboardResult.style.backgroundColor = 'var(--blue-hue)'; 
                }
            }
        }
        difference();
    }
    if(cRP.style.backgroundColor == cRO.style.backgroundColor){
        if(cRP.style.backgroundColor == 'gold'){
            currentScorePlayer += rewardCC;
            lastRewardPlayer = rewardCC;
            currentScoreOpponent += rewardCC;
            lastRewardOpponent = rewardCC;
            displayScore(rewardCC, rewardCC, 'drawn (+0)', 'var(--purple-hue)');
        }else if(cRP.style.backgroundColor == 'violet'){
            currentScorePlayer += rewardDD;
            lastRewardPlayer = rewardDD;
            currentScoreOpponent += rewardDD;
            lastRewardOpponent = rewardDD;
            displayScore(rewardDD, rewardDD, 'drawn (+0)', 'var(--purple-hue)');
        }
    }else{
        if(cRP.style.backgroundColor == 'gold'){
            currentScorePlayer += rewardCD;
            lastRewardPlayer = rewardCD;
            currentScoreOpponent += rewardDC;
            lastRewardOpponent = rewardDC;
            displayScore(rewardCD, rewardDC, 'lost (-5)', 'var(--red-hue)');
        }else if(cRP.style.backgroundColor == 'violet'){
            currentScorePlayer += rewardDC;
            lastRewardPlayer = rewardDC;
            currentScoreOpponent += rewardCD;
            lastRewardOpponent = rewardCD;
            displayScore(rewardDC, rewardCD, 'won (+5)', 'var(--blue-hue)');
        }
    }
}

let gameID = 1;
let gameResult;
function updateHistory(){
    if((gameID - 1) != 0){
        document.getElementById(`section_game${(gameID - 1)}`).style.height = '0';
    }
    const clone = historyGameTemplate.content.cloneNode(true);
    if(gameResult == 'lost'){
        clone.querySelector('p:first-child').classList.add('history_game_lost');
    }else if(gameResult == 'drawn'){
        clone.querySelector('p:first-child').classList.add('history_game_drawn');
    }else if(gameResult == 'won'){
        clone.querySelector('p:first-child').classList.add('history_game_won');
    }
    clone.querySelector('p:first-child').id = `game${gameID}`;
    clone.querySelector('.section_content').id = `section_game${gameID}`;
    const texts = clone.querySelectorAll('.section_content_row p:nth-of-type(2)');
    clone.querySelector('p:first-child').textContent = `Game #${gameID}`;
    texts[0].textContent = `prisoner #${prisonersID[currentOpponentValue - 1]}`;
    texts[1].textContent = numberOfRounds;
    texts[2].textContent = `${currentScorePlayer}/${currentScoreOpponent}`;
    texts[3].textContent = isWaybackUsed;
    texts[4].textContent = winrateCooperate.textContent;
    const date = new Date();
    texts[5].textContent = date.toLocaleString();
    history.appendChild(clone);
    const ID = gameID;
    document.getElementById(`game${gameID}`).addEventListener('click', () => hideContent(`game${ID}`));
    gameID++;
}

// Winrate
let roundsCooperated = 0;
let roundsDefected = 0;
function updateWinrate(move, wayback){
    if(wayback == true){
        if(move == 'rgb(255, 215, 0)'){
            roundsCooperated -= 1;
            winrateNumberOfCooperate.textContent = roundsCooperated;
        }else if(move == 'rgb(238, 130, 238)'){
            roundsDefected -= 1;
            winrateNumberOfDefect.textContent = roundsDefected;
        }
        const wrCooperate = (roundsCooperated / (currentRound - 1)) * 100;
        const wrDefect = (roundsDefected / (currentRound - 1)) * 100 ;
        if(isNaN(wrCooperate)){
            winrateCooperate.textContent = '50%';
            winrateDefect.textContent = '50%';
            winrate.style.backgroundPositionX = '50%';
        }else{
            winrateCooperate.textContent = `${wrCooperate.toFixed()}%`;
            winrateDefect.textContent = `${wrDefect.toFixed()}%`;
            winrate.style.backgroundPositionX = `${wrDefect.toFixed()}%`;
        }
    }else{
        if(move == 'gold'){
            roundsCooperated += 1;
            winrateNumberOfCooperate.textContent = roundsCooperated;
        }else if(move == 'violet'){
            roundsDefected += 1;
            winrateNumberOfDefect.textContent = roundsDefected;
        }
        const wrCooperate = (roundsCooperated / currentRound) * 100;
        const wrDefect = (roundsDefected / currentRound) * 100;
        winrateCooperate.textContent = `${wrCooperate.toFixed()}%`;
        winrateDefect.textContent = `${wrDefect.toFixed()}%`;
        winrate.style.backgroundPositionX = `${wrDefect.toFixed()}%`;
    }
}