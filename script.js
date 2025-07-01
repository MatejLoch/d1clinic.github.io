// Design selection functionality
function selectDesign(design) {
    // Hide design selector with fade effect
    const selector = document.getElementById("design-selector")
    selector.style.opacity = "0"

    setTimeout(() => {
        selector.style.display = "none"

        // Show main content
        document.getElementById("main-content").classList.remove("hidden")

        // Remove all design classes
        document.body.classList.remove("design-minimal", "design-elegant", "design-modern")

        // Hide all navigation elements
        document.getElementById("nav-minimal").classList.add("hidden")
        document.getElementById("nav-elegant").classList.add("hidden")
        document.getElementById("nav-modern").classList.add("hidden")

        // Apply selected design
        document.body.classList.add("design-" + design)

        // Show appropriate navigation
        document.getElementById("nav-" + design).classList.remove("hidden")

        // Trigger animations
        setTimeout(() => {
            animateSections()
        }, 100)
    }, 500)
}

// Mobile menu toggle for modern design
function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu")
    menu.classList.toggle("active")
}

// Animate sections on scroll
function animateSections() {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1"
                    entry.target.style.transform = "translateY(0)"
                }
            })
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        },
    )

    sections.forEach((section) => {
        observer.observe(section)
    })
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]')

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            const targetSection = document.querySelector(targetId)

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                })
            }

            // Close mobile menu if open
            const mobileMenu = document.getElementById("mobile-menu")
            if (mobileMenu && mobileMenu.classList.contains("active")) {
                mobileMenu.classList.remove("active")
            }
        })
    })
}

// Parallax effect for backgrounds
function initParallax() {
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const backgrounds = document.querySelectorAll(".hero-background")

        backgrounds.forEach((bg) => {
            const speed = 0.5
            bg.style.transform = `translateY(${scrolled * speed}px) scale(1.05)`
        })
    })
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScrolling()
    initParallax()

    // Add scroll effect for navigation
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset
        const navs = document.querySelectorAll("nav")

        navs.forEach((nav) => {
            if (scrolled > 100) {
                nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)"
            } else {
                nav.style.boxShadow = "none"
            }
        })
    })
})

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1"
})
