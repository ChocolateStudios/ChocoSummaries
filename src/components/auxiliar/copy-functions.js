function copyTextToClipboard(text) {
    if (navigator.clipboard)
        navigator.clipboard.writeText(text);
}

export default copyTextToClipboard;