// Данные товаров для демонстрационного магазина
const productsData = [
    {
        id: 1,
        name: "Ноутбук Apple MacBook Pro 16",
        description: "Потужний ноутбук з дисплеєм Retina, процесором M2 Pro та 16 ГБ оперативної пам'яті.",
        price: 89999,
        category: "laptop",
        brand: "apple",
        rating: 4.8,
        reviews: 42,
        colors: ["#1d1d1f", "#f5f5f7", "#007AFF"],
        image: "laptop",
        badge: "Топ продаж"
    },
    {
        id: 2,
        name: "iPhone 14 Pro Max",
        description: "Флагманський смартфон з Dynamic Island, камерою 48 Мп та процесором A16 Bionic.",
        price: 54999,
        category: "phone",
        brand: "apple",
        rating: 4.9,
        reviews: 128,
        colors: ["#1d1d1f", "#A6172D", "#3A6966", "#F5E7DA"],
        image: "phone",
        badge: "Новинка"
    },
    {
        id: 3,
        name: "Ноутбук ASUS ROG Zephyrus G14",
        description: "Геймерський ноутбук з процесором AMD Ryzen 9 та відеокартою NVIDIA GeForce RTX 4060.",
        price: 65999,
        category: "laptop",
        brand: "asus",
        rating: 4.7,
        reviews: 36,
        colors: ["#1d1d1f", "#535353"],
        image: "laptop-gaming",
        badge: "Для геймерів"
    },
    {
        id: 4,
        name: "Samsung Galaxy S23 Ultra",
        description: "Смартфон з потужною камерою 200 Мп, пером S-Pen та екраном Dynamic AMOLED 2X.",
        price: 51999,
        category: "phone",
        brand: "samsung",
        rating: 4.8,
        reviews: 94,
        colors: ["#1d1d1f", "#6C7989", "#9A7B69"],
        image: "phone",
        badge: "Рекомендуємо"
    },
    {
        id: 5,
        name: "Навушники Sony WH-1000XM5",
        description: "Бездротові навушники з шумозаглушенням та чудовою якістю звуку.",
        price: 15999,
        category: "audio",
        brand: "sony",
        rating: 4.8,
        reviews: 67,
        colors: ["#1d1d1f", "#C0C0C0"],
        image: "headphones",
        badge: "Акція"
    },
    {
        id: 6,
        name: "Планшет iPad Pro 12.9",
        description: "Потужний планшет з дисплеєм Liquid Retina XDR та чипом M2.",
        price: 48999,
        category: "tablet",
        brand: "apple",
        rating: 4.7,
        reviews: 51,
        colors: ["#1d1d1f", "#f5f5f7"],
        image: "tablet",
        badge: "Преміум"
    },
    {
        id: 7,
        name: "Пилосос Dyson V15 Detect",
        description: "Бездротовий пилосос з лазерним виявленням пилу та потужним всмоктуванням.",
        price: 32999,
        category: "home",
        brand: "dyson",
        rating: 4.6,
        reviews: 42,
        colors: ["#FF5800", "#1d1d1f"],
        image: "vacuum",
        badge: "Інновація"
    },
    {
        id: 8,
        name: "Смарт-годинник Apple Watch Series 8",
        description: "Розумний годинник з функціями моніторингу здоров'я та всегда-on дисплеєм.",
        price: 18999,
        category: "gadget",
        brand: "apple",
        rating: 4.7,
        reviews: 89,
        colors: ["#1d1d1f", "#C0C0C0", "#A6172D"],
        image: "watch",
        badge: "Тренд"
    },
    {
        id: 9,
        name: "Ноутбук Lenovo Yoga 9i",
        description: "Ультрабук з сенсорним дисплеєм, що обертається на 360 градусів.",
        price: 45999,
        category: "laptop",
        brand: "lenovo",
        rating: 4.5,
        reviews: 28,
        colors: ["#1d1d1f", "#C0C0C0"],
        image: "laptop",
        badge: "Універсальний"
    },
    {
        id: 10,
        name: "Смартфон Xiaomi 13 Pro",
        description: "Флагман від Xiaomi з камерою Leica, процесором Snapdragon 8 Gen 2.",
        price: 38999,
        category: "phone",
        brand: "xiaomi",
        rating: 4.6,
        reviews: 76,
        colors: ["#1d1d1f", "#4A4A4A", "#7C4835"],
        image: "phone",
        badge: "Вибір редакції"
    },
    {
        id: 11,
        name: "Ігрова консоль PlayStation 5",
        description: "Нове покоління ігрової консолі з SSD та підтримкою трасування променів.",
        price: 28999,

нелвикс, [23.12.2025 17:31]
category: "gadget",
        brand: "sony",
        rating: 4.9,
        reviews: 112,
        colors: ["#1d1d1f", "#00439C"],
        image: "console",
        badge: "Хіт"
    },
    {
        id: 12,
        name: "Кавоварка De'Longhi Dinamica",
        description: "Автоматична кавоварка для приготування кави з зерен, капсул або меленої кави.",
        price: 23999,
        category: "home",
        brand: "delonghi",
        rating: 4.5,
        reviews: 34,
        colors: ["#C0C0C0", "#1d1d1f"],
        image: "coffee",
        badge: "Для дому"
    },
    {
        id: 13,
        name: "Планшет Samsung Galaxy Tab S8+",
        description: "Потужний планшет з пером S-Pen, дисплеєм Super AMOLED та процесором Snapdragon 8 Gen 1.",
        price: 42999,
        category: "tablet",
        brand: "samsung",
        rating: 4.6,
        reviews: 41,
        colors: ["#1d1d1f", "#6C7989"],
        image: "tablet",
        badge: "Для творців"
    },
    {
        id: 14,
        name: "Навушники Apple AirPods Max",
        description: "Преміум навушники з адаптивним шумозаглушенням та просторовим аудіо.",
        price: 24999,
        category: "audio",
        brand: "apple",
        rating: 4.5,
        reviews: 63,
        colors: ["#1d1d1f", "#C0C0C0", "#A6172D"],
        image: "headphones",
        badge: "Преміум"
    },
    {
        id: 15,
        name: "Монітор Dell UltraSharp 32",
        description: "4K монітор з діагоналлю 32 дюйми, ідеальний для дизайну та монтажу.",
        price: 32999,
        category: "computer",
        brand: "dell",
        rating: 4.7,
        reviews: 29,
        colors: ["#1d1d1f"],
        image: "monitor",
        badge: "Для професіоналів"
    },
    {
        id: 16,
        name: "Електросамокат Xiaomi Mi Electric Scooter 4",
        description: "Електросамокат з запасом ходу 30 км, максимальною швидкістю 25 км/год.",
        price: 18999,
        category: "gadget",
        brand: "xiaomi",
        rating: 4.4,
        reviews: 58,
        colors: ["#1d1d1f", "#C0C0C0"],
        image: "scooter",
        badge: "Для міста"
    },
    {
        id: 17,
        name: "Бездротова зарядка Samsung Wireless Charger Duo",
        description: "Зарядка одночасно двох пристроїв: смартфона та годинника або навушників.",
        price: 3999,
        category: "gadget",
        brand: "samsung",
        rating: 4.3,
        reviews: 47,
        colors: ["#1d1d1f", "#C0C0C0"],
        image: "charger",
        badge: "Аксесуар"
    },
    {
        id: 18,
        name: "Робот-пилосос Roborock S7 MaxV",
        description: "Робот-пилосос з функціями миття підлоги та розпізнавання перешкод.",
        price: 34999,
        category: "home",
        brand: "roborock",
        rating: 4.7,
        reviews: 39,
        colors: ["#1d1d1f", "#C0C0C0"],
        image: "robot-vacuum",
        badge: "Розумний дім"
    },
    {
        id: 19,
        name: "Фотоапарат Sony Alpha 7 IV",
        description: "Дзеркальна камера з повнокадровим сенсором 33 Мп та 4K-відео.",
        price: 89999,
        category: "photo",
        brand: "sony",
        rating: 4.8,
        reviews: 24,
        colors: ["#1d1d1f"],
        image: "camera",
        badge: "Професійний"
    },
    {
        id: 20,
        name: "Мережевий накопичувач Synology DiskStation DS920+",
        description: "4-дисковий NAS для домашнього та офісного використання.",
        price: 28999,
        category: "computer",
        brand: "synology",
        rating: 4.6,
        reviews: 18,
        colors: ["#1d1d1f"],
        image: "nas",
        badge: "Для даних"
    }
];

