// BETTER MENTAL LIFE - Layer 2: Motion & Polish
// Intersection Observer animations, smooth interactions

document.addEventListener('DOMContentLoaded', () => {
    // Scroll progress bar
    const progressBar = document.querySelector('.scroll-progress');

    function updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        progressBar.style.width = scrollPercent + '%';
    }

    // Navbar scroll behavior with hide/show
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Update progress bar
        updateProgressBar();

        // Hide on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Initial progress bar update
    updateProgressBar();

    // Language content object
    const translations = {
        tr: {
            // Hero
            heroLabel: "Uzm. Klinik Psikolog",
            heroStatement: "Akademik araştırma ve klinik uzmanlık. İngiltere NHS eğitimi. İstanbul merkezli psikoterapi hizmeti.",
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
            expertiseAnxietyTitle: "Anksiyete Bozuklukları",
            expertiseAnxietyDesc: "Panik atak, sosyal anksiyete, yaygın anksiyete bozukluğu ve fobiler için kanıta dayalı terapi yaklaşımları.",
            expertiseOCDTitle: "Obsesif Kompulsif Bozukluk (OCD)",
            expertiseOCDDesc: "Takıntılı düşünceler ve tekrarlayan davranışların yönetimi için uzmanlaşmış BDT protokolleri.",
            expertiseDepressionTitle: "Depresyon",
            expertiseDepressionDesc: "Majör depresyon, distimi ve mevsimsel duygudurum bozuklukları için bütünleşik terapi desteği.",
            expertiseEatingTitle: "Yeme Bozuklukları",
            expertiseEatingDesc: "Anoreksiya, bulimia ve tıkınırcasına yeme bozukluğu için multidisipliner tedavi yaklaşımı.",
            expertiseAddictionTitle: "Bağımlılık",
            expertiseAddictionDesc: "Madde bağımlılığı ve davranışsal bağımlılıklar için motivasyonel görüşme ve relaps önleme stratejileri.",
            expertiseLonelinessTitle: "Yalnızlık ve Sosyal İzolasyon",
            expertiseLonelinessDesc: "Kronik yalnızlık ve sosyal bağlantı zorluğu yaşayanlar için ilişkisel ve bilişsel müdahaleler.",
            expertiseGeriatricTitle: "Geriatrik Psikoloji",
            expertiseGeriatricDesc: "Yaşlı bireylerin psikolojik ihtiyaçları, bilişsel değişim ve yaşam kalitesi için özelleştirilmiş destek.",

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
            footerSubtitle: "Uzm. Klinik Psikolog Şilan Eser",
            footerMeta: "İstanbul — Nişantaşı, Bahçeşehir, Moda"
        },
        en: {
            // Hero
            heroLabel: "Clinical Psychologist",
            heroStatement: "Academic research and clinical expertise. UK NHS training. Istanbul-based psychotherapy services.",
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
            expertiseAnxietyTitle: "Anxiety Disorders",
            expertiseAnxietyDesc: "Evidence-based therapy approaches for panic attacks, social anxiety, generalized anxiety disorder, and phobias.",
            expertiseOCDTitle: "Obsessive Compulsive Disorder (OCD)",
            expertiseOCDDesc: "Specialized CBT protocols for managing intrusive thoughts and repetitive behaviors.",
            expertiseDepressionTitle: "Depression",
            expertiseDepressionDesc: "Integrated therapy support for major depression, dysthymia, and seasonal affective disorders.",
            expertiseEatingTitle: "Eating Disorders",
            expertiseEatingDesc: "Multidisciplinary treatment approach for anorexia, bulimia, and binge eating disorder.",
            expertiseAddictionTitle: "Addiction",
            expertiseAddictionDesc: "Motivational interviewing and relapse prevention strategies for substance and behavioral addictions.",
            expertiseLonelinessTitle: "Loneliness and Social Isolation",
            expertiseLonelinessDesc: "Relational and cognitive interventions for those experiencing chronic loneliness and social connection difficulties.",
            expertiseGeriatricTitle: "Geriatric Psychology",
            expertiseGeriatricDesc: "Specialized support for psychological needs, cognitive changes, and quality of life in older adults.",

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
            footerSubtitle: "Clinical Psychologist Şilan Eser",
            footerMeta: "Istanbul — Nişantaşı, Bahçeşehir, Moda"
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

        // Expertise accordion
        document.querySelector('[data-i18n="expertiseAnxietyTitle"]').textContent = t.expertiseAnxietyTitle;
        document.querySelector('[data-i18n="expertiseAnxietyDesc"]').textContent = t.expertiseAnxietyDesc;
        document.querySelector('[data-i18n="expertiseOCDTitle"]').textContent = t.expertiseOCDTitle;
        document.querySelector('[data-i18n="expertiseOCDDesc"]').textContent = t.expertiseOCDDesc;
        document.querySelector('[data-i18n="expertiseDepressionTitle"]').textContent = t.expertiseDepressionTitle;
        document.querySelector('[data-i18n="expertiseDepressionDesc"]').textContent = t.expertiseDepressionDesc;
        document.querySelector('[data-i18n="expertiseEatingTitle"]').textContent = t.expertiseEatingTitle;
        document.querySelector('[data-i18n="expertiseEatingDesc"]').textContent = t.expertiseEatingDesc;
        document.querySelector('[data-i18n="expertiseAddictionTitle"]').textContent = t.expertiseAddictionTitle;
        document.querySelector('[data-i18n="expertiseAddictionDesc"]').textContent = t.expertiseAddictionDesc;
        document.querySelector('[data-i18n="expertiseLonelinessTitle"]').textContent = t.expertiseLonelinessTitle;
        document.querySelector('[data-i18n="expertiseLonelinessDesc"]').textContent = t.expertiseLonelinessDesc;
        document.querySelector('[data-i18n="expertiseGeriatricTitle"]').textContent = t.expertiseGeriatricTitle;
        document.querySelector('[data-i18n="expertiseGeriatricDesc"]').textContent = t.expertiseGeriatricDesc;

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
        document.querySelector('[data-i18n="footerSubtitle"]').textContent = t.footerSubtitle;
        document.querySelector('[data-i18n="footerMeta"]').textContent = t.footerMeta;
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
    // Section number parallax - subtle movement relative to viewport
    const sectionNumbers = document.querySelectorAll('.section-number');
    if (window.innerWidth >= 1024) { // Desktop only
        window.addEventListener('scroll', () => {
            sectionNumbers.forEach((num) => {
                const section = num.closest('section');
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Only apply parallax when section is in viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    // Calculate position relative to viewport center
                    const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2);
                    const yPos = centerOffset * 0.08; // Very subtle movement
                    num.style.transform = `translateY(${yPos}px)`;
                }
            });
        });
    }

    // Expertise accordion
    const expertiseItems = document.querySelectorAll('.expertise-item');
    expertiseItems.forEach(item => {
        const header = item.querySelector('.expertise-header');
        header.addEventListener('click', () => {
            // Close all other items
            expertiseItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    console.log('Better Mental Life - Layer 2 loaded ✨');
});
