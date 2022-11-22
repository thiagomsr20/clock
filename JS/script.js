window.addEventListener("load", () => {
    clock();
    function clock() {
        var date = new Date();
        const hour = date.getHours();
        const hours = hour < 10 ? "0" + hour : hour;
        const min = date.getMinutes();
        const mins = min < 10 ? "0" + min : min;
        const sec = date.getSeconds();
        const secs = sec < 10 ? "0" + sec : sec;
        var hour_layout = (hours + ":" + mins + ":" + secs);

        document.getElementById("paragraph").innerHTML = hour_layout;
        setTimeout(clock, 1000);
    }
})