// Состояние приложения
const state = {
    cart: [],
    wishlist: [],
    user: null,
    currentProductForReview: null,
    filters: {
        category: [],
        brand: [],
        minPrice: 5000,
        maxPrice: 50000,
        rating: "all"
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Основная функция инициализации
function initApp() {

нелвикс, [23.12.2025 17:31]
// Загружаем данные из localStorage
    loadFromLocalStorage();
    
    // Отображаем товары
    renderProducts();
    
    // Инициализируем обработчики событий
    initEventListeners();
    
    // Обновляем счетчики в шапке
    updateHeaderCounters();
    
    // Анимация появления элементов
    animateOnScroll();
}

// Загрузка данных из localStorage
function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('techstore_cart');
    const savedWishlist = localStorage.getItem('techstore_wishlist');
    const savedUser = localStorage.getItem('techstore_user');
    
    if (savedCart) {
        state.cart = JSON.parse(savedCart);
    }
    
    if (savedWishlist) {
        state.wishlist = JSON.parse(savedWishlist);
    }
    
    if (savedUser) {
        state.user = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Сохранение данных в localStorage
function saveToLocalStorage() {
    localStorage.setItem('techstore_cart', JSON.stringify(state.cart));
    localStorage.setItem('techstore_wishlist', JSON.stringify(state.wishlist));
    if (state.user) {
        localStorage.setItem('techstore_user', JSON.stringify(state.user));
    }
}

// Отрисовка товаров на странице
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;
    
    // Применяем фильтры к данным товаров
    const filteredProducts = applyFilters(productsData);
    
    // Очищаем сетку товаров
    productsGrid.innerHTML = '';
    
    // Добавляем каждый товар в сетку
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Добавляем задержку для анимации появления
    setTimeout(() => {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = ${index * 0.05}s;
        });
    }, 100);
}

