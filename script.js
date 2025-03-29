function sharePage() {
    if (navigator.share) {
        navigator.share({
            title: 'ईद मुबारक! 🌙✨',
            text: 'आपको और आपके परिवार को ढेर सारी खुशियाँ और बरकतें मिलें! 🎉',
            url: window.location.href
        }).then(() => {
            alert('शेयर किया गया!');
        }).catch((error) => {
            console.log('शेयर करने में समस्या:', error);
        });
    } else {
        // Fallback: Desktop के लिए लिंक कॉपी करना
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('आपके लिंक को कॉपी कर लिया गया है। अब इसे मैन्युअली शेयर करें!');
        }).catch((err) => {
            console.log('लिंक कॉपी करने में समस्या:', err);
        });
    }
}
