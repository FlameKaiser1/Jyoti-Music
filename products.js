const assetPath = './products/store-products/asset/';

// Realistic Musical Instruments Dataset
const products = [
    {
        id: 1,
        name: "Yamaha F310 Acoustic Guitar",
        category: "Guitar",
        description: "Spruce top acoustic guitar offering warm sound and comfortable playing style.",
        price: "₹10,490",
        image: `${assetPath}guitar-1.avif`,
        specs: {
            "Brand": "Yamaha",
            "Top Material": "Spruce",
            "Body Material": "Locally Sourced Tonewood",
            "String Count": "6 Metal Strings",
            "Warranty": "1 Year Manufacturer"
        }
    },
    {
        id: 2,
        name: "Casio CT-X800 Portable Keyboard",
        category: "Keyboard",
        description: "61-Key portable arranger keyboard with AiX Sound Source and USB MIDI.",
        price: "₹14,995",
        image: `${assetPath}keyboard-2.avif`,
        specs: {
            "Brand": "Casio",
            "Number of Keys": "61 Touch Sensitive",
            "Tones": "800 Built-in Tones",
            "Connectivity": "USB Type B, Audio In",
            "Weight": "4.4 kg"
        }
    },
    {
        id: 3,
        name: "Professional Brass Dagga & Dayan Tabla Set",
        category: "Tabla",
        description: "Handcrafted brass dagga with heavy sheesham wood dayan set for professional concerts.",
        price: "₹12,500",
        image: `${assetPath}tabla-1.jpg`,
        specs: {
            "Dagga Weight": "3.5 kg Heavy Brass",
            "Dayan Wood": "A-Grade Sheesham Wood",
            "Skin": "Handmade Puri",
            "Includes": "Padded Bag, Tuning Hammer, Cushions"
        }
    },
    {
        id: 4,
        name: "3.5 Octave Scale Changer Harmonium",
        category: "Harmonium",
        description: "Triple reed 9-scale changer harmonium crafted with aged teak wood.",
        price: "Enquire for Price",
        image: `${assetPath}harmonium-1.jpg`,
        specs: {
            "Reeds": "3 Sets (Bass-Male-Female)",
            "Wood": "Aged Teak Wood",
            "Bellows": "7-Fold Leatherette Bellows",
            "Keys": "42 Keys Nylon Finish"
        }
    },
    {
        id: 5,
        name: "Mapex Tornado 5-Piece Drum Set",
        category: "Drum",
        description: "Complete entry-level acoustic drum kit with cymbals, hardware, and throne.",
        price: "₹42,000",
        image: `${assetPath}drum.avif`,
        specs: {
            "Shell Material": "9-Ply Basswood",
            "Configuration": "5-Piece Studio Kit",
            "Cymbals Included": "14\" Hi-Hat, 16\" Crash",
            "Hardware": "Double-Braced Stands Included"
        }
    },
    {
        id: 6,
        name: "Stentor Student I Violin Outfit (4/4)",
        category: "Violin",
        description: "Hand-carved solid tonewood full-sized violin with case and wood bow.",
        price: "₹11,200",
        image: `${assetPath}violin-1.avif`,
        specs: {
            "Size": "4/4 Full Size",
            "Top": "Carved Solid Spruce",
            "Back & Sides": "Carved Maple",
            "Tailpiece": "Composite with Integral Adjusters"
        }
    },
    {
        id: 7,
        name: "Punam Flutes C Natural Medium Bamboo Bansuri",
        category: "Flute",
        description: "Professional concert quality 19-inch Indian bamboo flute, threaded and tuned.",
        price: "₹2,800",
        image: `${assetPath}flute-1.jpg`,
        specs: {
            "Key / Scale": "C Natural Medium",
            "Length": "19 Inches",
            "Material": "Assam Bamboo",
            "Tuning": "440 Hz Fine Tuned"
        }
    },
    {
        id: 8,
        name: "Ibanez GSR200 4-String Electric Bass Guitar",
        category: "Guitar",
        description: "Sleek bass guitar featuring Dynamix P/J pickups and Phat II active EQ boost.",
        price: "₹22,900",
        image: `${assetPath}guitar-2.avif`,
        specs: {
            "Body": "Poplar",
            "Neck": "GSR4 Maple",
            "Pickups": "Dynamix P & J Pickups",
            "Hardware": "Chrome"
        }
    },
    {
        id: 9,
        name: "Meinl Percussion African Style Djembe",
        category: "Other",
        description: "Carved from one solid piece of mahogany wood with hand-selected goat heads.",
        price: "₹8,900",
        image: `${assetPath}djembe-1.jpg`,
        specs: {
            "Size": "10-inch Head",
            "Material": "Mahogany Wood",
            "Head": "Goat Skin",
            "Tuning": "Mali Weave Rope Tuning"
        }
    },
    {
        id: 10,
        name: "Fender CD-60S Dreadnought Acoustic Guitar",
        category: "Guitar",
        description: "Solid spruce top guitar with comfortable rolled fingerboard edges for confident playing.",
        price: "₹18,500",
        image: `${assetPath}guitar-3.jpg`,
        specs: {
            "Top Material": "Solid Spruce",
            "Back & Sides": "Mahogany",
            "Neck Shape": "Easy-to-Play C Shape",
            "Scale Length": "643 mm"
        }
    },
    {
        id: 11,
        name: "Roland GO:KEYS 5 Music Creation Keyboard",
        category: "Keyboard",
        description: "Creative keyboard with expressive sounds, Bluetooth audio, and intuitive song building tools.",
        price: "₹38,900",
        image: `${assetPath}keyboard.jpg`,
        specs: {
            "Keys": "61 Touch-Sensitive Keys",
            "Sounds": "1,154 Tones",
            "Connectivity": "Bluetooth Audio and MIDI",
            "Speakers": "2 x 6 W Built-in Speakers"
        }
    },
    {
        id: 12,
        name: "Bina Musical Tabla Set with Cushions",
        category: "Tabla",
        description: "Balanced dayan and bayan set with clear tonal response for riyaaz, accompaniment, and stage work.",
        price: "₹7,950",
        image: `${assetPath}tabla-2.jpg`,
        specs: {
            "Dayan": "5.5 Inch Sheesham Wood",
            "Bayan": "Brass Alloy",
            "Includes": "Cushions and Covers",
            "Use": "Beginner to Intermediate"
        }
    },
    {
        id: 13,
        name: "Yamaha V5SC Student Violin Outfit",
        category: "Violin",
        description: "Carefully set-up violin outfit with a spruce top, maple body, bow, and protective case.",
        price: "₹28,750",
        image: `${assetPath}violin-2.jpg`,
        specs: {
            "Size": "4/4 Full Size",
            "Top": "Solid Spruce",
            "Back & Sides": "Maple",
            "Includes": "Bow, Case, Rosin"
        }
    },
    {
        id: 14,
        name: "Aulos 509B Symphony Baroque Flute",
        category: "Flute",
        description: "Warm-toned soprano recorder with an easy response for students, ensembles, and practice sessions.",
        price: "₹1,850",
        image: `${assetPath}flute-2.jpg`,
        specs: {
            "Key": "C Soprano",
            "Material": "Resin Body",
            "Fingering": "Baroque",
            "Includes": "Case and Cleaning Rod"
        }
    },
    {
        id: 15,
        name: "Kala Satin Mahogany Concert Ukulele",
        category: "Other",
        description: "Compact concert ukulele with a warm mahogany voice, ideal for travel, lessons, and casual playing.",
        price: "₹6,400",
        image: `${assetPath}ukulele-1.jpg`,
        specs: {
            "Body": "Mahogany",
            "Size": "Concert",
            "Strings": "Aquila Super Nylgut",
            "Includes": "Padded Gig Bag"
        }
    },
    {
        id: 16,
        name: "BINA 3.5 Octave Student Harmonium",
        category: "Harmonium",
        description: "Compact teak-finish harmonium with a smooth bellows action for bhajan, classroom, and daily riyaaz.",
        price: "₹16,800",
        image: `${assetPath}harmonium-2.jpg`,
        specs: {
            "Range": "3.5 Octaves",
            "Reeds": "Double Reed",
            "Keys": "42 Natural Finish Keys",
            "Includes": "Padded Carrying Case"
        }
    },
];