// Применение фильтров к товарам
function applyFilters(products) {
    return products.filter(product => {
        // Фильтр по категории
        const categoryCheckboxes = document.querySelectorAll('input[name="category"]:checked');
        const selectedCategories = Array.from(categoryCheckboxes).map(cb => cb.value);
        
        if (selectedCategories.length > 0) {
            const categoryMap = {
                'laptop': 'laptop',
                'phone': 'phone',
                'tablet': 'tablet',
                'audio': 'audio',
                'home': 'home'
            };
            
            const productCategory = categoryMap[product.category] || product.category;
            if (!selectedCategories.includes(productCategory)) {
                return false;
            }
        }
        
        // Фильтр по бренду
        const brandCheckboxes = document.querySelectorAll('input[name="brand"]:checked');
        const selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);
        
        if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
            return false;
        }
        
        // Фильтр по цене
        const minPrice = parseInt(document.getElementById('price-min').value) || 0;
        const maxPrice = parseInt(document.getElementById('price-max').value) || 100000;
        
        if (product.price < minPrice || product.price > maxPrice) {
            return false;
        }
        
        // Фильтр по рейтингу
        const ratingFilter = document.querySelector('input[name="rating"]:checked');
        if (ratingFilter && ratingFilter.value !== 'all') {
            const minRating = parseFloat(ratingFilter.value);
            if (product.rating < minRating) {
                return false;
            }
        }
        
        return true;
    });
}

// Создание карточки товара
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.id = product.id;
    
    // Проверяем, есть ли товар в избранном

