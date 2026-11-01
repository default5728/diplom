const searchData = [
        { title: "Головна сторінка", url: "index.html", keywords: "головна початок старт home" },
        { title: "Технічні навички та стек", url: "#skills", keywords: "навички стек html css js php mysql технології" },
        { title: "Інтерактивна карта Rust (REST API)", url: "project_1.html", keywords: "карта раст rust api сервіс проект 1" },
        { title: "Telegram-бот зворотного зв'язку", url: "project_2.html", keywords: "бот телеграм telegram тг зв'язок проект 2" },
        { title: "Калькулятор вартості послуг (JS)", url: "project_3.html", keywords: "калькулятор ціна вартість розрахунок js проект 3" },
        { title: "Веб-сайт портфоліо розробника", url: "project_4.html", keywords: "портфоліо сайт резюме проект 4" },
        { title: "Контакти та зворотний зв'язок", url: "#", keywords: "контакти зворотний зв'язок пошта телефон надіслати" }
    ];

    const searchInput = document.getElementById('query');
    const resultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const val = this.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (val.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(val) || 
            item.keywords.toLowerCase().includes(val)
        );

        if (filtered.length > 0) {
            resultsContainer.style.display = 'block';
            filtered.forEach(item => {
                const link = document.createElement('a');
                link.href = item.url;
                link.textContent = item.title;
                link.style.cssText = "display: block; padding: 7px 5px; color: #3d4449; text-decoration: none; border-bottom: 1px solid #eee; font-size: 0.85em;";
                link.onmouseover = () => link.style.color = '#f56a6a';
                link.onmouseout = () => link.style.color = '#3d4449';
                resultsContainer.appendChild(link);
            });
        } else {
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = '<span style="font-size: 0.8em; color: #999; padding: 5px; display: block;">Нічого не знайдено</span>';
        }
    });