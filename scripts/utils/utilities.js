function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

window.easeOutCubic = easeOutCubic;