нелвикс, [23.12.2025 17:31]
const isInWishlist = state.wishlist.some(item => item.id === product.id);
    
    // Создаем HTML для карточки
    card.innerHTML = `
        <div class="product-image">
            ${product.badge ? <div class="product-badge">${product.badge}</div> : ''}
            <div class="like-btn ${isInWishlist ? 'active' : ''}">
                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </div>
            <i class="fas fa-${getProductIcon(product.image)} fa-3x" style="color: #666;"></i>
        </div>
        <div class="product-details">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${formatPrice(product.price)} ₴</div>
            
            <div class="product-colors">
                ${product.colors.map((color, index) => `
                    <div class="color-option ${index === 0 ? 'active' : ''}" 
                         style="background-color: ${color};" 
                         data-color="${color}">
                    </div>
                `).join('')}
            </div>
            
            <div class="product-actions">
                <button class="add-to-cart-btn">
                    <i class="fas fa-shopping-cart"></i> В кошик
                </button>
                <button class="view-details-btn">
                    <i class="fas fa-info-circle"></i> Деталі
                </button>
            </div>
            
            <div class="product-rating">
                ${generateStarRating(product.rating)}
                <span>${product.rating} (${product.reviews} відгуків)</span>
            </div>
            
            <div class="reviews-section">
                <h4>Відгуки:</h4>
                <div class="reviews-container" id="reviews-${product.id}">
                    <!-- Отзывы будут добавляться динамически -->
                </div>
                <button class="add-review-btn" data-product-id="${product.id}">
                    <i class="far fa-comment"></i> Додати відгук
                </button>
            </div>
        </div>
    `;
    
    // Добавляем обработчики событий для карточки
    const likeBtn = card.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => toggleWishlist(product));
    
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(product));
    
    const viewDetailsBtn = card.querySelector('.view-details-btn');
    viewDetailsBtn.addEventListener('click', () => showProductDetails(product));
    
    const colorOptions = card.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const addReviewBtn = card.querySelector('.add-review-btn');
    addReviewBtn.addEventListener('click', function() {
        openReviewModal(product);
    });
    
    return card;
}

// Генерация звезд рейтинга
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

// Получение иконки для товара
function getProductIcon(imageType) {
    const icons = {
        'laptop': 'laptop',
        'laptop-gaming': 'laptop',
        'phone': 'mobile-alt',
        'tablet': 'tablet-alt',
        'headphones': 'headphones',
        'vacuum': 'wind',
        'watch': 'clock',
        'console': 'gamepad',
        'coffee': 'coffee',
        'monitor': 'desktop',
        'scooter': 'bicycle',

нелвикс, [23.12.2025 17:31]
'charger': 'charging-station',
        'robot-vacuum': 'robot',
        'camera': 'camera',
        'nas': 'hdd'
    };
    
    return icons[imageType] || 'box';
}

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Добавление товара в корзину
function addToCart(product) {
    // Проверяем, есть ли товар уже в корзине
    const existingItem = state.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
    }
    
    // Сохраняем в localStorage
    saveToLocalStorage();
    
    // Обновляем счетчики
    updateHeaderCounters();
    
    // Показываем уведомление
    showCartNotification();
    
    // Обновляем боковую панель корзины, если она открыта
    if (document.getElementById('cart-sidebar').classList.contains('open')) {
        renderCartItems();
    }
}

// Переключение товара в избранное
function toggleWishlist(product) {
    const index = state.wishlist.findIndex(item => item.id === product.id);
    
    if (index === -1) {
        // Добавляем в избранное
        state.wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
    } else {
        // Удаляем из избранного
        state.wishlist.splice(index, 1);
    }
    
    // Сохраняем в localStorage
    saveToLocalStorage();
    
    // Обновляем счетчики
    updateHeaderCounters();
    
    // Обновляем иконку на карточке товара
    const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
    if (productCard) {
        const likeBtn = productCard.querySelector('.like-btn');
        const likeIcon = likeBtn.querySelector('i');
        
        if (index === -1) {
            likeBtn.classList.add('active');
            likeIcon.classList.remove('far');
            likeIcon.classList.add('fas');
        } else {
            likeBtn.classList.remove('active');
            likeIcon.classList.remove('fas');
            likeIcon.classList.add('far');
        }
    }
}

