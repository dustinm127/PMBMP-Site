// PMBMP Page JavaScript

// Project Data
const projects = [
    {
        title: "SPACEX",
        credits: {
            project: "SpaceX",
            director: "Dustin Grant",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/1070444230",
        stills: [
            "assets/spacex_1.png",
            "assets/spacex_2.png",
            "assets/spacex_3.png",
            "assets/spacex_4.png",
            "assets/spacex_5.png"
        ]
    },
    {
        title: "WAVES & TREES",
        credits: {
            project: "Passenger",
            director: "Alex Howard",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/976775862?h=fef52ed1ce",
        stills: [
            "assets/waves_trees_1.jpg",
            "assets/waves_trees_2.jpg",
            "assets/waves_trees_3.jpg",
            "assets/waves_trees_4.jpg",
            "assets/waves_trees_5.jpg"
        ]
    },
    {
        title: "KPMG - BACK 2 BASICS",
        credits: {
            project: "KPMG - Back 2 Basics",
            director: "Dustin Grant",
            dop: "Michael Bradley",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/930097393?h=5e8d902ced",
        stills: [
            "assets/kpmg_1.png",
            "assets/kpmg_2.png",
            "assets/kpmg_3.png",
            "assets/kpmg_4.png"
        ]
    },
    {
        title: "SANTA'S CLUB",
        credits: {
            project: "Santa's Club",
            director: "Ian Alan",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/1157983135?h=f79a9ac891",
        stills: [
            "assets/santas_club_1.png",
            "assets/santas_club_2.png",
            "assets/santas_club_3.png",
            "assets/santas_club_4.png",
            "assets/santas_club_5.png"
        ]
    },
    {
        title: "NOKIAN TYRES",
        credits: {
            project: "Nokian Tyres",
            director: "Alex Howard",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/913528161?h=09db64dd2f",
        stills: [
            "assets/nokian_1.png",
            "assets/nokian_2.png",
            "assets/nokian_3.png",
            "assets/nokian_4.png",
            "assets/nokian_5.png"
        ]
    },
    {
        title: "THE WILDERNESS QUIET",
        credits: {
            project: "Experimental",
            director: "Dustin Grant",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/1097064567?h=1ada62f2a1",
        stills: [
            "assets/wilderness_quiet_1.png",
            "assets/wilderness_quiet_2.png",
            "assets/wilderness_quiet_3.png",
            "assets/wilderness_quiet_4.png",
            "assets/wilderness_quiet_5.png"
        ]
    },
    {
        title: "TOYOTA - MAKE THE FUTURE",
        credits: {
            project: "Toyota - Nape",
            director: "Dustin Grant",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/428107311?h=7fb682f195",
        stills: [
            "assets/toyota_nape_1.png",
            "assets/toyota_nape_2.png",
            "assets/toyota_nape_3.png",
            "assets/toyota_nape_4.png",
            "assets/toyota_nape_5.png"
        ]
    },
    {
        title: "BEST RANGE HOODS",
        credits: {
            project: "Best Range Hoods",
            director: "Sara Howell",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/876543799?h=3908f052f4",
        stills: [
            "assets/best_range_hoods_1.png",
            "assets/best_range_hoods_2.png",
            "assets/best_range_hoods_3.png",
            "assets/best_range_hoods_4.png"
        ]
    },
    {
        title: "LA PIETRA",
        credits: {
            project: "La Pietra (Short Film)",
            director: "Nikita Hattangady",
            dop: "Michael Bradley",
            editColor: "Dustin Grant"
        },
        videoUrl: "",
        featuredStill: "assets/la_pietra_poster.jpg",
        stills: [
            "assets/la_pietra_final_1.png",
            "assets/la_pietra_final_2.png",
            "assets/la_pietra_final_3.png",
            "assets/la_pietra_final_4.png",
            "assets/la_pietra_final_5.png"
        ]
    },
    {
        title: "THE OTHER SIDE",
        credits: {
            project: "The Other Side - Us Paar",
            director: "Nikita Hattangady",
            dop: "Ahsish Mistry",
            editColor: "PMBMP"
        },
        videoUrl: "",
        featuredStill: "assets/the_other_side_poster.png",
        stills: [
            "assets/the_other_side_1.jpg",
            "assets/the_other_side_2.png",
            "assets/the_other_side_3.jpg",
            "assets/the_other_side_4.png",
            "assets/the_other_side_5.png"
        ]
    },
    {
        title: "FOUR CORNERS - LOCAL BUZZ",
        credits: {
            project: "Four Corners Brewery",
            director: "Dustin Grant",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/257152991",
        stills: [
            "assets/four_corners_rev_1.png",
            "assets/four_corners_rev_2.png",
            "assets/four_corners_rev_3.png",
            "assets/four_corners_rev_4.png",
            "assets/four_corners_rev_5.png"
        ]
    },
    {
        title: "SHADOWS MAKE FOR NEAT PARTY TRICKS (SHORT)",
        credits: {
            project: "Shadows Make for Neat Party Tricks (Short)",
            director: "Dustin Grant",
            dop: "Steven Sanchez",
            editColor: "PMBMP"
        },
        videoUrl: "https://player.vimeo.com/video/1157998792",
        stills: [
            "assets/shadows_1.png",
            "assets/shadows_2.png",
            "assets/shadows_3.png",
            "assets/shadows_4.png",
            "assets/shadows_5.jpg"
        ]
    }
];

let currentProjectIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    // Video Grid Item Click Handlers
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openProjectModal(index);
        });
    });

    const heroType = document.getElementById('hero-type');
    if (heroType) {
        const textStr = "storytellers";

        // Always start empty and play animation
        heroType.textContent = '';
        let charIndex = 0;

        // Start after a slight delay to allow layout to settle
        setTimeout(() => {
            function typeChar() {
                if (charIndex <= textStr.length) {
                    heroType.textContent = textStr.substring(0, charIndex);
                    charIndex++;
                    setTimeout(typeChar, 150); // Typing speed
                }
            }
            typeChar();
        }, 800);
    }
});

// Open Project Modal
function openProjectModal(index) {
    currentProjectIndex = index;
    const project = projects[index];
    const modal = document.getElementById('project-modal');

    // Update modal content
    document.getElementById('modal-project-title').textContent = project.title;

    // Build credits HTML
    let creditsHTML = '';

    if (project.credits.project) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">PROJECT</span>
            <span class="credit-value">${project.credits.project}</span>
        </div>`;
    }

    if (project.credits.client) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">CLIENT</span>
            <span class="credit-value">${project.credits.client}</span>
        </div>`;
    }

    if (project.credits.director) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">DIRECTOR</span>
            <span class="credit-value">${project.credits.director}</span>
        </div>`;
    }

    if (project.credits.dop) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">DIRECTOR OF PHOTOGRAPHY</span>
            <span class="credit-value">${project.credits.dop}</span>
        </div>`;
    }

    if (project.credits.editColor) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">EDIT/COLOR</span>
            <span class="credit-value">${project.credits.editColor}</span>
        </div>`;
    }

    if (project.credits.producer) {
        creditsHTML += `
        <div class="credit-item">
            <span class="credit-label">PRODUCER</span>
            <span class="credit-value">${project.credits.producer}</span>
        </div>`;
    }

    document.getElementById('modal-project-credits').innerHTML = creditsHTML;

    const playerContainer = document.getElementById('modal-video-player');

    // Add video iframe or still image
    let videoHTML;
    if (project.videoUrl) {
        // Reset to 16:9 Video Aspect Ratio
        playerContainer.style.paddingBottom = '56.25%';
        playerContainer.style.height = '';

        videoHTML = `<iframe src="${project.videoUrl}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
        // Still image logic - Custom Height to reduce gap
        playerContainer.style.paddingBottom = '0';
        playerContainer.style.height = '60vh'; // Reduced height for poster

        const featuredStill = project.featuredStill || (project.stills && project.stills.length > 0 ? project.stills[0] : 'assets/hero.png');
        videoHTML = `<div class="featured-still" style="width: 100%; height: 100%; background-color: #000; display: flex; justify-content: center; align-items: center;"><img src="${featuredStill}" alt="${project.title}" style="max-width: 50%; max-height: 90%; object-fit: contain;"></div>`;
    }
    playerContainer.innerHTML = videoHTML;

    // Populate stills section
    const stillsContainer = document.getElementById('modal-project-stills');
    if (project.stills && project.stills.length > 0) {
        stillsContainer.innerHTML = project.stills.map(stillUrl => `
            <div class="still-image">
                <img src="${stillUrl}" alt="Still from ${project.title}" loading="lazy">
            </div>
        `).join('');
    } else {
        // Default placeholder if no stills provided
        stillsContainer.innerHTML = `
            <div class="still-image"><img src="assets/hero.png" alt="Still 1" loading="lazy"></div>
            <div class="still-image"><img src="assets/landscape.png" alt="Still 2" loading="lazy"></div>
            <div class="still-image"><img src="assets/portrait.png" alt="Still 3" loading="lazy"></div>
            <div class="still-image"><img src="assets/about_background.jpg" alt="Still 4" loading="lazy"></div>
        `;
    }

    // Show modal and scroll to top
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling

    // Scroll modal content to top
    const modalScrollWrapper = document.querySelector('.modal-scroll-wrapper');
    if (modalScrollWrapper) {
        modalScrollWrapper.scrollTop = 0;
    }
}

// Close Project Modal
function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling

    // Clear video to stop playback
    setTimeout(() => {
        document.getElementById('modal-video-player').innerHTML = '';
    }, 400); // Wait for fade out animation
}

// Navigate Between Projects
function navigateProject(direction) {
    currentProjectIndex += direction;

    // Loop around
    if (currentProjectIndex < 0) {
        currentProjectIndex = projects.length - 1;
    } else if (currentProjectIndex >= projects.length) {
        currentProjectIndex = 0;
    }

    openProjectModal(currentProjectIndex);
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('project-modal');
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            navigateProject(-1);
        } else if (e.key === 'ArrowRight') {
            navigateProject(1);
        }
    }
});

// Time Widget Logic
function updateTime() {
    const timeDisplay = document.getElementById('time-display');
    if (!timeDisplay) return;

    const now = new Date();
    const options = {
        timeZone: 'America/Chicago',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);

    timeDisplay.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