const imageFallbacks = {
    1: `${assetPath}guitar-1.avif`,
    8: `${assetPath}guitar-2.avif`,
    10: `${assetPath}guitar-3.jpg`,
    2: `${assetPath}keyboard-2.avif`,
    11: `${assetPath}keyboard.jpg`,
    3: `${assetPath}tabla-1.jpg`,
    12: `${assetPath}tabla-2.jpg`,
    4: `${assetPath}harmonium-1.jpg`,
    16: `${assetPath}harmonium-2.jpg`,
    5: `${assetPath}drum.avif`,
    6: `${assetPath}violin-1.avif`,
    13: `${assetPath}violin-2.jpg`,
    7: `${assetPath}flute-1.jpg`,
    14: `${assetPath}flute-2.jpg`,
    9: `${assetPath}djembe-1.jpg`,
    15: `${assetPath}ukulele-1.jpg`,
};

// Render Instrument Cards
function renderProducts(items) {
    const grid = document.getElementById('productsGrid');
    const resultsCount = document.getElementById('resultsCount');
    grid.innerHTML = '';
    resultsCount.textContent = `Showing ${items.length} ${items.length === 1 ? 'instrument' : 'instruments'}`;

    if (items.length === 0) {
        grid.innerHTML = '<p class="empty-state">No instruments match that search. Try another sound or category.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-container">
                <span class="badge-category">${product.category}</span>
                <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${imageFallbacks[product.id]}'">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-desc">${product.description}</div>
                <div class="product-price">${product.price}</div>
                <div class="card-actions">
                    <button class="btn btn-outline" onclick="showProductDetails(${product.id})">
                        <i class="fa-solid fa-eye"></i> View Details
                    </button>
                    <a class="btn btn-whatsapp" href="https://wa.me/919876543210?text=${encodeURIComponent('Hi Jyoti Music, I am interested in inquiring about: ' + product.name)}" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> Enquire
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Category Filter Function
function filterCategory(category) {
    const chips = document.querySelectorAll('.category-chip');
    chips.forEach(chip => {
        if (chip.textContent.trim().includes(category)) {
            chip.classList.add('active');
            chip.setAttribute('aria-pressed', 'true');
        } else {
            chip.classList.remove('active');
            chip.setAttribute('aria-pressed', 'false');
        }
    });

    if (category === 'All') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        renderProducts(filtered);
    }
}

// Show Product Details View
function showProductDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const detailImg = document.getElementById('detailImg');
    detailImg.onerror = () => {
        detailImg.onerror = null;
        detailImg.src = imageFallbacks[product.id];
    };
    detailImg.src = product.image;
    document.getElementById('detailTitle').textContent = product.name;
    document.getElementById('detailCategory').textContent = product.category;
    document.getElementById('detailPrice').textContent = product.price;
    document.getElementById('detailDesc').textContent = product.description;

    // Render specs table
    const specsBody = document.getElementById('detailSpecs');
    specsBody.innerHTML = '';
    for (const [key, value] of Object.entries(product.specs)) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<th>${key}</th><td>${value}</td>`;
        specsBody.appendChild(tr);
    }

    // Dynamic WhatsApp Enquiry Link
    const waMessage = encodeURIComponent(`Hello Jyoti Music, I would like to inquire about the ${product.name} (${product.price}).`);
    document.getElementById('detailWhatsapp').href = `https://wa.me/919876543210?text=${waMessage}`;

    // Switch View
    document.getElementById('listingView').style.display = 'none';
    document.getElementById('detailsView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Return to Listing View
function showListingView() {
    document.getElementById('detailsView').style.display = 'none';
    document.getElementById('listingView').style.display = 'block';
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    document.getElementById('productSearch').addEventListener('input', (event) => {
        const query = event.target.value.trim().toLowerCase();
        renderProducts(products.filter(product => `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query)));
    });
});