// Показ уведомления о добавлении в корзину
function showCartNotification() {
    const notification = document.getElementById('cart-notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Обновление счетчиков в шапке
function updateHeaderCounters() {
    const cartCount = document.getElementById('cart-count');
    const wishlistCount = document.getElementById('wishlist-count');
    
    if (cartCount) {
        const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    if (wishlistCount) {
        wishlistCount.textContent = state.wishlist.length;
        wishlistCount.style.display = state.wishlist.length > 0 ? 'flex' : 'none';
    }
}

// Открытие модального окна для отзыва
function openReviewModal(product) {
    state.currentProductForReview = product;
    
    const modal = document.getElementById('review-modal');
    const productName = document.getElementById('review-product-name');
    
    productName.textContent = product.name;
    modal.style.display = 'flex';
    
    // Сброс формы
    document.getElementById('review-title').value = '';
    document.getElementById('review-text').value = '';
    
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
        star.classList.remove('fas');
        star.classList.add('far');
    });
    
    document.querySelector('.rating-text').textContent = 'Оберіть кількість зірок';
}

// Показ деталей товара
function showProductDetails(product) {
    alert(`Детальна інформація про товар:\n\n${product.name}\n\n${product.

нелвикс, [23.12.2025 17:31]
description}\n\nЦіна: ${formatPrice(product.price)} ₴\n\nРейтинг: ${product.rating} зірок (${product.reviews} відгуків)\n\nЦей функціонал повністю демонстраційний.`);
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Кнопка корзины в шапке
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('open');
            renderCartItems();
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });
    }
    
    // Кнопка избранного в шапке
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            alert(`У вашому списку обраного ${state.wishlist.length} товарів.\n\nЦей функціонал повністю демонстраційний.`);
        });
    }
    
    // Кнопка авторизации
    const authBtn = document.getElementById('auth-btn');
    const authModal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (authBtn) {
        authBtn.addEventListener('click', () => {
            if (state.user) {
                // Если пользователь авторизован, показываем меню
                const logout = confirm(`${state.user.name}, ви вже авторизовані. Бажаєте вийти?`);
                if (logout) {
                    state.user = null;
                    localStorage.removeItem('techstore_user');
                    updateAuthUI();
                }
            } else {
                // Если не авторизован, показываем модальное окно
                authModal.style.display = 'flex';
                document.getElementById('login-form').classList.add('active');
                document.getElementById('register-form').classList.remove('active');
                document.getElementById('auth-success').style.display = 'none';
            }
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            authModal.style.display = 'none';
        });
    }
    
    // Переключение между вкладками входа и регистрации
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            document.getElementById('login-form').classList.remove('active');
            document.getElementById('register-form').classList.remove('active');
            document.getElementById('auth-success').style.display = 'none';
            
            document.getElementById(`${tabName}-form`).classList.add('active');
        });
    });
    
    // Кнопка входа
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            if (email && password) {
                // Имитация успешной авторизации
                state.user = {
                    name: email.split('@')[0],
                    email: email
                };
                
                saveToLocalStorage();
                updateAuthUI();
                
                // Показываем сообщение об успехе
                document.getElementById('login-form').classList.remove('active');
                document.getElementById('auth-success').style.display = 'block';
                
                // Закрываем модальное окно через 2 секунды
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 2000);

