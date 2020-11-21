/**
 * @param {number} ms
 */

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

const PROMPT_FLASH_DELAY = 500;
const CHAR_TYPE_DELAY = 100;
const PROMPT = '>';
const CURSOR = '_';

/**
 * @param {HTMLElement} element
 * @param {string} command
 * @param {number} idleDelay
 * @param {number} postDelay
 */

function promptCutscene(element, command, idleDelay, postDelay = CHAR_TYPE_DELAY) {
    let timePassed = 0;
    return new Promise(async function (resolve, reject) {
        while (timePassed < idleDelay) {
            let timeout = PROMPT_FLASH_DELAY;
            if (timeout > idleDelay - timePassed) {
                timeout = idleDelay - timePassed;
            }
            if (element.innerText == `${PROMPT} ${CURSOR}`) {
                element.innerText = `${PROMPT} `;
            } else {
                element.innerText = `${PROMPT} ${CURSOR}`;
            }
            await delay(timeout);
            timePassed += timeout;
        }

        for (let i = 1; i <= command.length; i++) {
            element.innerText = `${PROMPT} ${command.slice(0, i)}${CURSOR}`;
            await delay(CHAR_TYPE_DELAY);
        }
        await delay(postDelay);
        element.innerText = `${PROMPT} ${command}`;
        resolve();
    });
}
