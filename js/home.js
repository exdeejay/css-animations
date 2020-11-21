async function main() {
    let ch = document.getElementById('codeHolder');
    let links = document.getElementById('links');
    let originIPs = document.getElementsByClassName('originIP');
    let clientIPs = document.getElementsByClassName('clientIP');
    let input = document.getElementById('input');

    let port = Math.floor(Math.random() * 20000) + 20000;
    for (let node of originIPs) {
        node.innerText = `${document.domain}:${port}`;
    }
    fetch('https://ipapi.co/json/')
        .then((r) => r.json())
        .then((ip) => {
            for (let node of clientIPs) {
                node.innerText = ip.ip;
            }
        });

    await delay(400);
    ch.children[1].removeAttribute('hidden');

    await delay(700);
    ch.children[2].removeAttribute('hidden');

    await delay(700);
    ch.children[3].removeAttribute('hidden');
    ch.children[4].removeAttribute('hidden');

    await promptCutscene(ch.children[4], 'ls', 1500);

    for (let link of links.children) {
        await delay(50);
        link.removeAttribute('hidden');
    }
}

main();