нелвикс, [23.12.2025 17:31]
} else {
                alert('Будь ласка, заповніть всі поля.');
            }
        });
    }
    
    // Кнопка регистрации
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            
            if (name && email && password) {
                // Имитация успешной регистрации
                state.user = {
                    name: name,
                    email: email
                };
                
                saveToLocalStorage();
                updateAuthUI();
                
                // Показываем сообщение об успехе
                document.getElementById('register-form').classList.remove('active');
                document.getElementById('auth-success').style.display = 'block';
                
                // Закрываем модальное окно через 2 секунды
                setTimeout(() => {
                    authModal.style.display = 'none';
                }, 2000);
            } else {
                alert('Будь ласка, заповніть всі поля.');
            }
        });
    }
    
    // Кнопка выхода
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            state.user = null;
            localStorage.removeItem('techstore_user');
            updateAuthUI();
            authModal.style.display = 'none';
        });
    }
    
    // Закрытие модального окна отзыва
    const closeReviewModal = document.querySelector('.close-review-modal');
    if (closeReviewModal) {
        closeReviewModal.addEventListener('click', () => {
            document.getElementById('review-modal').style.display = 'none';
        });
    }
    
    // Звезды рейтинга в форме отзыва
    const stars = document.querySelectorAll('.stars i');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                } else {
                    s.classList.remove('fas');
                    s.classList.add('far');
                }
            });
            
            document.querySelector('.rating-text').textContent = ${rating} зірок;
        });
    });
    
    // Отправка отзыва
    const submitReviewBtn = document.getElementById('submit-review-btn');
    if (submitReviewBtn) {
        submitReviewBtn.addEventListener('click', () => {
            const title = document.getElementById('review-title').value;
            const text = document.getElementById('review-text').value;
            const rating = document.querySelectorAll('.stars i.fas').length;
            
            if (!rating) {
                alert('Будь ласка, оберіть рейтинг.');
                return;
            }
            
            if (!title.trim() || !text.trim()) {
                alert('Будь ласка, заповніть заголовок та текст відгуку.');
                return;
            }
            
            // Добавляем отзыв к товару
            const product = state.currentProductForReview;
            if (product) {
                // В реальном приложении здесь был бы запрос к серверу
                // В демо мы просто показываем сообщение
                alert(`Дякуємо за ваш відгук про "${product.name}"!\n\nОцінка: ${rating} зірок\nЗаголовок: ${title}\n\nЦей відгук збережеться лише в цій сесії браузера.`);
                
                // Закрываем модальное окно
                document.getElementById('review-modal').style.display = 'none';
            }
        });
    }
    
    // Поиск товаров
    const searchInput = document.

нелвикс, [23.12.2025 17:31]
getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Применение фильтров
    const applyFiltersBtn = document.getElementById('apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', renderProducts);
    }
    
    // Сброс фильтров
    const resetFiltersBtn = document.getElementById('reset-filters');
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    // Сортировка товаров
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            sortProducts(this.value);
        });
    }
    
    // Оформление заказа
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (state.cart.length === 0) {
                alert('Ваш кошик порожній. Додайте товари перед оформленням замовлення.');
                return;
            }
            
            // Показываем страницу оформления заказа
            document.querySelector('.products-section').style.display = 'none';
            document.getElementById('checkout-page').style.display = 'block';
            document.getElementById('cart-sidebar').classList.remove('open');
        });
    }
    
    // Кнопка "Вернуться в магазин"
    const backToShopBtn = document.getElementById('back-to-shop');
    if (backToShopBtn) {
        backToShopBtn.addEventListener('click', () => {
            document.getElementById('checkout-page').style.display = 'none';
            document.querySelector('.products-section').style.display = 'block';
        });
    }
    
    // Кнопка "Просмотреть корзину" на странице оформления заказа
    const viewCartAgainBtn = document.getElementById('view-cart-again');
    if (viewCartAgainBtn) {
        viewCartAgainBtn.addEventListener('click', () => {
            document.getElementById('checkout-page').style.display = 'none';
            document.querySelector('.products-section').style.display = 'block';
            document.getElementById('cart-sidebar').classList.add('open');
            renderCartItems();
        });
    }
    
    // Клик вне модальных окон
    window.addEventListener('click', (e) => {
        const authModal = document.getElementById('auth-modal');
        const reviewModal = document.getElementById('review-modal');
        
        if (e.target === authModal) {
            authModal.style.display = 'none';
        }
        
        if (e.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    });
    
    // Навигация по категориям
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Ссылки в футере
    const footerAbout = document.getElementById('footer-about');
    if (footerAbout) {
        footerAbout.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Це демонстраційний проект, створений CherryWebCmp для презентації веб-розробки.');
        });
    }
    
    const footerContact = document.getElementById('footer-contact');
    if (footerContact) {
        footerContact.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Контакти CherryWebCmp:\n\nEmail: contact@cherrywebcmp.com\nТелефон: +380 (XX) XXX-XX-XX\n\nЦе демонстраційна інформація.');
        });
    }
    
    const footerFaq = document.getElementById('footer-faq');

