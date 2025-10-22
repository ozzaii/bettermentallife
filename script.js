// BETTER MENTAL LIFE - Layer 2: Motion & Polish
// Intersection Observer animations, smooth interactions

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Language content object
    const translations = {
        tr: {
            // Hero
            heroLabel: "Uzm. Klinik Psikolog",
            heroStatement: "Londra ve İstanbul'da psikoloji merkezleri kurdu. Lisans döneminde yayımlanmış araştırması var. İngiltere NHS'de klinik eğitim aldı.",
            heroCTA: "Randevu Al →",
            heroCTALink: "https://wa.me/905339735991?text=Merhaba%2C%20psikolojik%20destek%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20ve%20randevu%20olu%C5%9Fturmak%20istiyorum.",

            // Sections
            sectionEducation: "Eğitim",
            yearPresent: "Günümüz",
            phdOngoing: "Üsküdar University (devam ediyor)",

            researchAttribution: "Personality and Individual Differences (ScienceDirect) — Lisans eğitimi sırasında yayımlandı.",
            researchLink: "Yayını oku →",

            sectionExperience: "Profesyonel Deneyim",
            expLocation1: "Londra",
            expLocation2: "İstanbul",

            sectionExpertise: "Klinik Uzmanlık Alanları",
            expertise: [
                "Anksiyete Bozuklukları",
                "Obsesif Kompulsif Bozukluk (OCD)",
                "Depresyon",
                "Yeme Bozuklukları",
                "Bağımlılık",
                "Yalnızlık ve Sosyal İzolasyon",
                "Geriatrik Psikoloji"
            ],

            sectionServices: "Sunulan Hizmetler",
            services: [
                "Bilişsel Davranışçı Terapi (CBT)",
                "Bireysel Psikoterapi",
                "Çift ve Aile Terapisi",
                "Grup Terapisi",
                "Danışmanlık Hizmetleri",
                "Geriatrik Psikoloji"
            ],

            sectionCerts: "Klinik Sertifikalar",
            cert1Desc: "Minnesota Çok Yönlü Kişilik Envanteri",
            cert1Org: "Türk Psikologlar Derneği",
            cert2Desc: "Rorschach Inkblot Test",
            cert2Org: "Sertifikalı Uygulayıcı",
            languages: "Diller: Türkçe • English",

            sectionLocations: "İstanbul Lokasyonları",
            locationMain: "Ana Merkez — Nişantaşı",
            locationAddress: "Abdi İpekçi Caddesi, Nişantaşı, Şişli / İstanbul",
            locationMapLink: "Google Maps'te Aç →",
            locationAdditional: "Ek Lokasyonlar",
            locationDetail1: "Avrupa Yakası — Batı İstanbul",
            locationDetail2: "Kadıköy, Anadolu Yakası",
            locationNote: "Randevu oluştururken size en uygun lokasyonu belirtebilirsiniz.",

            sectionContact: "Randevu",
            contactText: "Bireysel, çift ve grup terapisi için iletişime geçin.",
            contactCTA: "WhatsApp ile İletişim →",

            // Footer
            footerCol1Title: "Eğitim & Deneyim",
            footerCol1Items: [
                "University of London, Goldsmiths",
                "NHS Klinik Eğitimi",
                "Yayımlanmış Araştırmacı",
                "Doktora Adayı (Devam Ediyor)"
            ],
            footerCol2Title: "Lokasyonlar",
            footerCol2Items: [
                "Nişantaşı, Şişli",
                "Bahçeşehir",
                "Moda, Kadıköy"
            ],
            footerCol3Title: "İletişim",
            footerTagline: "Uzm. Klinik Psikolog Şilan Eser — Kaliteli bakımın nitelikli eğitimle başladığı inancıyla."
        },
        en: {
            // Hero
            heroLabel: "Clinical Psychologist",
            heroStatement: "Founded psychology centers in London and Istanbul. Published researcher during undergraduate studies. Trained clinically at UK NHS.",
            heroCTA: "Book Appointment →",
            heroCTALink: "https://wa.me/905339735991?text=Hello%2C%20I%20would%20like%20to%20get%20information%20about%20psychological%20support%20services%20and%20make%20an%20appointment.",

            // Sections
            sectionEducation: "Education",
            yearPresent: "Present",
            phdOngoing: "Üsküdar University (ongoing)",

            researchAttribution: "Personality and Individual Differences (ScienceDirect) — Published during undergraduate studies.",
            researchLink: "Read Paper →",

            sectionExperience: "Professional Experience",
            expLocation1: "London",
            expLocation2: "Istanbul",

            sectionExpertise: "Clinical Specializations",
            expertise: [
                "Anxiety Disorders",
                "Obsessive Compulsive Disorder (OCD)",
                "Depression",
                "Eating Disorders",
                "Addiction",
                "Loneliness and Social Isolation",
                "Geriatric Psychology"
            ],

            sectionServices: "Services Offered",
            services: [
                "Cognitive Behavioral Therapy (CBT)",
                "Individual Psychotherapy",
                "Couples & Family Therapy",
                "Group Therapy",
                "Consultation Services",
                "Geriatric Psychology"
            ],

            sectionCerts: "Clinical Certifications",
            cert1Desc: "Minnesota Multiphasic Personality Inventory",
            cert1Org: "Turkish Psychologists Association",
            cert2Desc: "Rorschach Inkblot Test",
            cert2Org: "Certified Administrator",
            languages: "Languages: Turkish • English",

            sectionLocations: "Istanbul Locations",
            locationMain: "Main Center — Nişantaşı",
            locationAddress: "Abdi İpekçi Street, Nişantaşı, Şişli / Istanbul",
            locationMapLink: "Open in Google Maps →",
            locationAdditional: "Additional Locations",
            locationDetail1: "European Side — West Istanbul",
            locationDetail2: "Kadıköy, Asian Side",
            locationNote: "You can specify your preferred location when booking an appointment.",

            sectionContact: "Appointment",
            contactText: "Get in touch for individual, couples, and group therapy.",
            contactCTA: "Contact via WhatsApp →",

            // Footer
            footerCol1Title: "Education & Experience",
            footerCol1Items: [
                "University of London, Goldsmiths",
                "NHS Clinical Training",
                "Published Researcher",
                "PhD Candidate (Ongoing)"
            ],
            footerCol2Title: "Locations",
            footerCol2Items: [
                "Nişantaşı, Şişli",
                "Bahçeşehir",
                "Moda, Kadıköy"
            ],
            footerCol3Title: "Contact",
            footerTagline: "Clinical Psychologist Şilan Eser — Where quality care begins with quality training."
        }
    };

    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = localStorage.getItem('language') || 'tr';

    // Function to update all content
    function updateContent(lang) {
        const t = translations[lang];

        // Hero
        document.querySelector('[data-i18n="heroLabel"]').textContent = t.heroLabel;
        document.querySelector('[data-i18n="heroStatement"]').textContent = t.heroStatement;
        const heroCTA = document.querySelector('[data-i18n="heroCTA"]');
        heroCTA.textContent = t.heroCTA;
        heroCTA.href = t.heroCTALink;

        // Sections
        document.querySelector('.academic h2').textContent = t.sectionEducation;
        document.querySelector('.experience h2').textContent = t.sectionExperience;
        document.querySelector('.expertise h2').textContent = t.sectionExpertise;
        document.querySelector('.services h2').textContent = t.sectionServices;
        document.querySelector('.certifications h2').textContent = t.sectionCerts;
        document.querySelector('.locations h2').textContent = t.sectionLocations;
        document.querySelector('.contact h2').textContent = t.sectionContact;

        // Experience section
        document.querySelectorAll('.experience-item p')[1].textContent = t.expLocation1;
        document.querySelectorAll('.experience-item p')[2].textContent = t.expLocation2;
        document.querySelectorAll('.experience-item .year')[2].textContent = t.yearPresent;

        // Research
        document.querySelector('.quote-attribution').textContent = t.researchAttribution;
        document.querySelector('.research-link').textContent = t.researchLink;

        // Timeline
        document.querySelectorAll('.timeline-item .year')[2].textContent = t.yearPresent;
        document.querySelectorAll('.timeline-item p')[2].textContent = t.phdOngoing;

        // Expertise list
        const expertiseList = document.querySelector('.expertise ul');
        expertiseList.innerHTML = t.expertise.map(item => `<li>${item}</li>`).join('');

        // Services list
        const servicesList = document.querySelector('.services ul');
        servicesList.innerHTML = t.services.map(item => `<li>${item}</li>`).join('');

        // Certifications
        document.querySelectorAll('.cert-item p')[0].textContent = t.cert1Desc;
        document.querySelectorAll('.cert-item .cert-org')[0].textContent = t.cert1Org;
        document.querySelectorAll('.cert-item p')[1].textContent = t.cert2Desc;
        document.querySelectorAll('.cert-item .cert-org')[1].textContent = t.cert2Org;
        document.querySelector('.languages').innerHTML = `<strong>${t.languages.split(':')[0]}:</strong> ${t.languages.split(':')[1]}`;

        // Locations
        document.querySelector('.location-map h3').textContent = t.locationMain;
        document.querySelector('.location-address').textContent = t.locationAddress;
        document.querySelector('.location-link').textContent = t.locationMapLink;
        document.querySelector('.additional-locations h3').textContent = t.locationAdditional;
        document.querySelectorAll('.location-detail')[0].textContent = t.locationDetail1;
        document.querySelectorAll('.location-detail')[1].textContent = t.locationDetail2;
        document.querySelector('.locations-note').textContent = t.locationNote;

        // Contact
        document.querySelector('.contact p').textContent = t.contactText;
        document.querySelector('.contact-link').textContent = t.contactCTA;

        // Footer
        document.querySelectorAll('.footer-col h3')[0].textContent = t.footerCol1Title;
        document.querySelectorAll('.footer-col h3')[1].textContent = t.footerCol2Title;
        document.querySelectorAll('.footer-col h3')[2].textContent = t.footerCol3Title;

        const footerLists = document.querySelectorAll('.footer-col ul');
        footerLists[0].innerHTML = t.footerCol1Items.map(item => `<li>${item}</li>`).join('');
        footerLists[1].innerHTML = t.footerCol2Items.map(item => `<li>${item}</li>`).join('');

        document.querySelector('.footer-tagline').textContent = t.footerTagline;
    }

    // Set initial active state and content
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Load initial language
    updateContent(currentLang);

    // Language switch handler
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedLang = btn.dataset.lang;

            // Update active states
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Store preference
            localStorage.setItem('language', selectedLang);
            currentLang = selectedLang;

            // Update all content
            updateContent(selectedLang);
        });
    });

    // Hero entrance animation
    setTimeout(() => {
        document.querySelector('.hero').classList.add('hero-loaded');
    }, 100);

    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px 100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    // Observe timeline and experience items individually
    document.querySelectorAll('.timeline-item, .experience-item, .cert-item, .location-item').forEach((item, index) => {
        item.classList.add('fade-in-item');
        item.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(item);
    });

    // Parallax effect on section numbers (subtle)
    const sectionNumbers = document.querySelectorAll('.section-number');
    if (window.innerWidth >= 768) { // Only on tablet+
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            sectionNumbers.forEach((num, index) => {
                const speed = 0.3;
                const yPos = -(scrolled * speed);
                num.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    console.log('Better Mental Life - Layer 2 loaded ✨');
});
