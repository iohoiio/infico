document.getElementById('start-ico').addEventListener('click', function() {
    showStep1();
});

function showStep1() {
    const stepsContainer = document.getElementById('steps-container');
    stepsContainer.innerHTML = `
        <h2>Step 1 of 6</h2>
        <p>Subscribe to @INFICOTG to enable ICO functionality!</p>
        <button id="subscribe">Subscribe to @INFICOTG</button>
        <button id="check-subscription">Check Subscription</button>
    `;

    document.getElementById('subscribe').addEventListener('click', function() {
        window.open('https://t.me/INFICOTG', '_blank');
    });

    document.getElementById('check-subscription').addEventListener('click', function() {
        Telegram.WebApp.sendData(JSON.stringify({action: "check_subscription"}));
    });
}
