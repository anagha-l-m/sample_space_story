// Replace the videoId values below with your actual 11-character YouTube Video IDs!
// For your SciNews video: open https://share.google/cB0qOUzMYpWYpd8GU in your browser, 
// copy the 11 characters after "v=" in the YouTube URL, and paste it into Chapter 0's videoId.

const chapters = [
    {
        title: "Chapter 01: Echoes Beyond the Heliopause",
        date: "LOG DATE: 2026.11.12 // SOURCE: SCINEWS ARCHIVE",
        status: "STATUS: DRIFTING // SIGNAL FAINT",
        coords: "DISTANCE: 24.5 BILLION KM",
        videoId: "CubXtcQLma0", // <-- Paste your SciNews YouTube Video ID here!
        text: "Millions of kilometers from Earth, instruments built by human hands continue to drift through the dark. Their batteries depleted and dishes turned away from home, they remain silent monuments to our curiosity. Watch the archival feed to witness the final observations of deep-space phenomena."
    },
    {
        title: "Chapter 02: 'My Battery is Low and It's Getting Dark'",
        date: "LOG DATE: SOL 5111 // PERSEVERANCE VALLEY, MARS",
        status: "STATUS: HIBERNATION // DUST COVERED",
        coords: "LAT: 2.23° S // LON: 354.47° E",
        videoId: "1e825343-490", // Replace with a NASA Mars Rover YouTube ID (e.g., t9G36CDRYpQ)
        text: "Designed for a 90-day mission, the Opportunity rover survived nearly 15 years on the Martian surface before a planet-encircling dust storm blocked out the sun. Its solar panels starved of power, it sent one final atmospheric reading before falling silent forever."
    },
    {
        title: "Chapter 03: The Silent Ring of Graveyard Orbit",
        date: "LOG DATE: PRESENT DAY // GEOSTATIONARY + 300 KM",
        status: "STATUS: DECOMMISSIONED // PASSIVATED",
        coords: "ALTITUDE: 36,086 KM",
        videoId: "t9G36CDRYpQ", // Example NASA video ID - replace with any space debris YouTube ID
        text: "Hundreds of kilometers above active communication satellites lies the Graveyard Orbit. When aging satellites run low on propellant, engineers execute one final burn to push them out of harm's way, leaving them to circle Earth undisturbed for millennia."
    }
];

function loadChapter(index) {
    const chapter = chapters[index];
    
    // Update active button styling
    document.querySelectorAll('.chapter-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === index);
    });

    // Update text and telemetry
    document.getElementById('chapter-title').innerText = chapter.title;
    document.getElementById('chapter-date').innerText = chapter.date;
    document.getElementById('mission-status').innerText = chapter.status;
    document.getElementById('mission-coords').innerText = chapter.coords;
    document.getElementById('chapter-text').innerText = chapter.text;
    document.getElementById('choice-feedback').innerText = "";

    // Update YouTube Embed URL
    const iframe = document.getElementById('story-video');
    iframe.src = `https://www.youtube.com/embed/${chapter.videoId}?rel=0`;
}

function showOutcome(choice) {
    const feedback = document.getElementById('choice-feedback');
    if (choice === 'preserve') {
        feedback.innerText = "> LOGGED: International Space Heritage protocols activated. Historic landing sites and derelict probes designated as protected off-world monuments.";
    } else {
        feedback.innerText = "> LOGGED: Orbital Sustainability directive initiated. Autonomous tug spacecraft scheduled to capture and repurpose high-grade alloys.";
    }
}

// Initialize Chapter 0 on page load
window.onload = () => loadChapter(0);