нелвикс, [23.12.2025 17:31]
if (footerFaq) {
        footerFaq.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Часті питання:\n\nQ: Чи можна купити товари на цьому сайті?\nA: Ні, це демонстраційний сайт. Всі функції імітують роботу реального магазину.\n\nQ: Хто створив цей сайт?\nA: Студія веб-розробки CherryWebCmp.');
        });
    }
    
    const footerDemo = document.getElementById('footer-demo');
    if (footerDemo) {
        footerDemo.addEventListener('click', (e) => {
            e.preventDefault();
            // Прокручиваем к разделу с демо-возможностями
            document.querySelector('.checkout-message').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Обновление UI авторизации
function updateAuthUI() {
    const authText = document.getElementById('auth-text');
    const authIcon = document.querySelector('#auth-btn i');
    
    if (state.user) {
        authText.textContent = state.user.name;
        authIcon.classList.remove('far');
        authIcon.classList.add('fas');
    } else {
        authText.textContent = 'Увійти';
        authIcon.classList.remove('fas');
        authIcon.classList.add('far');
    }
}

// Отрисовка товаров в корзине
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    
    if (!cartItemsContainer) return;
    
    // Очищаем контейнер
    cartItemsContainer.innerHTML = '';
    
    if (state.cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Ваш кошик порожній</p>
            </div>
        `;
        cartTotalPrice.textContent = '0 ₴';
        return;
    }
    
    // Рассчитываем общую сумму
    let totalPrice = 0;
    
    // Добавляем каждый товар в корзину
    state.cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.id = item.id;
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <i class="fas fa-${getProductIcon(item.image)}"></i>
            </div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price)} ₴</div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <div class="remove-item">Видалити</div>
                </div>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItem);
        
        // Добавляем обработчики событий для кнопок количества и удаления
        const minusBtn = cartItem.querySelector('.minus');
        const plusBtn = cartItem.querySelector('.plus');
        const removeBtn = cartItem.querySelector('.remove-item');
        
        minusBtn.addEventListener('click', () => updateCartItemQuantity(item.id, -1));
        plusBtn.addEventListener('click', () => updateCartItemQuantity(item.id, 1));
        removeBtn.addEventListener('click', () => removeCartItem(item.id));
    });
    
    // Обновляем общую сумму
    cartTotalPrice.textContent = ${formatPrice(totalPrice)} ₴;
}

// Обновление количества товара в корзине
function updateCartItemQuantity(productId, change) {
    const item = state.cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            // Удаляем товар, если количество стало 0 или меньше
            removeCartItem(productId);
        } else {
            // Сохраняем изменения
            saveToLocalStorage();

нелвикс, [23.12.2025 17:31]
updateHeaderCounters();
            renderCartItems();
        }
    }
}

// Удаление товара из корзины
function removeCartItem(productId) {
    const index = state.cart.findIndex(item => item.id === productId);
    
    if (index !== -1) {
        state.cart.splice(index, 1);
        
        // Сохраняем изменения
        saveToLocalStorage();
        updateHeaderCounters();
        renderCartItems();
    }
}

// Выполнение поиска
function performSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    // Фильтруем товары по запросу
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );
    
    // Показываем результаты
    searchResults.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = <div class="search-result-item">Не знайдено товарів за запитом "${query}"</div>;
    } else {
        filteredProducts.slice(0, 5).forEach(product => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.innerHTML = `
                <strong>${product.name}</strong>
                <div style="font-size: 14px; color: #666; margin-top: 5px;">
                    ${product.category} • ${formatPrice(product.price)} ₴
                </div>
            `;
            
            resultItem.addEventListener('click', () => {
                searchInput.value = '';
                searchResults.style.display = 'none';
                
                // Прокручиваем к товару и подсвечиваем его
                highlightProduct(product.id);
            });
            
            searchResults.appendChild(resultItem);
        });
    }
    
    searchResults.style.display = 'block';
}

// Подсветка товара при поиске
function highlightProduct(productId) {
    const productCard = document.querySelector(`.product-card[data-id="${productId}"]`);
    
    if (productCard) {
        // Прокручиваем к товару
        productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Добавляем класс подсветки
        productCard.style.boxShadow = '0 0 0 3px rgba(33, 150, 243, 0.5)';
        productCard.style.transition = 'box-shadow 0.3s ease';
        
        // Убираем подсветку через 2 секунды
        setTimeout(() => {
            productCard.style.boxShadow = '';
        }, 2000);
    }
}

// Сброс фильтров
function resetFilters() {
    // Сбрасываем все чекбоксы категорий
    document.querySelectorAll('input[name="category"]').forEach(cb => {
        cb.checked = true;
    });
    
    // Сбрасываем все чекбоксы брендов
    document.querySelectorAll('input[name="brand"]').forEach(cb => {
        cb.checked = true;
    });
    
    // Сбрасываем ценовой диапазон
    document.getElementById('price-min').value = 5000;
    document.getElementById('price-max').value = 50000;
    
    // Сбрасываем рейтинг
    document.querySelector('input[name="rating"][value="all"]').checked = true;
    
    // Перерисовываем товары
    renderProducts();
}

// Фильтрация по категории
function filterByCategory(category) {
    // Сначала сбрасываем все фильтры
    resetFilters();
    
    // Затем выбираем только указанную категорию
    const categoryMap = {
        'laptops': 'laptop',
        'phones': 'phone',
        'tablets': 'tablet',
        'audio': 'audio',
        'home-tech': 'home',
        'gadgets': 'gadget'
    };
    
    const targetCategory = categoryMap[category];
    
    if (targetCategory) {
        // Снимаем все галочки с категорий

нелвикс, [23.12.2025 17:31]
document.querySelectorAll('input[name="category"]').forEach(cb => {
            cb.checked = false;
        });
        
        // Ставим галочку только на нужной категории
        const targetCheckbox = document.querySelector(`input[name="category"][value="${targetCategory}"]`);
        if (targetCheckbox) {
            targetCheckbox.checked = true;
        }
        
        // Применяем фильтры
        renderProducts();
        
        // Прокручиваем к товарам
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }
}

// Сортировка товаров
function sortProducts(method) {
    const productsGrid = document.getElementById('products-grid');
    const productCards = Array.from(productsGrid.querySelectorAll('.product-card'));
    
    // Сортируем массив карточек товаров
    productCards.sort((a, b) => {
        const aId = parseInt(a.dataset.id);
        const bId = parseInt(b.dataset.id);
        
        const aProduct = productsData.find(p => p.id === aId);
        const bProduct = productsData.find(p => p.id === bId);
        
        if (!aProduct || !bProduct) return 0;
        
        switch (method) {
            case 'price-low':
                return aProduct.price - bProduct.price;
            case 'price-high':
                return bProduct.price - aProduct.price;
            case 'popular':
                return bProduct.rating - aProduct.rating;
            default:
                return aProduct.id - bProduct.id;
        }
    });
    
    // Очищаем сетку и добавляем отсортированные карточки
    productsGrid.innerHTML = '';
    productCards.forEach(card => {
        productsGrid.appendChild(card);
    });
}

// Анимация появления элементов при скролле
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Наблюдаем за появлением карточек товаров
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Наблюдаем за появлением других элементов
    document.querySelectorAll('.category-card, .hero-content, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Небольшая задержка для лучшего визуального эффекта
        setTimeout(() => {
            observer.observe(el);
        }, 100);
    });
}
