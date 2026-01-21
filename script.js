(() => {
  const root = document.documentElement;

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langLabel = document.querySelector("[data-lang-label]");

  const I18N = {
    en: {
      meta_description:
        "A modern, npm-free website based on the paper “Memory Retention Is Not Enough to Master Memory Tasks in Reinforcement Learning” (benchmarks, results, conclusions).",
      og_description:
        "Endless T-Maze and Color-Cubes benchmarks for evaluating memory rewriting in RL, plus key results.",
      skip_to_content: "Skip to content",
      brand_aria: "Memory Rewriting - home",
      brand_title: "Memory Rewriting",
      brand_subtitle: "Retention is not enough",
      nav_aria: "Navigation",
      nav_about: "About",
      nav_benchmarks: "Benchmarks",
      nav_results: "Results",
      nav_conclusion: "Conclusion",
      nav_download: "Download LaTeX",
      theme_aria: "Toggle theme",
      theme: "Theme",
      lang_aria: "Switch language",
      hero_kicker: "Paper / AAMAS 2026",
      hero_lead:
        'In dynamic POMDP settings, it’s not enough to store information - an agent must <span class="em">rewrite</span> memory: forget outdated information and integrate new evidence.',
      cta_abstract: "Read abstract",
      cta_benchmarks: "See benchmarks",
      meta_authors_label: "Authors",
      meta_idea_label: "Key idea",
      hero_img_alt: "Illustration: memory rewriting vs retention",
      hero_figcap:
        "<strong>Memory rewriting vs retention.</strong> A new cue must overwrite the old one; otherwise the agent acts incorrectly.",
      about_title: "About",
      about_desc:
        "The paper isolates and measures an RL agent’s ability to <em>rewrite</em> memory under partial observability - not just retain it.",
      about_problem_title: "Problem",
      about_problem_desc:
        "Most benchmarks test <em>retention</em>, but real environments change - stored cues become stale and must be updated.",
      about_approach_title: "Approach",
      about_approach_desc:
        "Two task families - <strong>Endless T‑Maze</strong> and <strong>Color‑Cubes</strong> - require continual replacement of outdated information.",
      about_observation_title: "Observation",
      about_observation_desc:
        "Architectures with explicit, learnable forgetting (e.g., LSTM) are more robust at rewriting and generalize better.",
      abstract_title: "Abstract",
      abs_p1:
        "Effective decision-making in the real world depends on memory that is both stable and adaptive: environments change over time, and agents must retain relevant information over long horizons while also updating or overwriting outdated content when circumstances shift.",
      abs_p2:
        "Existing Reinforcement Learning (RL) benchmarks and memory-augmented agents focus primarily on retention, leaving the equally critical ability of memory rewriting largely unexplored.",
      abs_p3:
        "To address this gap, we introduce a benchmark that explicitly tests continual memory updating under partial observability, and use it to compare recurrent, transformer-based, and structured memory architectures.",
      abs_p4:
        "Our experiments reveal that classic recurrent models demonstrate greater flexibility and robustness in memory rewriting tasks than modern structured memories, which succeed only under narrow conditions, and transformer-based agents, which often fail beyond trivial retention cases.",
      abs_p5:
        "These findings expose a fundamental limitation of current approaches and emphasize the necessity of memory mechanisms that balance stable retention with adaptive updating.",
      bench_title: "Benchmarks",
      bench_desc:
        "Two task families capture different rewriting regimes: from a minimal diagnostic setup to a stress test with selective updates and uncertainty.",
      bench_tm_desc:
        "An infinite chain of corridors and junctions. At the start of each corridor the agent receives a new binary cue (left/right) that <strong>completely</strong> invalidates the previous one.",
      bench_tm_li1: "<strong>Tests:</strong> pure overwrite (no accumulation).",
      bench_tm_li2: "<strong>Regimes:</strong> Fixed (constant length) and Uniform (random length).",
      bench_tm_li3: "<strong>Reward:</strong> +1 correct, −1 incorrect, small penalty for delay.",
      tm_img_alt: "T‑Maze vs Endless T‑Maze",
      tm_figcap: "<strong>T‑Maze vs Endless T‑Maze.</strong> In Endless, the task is to continually replace the cue.",
      bench_cc_desc:
        "A grid world with N uniquely colored cubes. The agent gets a target color and must find the matching cube while non-target cubes may teleport, and full state updates appear only after events.",
      bench_cc_li1: "<strong>Tests:</strong> selective updates and a consistent internal map.",
      bench_cc_li2: "<strong>Teleportation:</strong> random moves break stale memory.",
      bench_cc_li3: "<strong>Extreme:</strong> colors are hidden on updates → infer mappings.",
      cc_img_alt: "Color‑Cubes environment diagram",
      cc_figcap:
        "<strong>Color‑Cubes.</strong> Initialization, teleportations, and a successful interaction with the target cube.",
      results_title: "Results",
      results_desc: "The paper groups results by four research questions (RQ1–RQ4).",
      rq1_title: "RQ1 - Retention (trivial cases)",
      rq1_p1:
        "In Endless T‑Maze with <code>n = 1</code> (classic T‑Maze), PPO‑LSTM, SHM, and FFM reach 1.00±0.00, while GTrXL behaves like ~50% (MLP-level).",
      rq1_p2:
        "In Trivial Color‑Cubes the picture differs: PPO‑LSTM ≈ 0.52±0.10, while FFM/GTrXL/SHM reach 1.00±0.00.",
      rq2_title: "RQ2 - Rewriting (required)",
      rq2_p1:
        "PPO‑LSTM is most robust when cues continually become obsolete. FFM and SHM succeed in predictable Fixed settings but lose flexibility under Uniform. GTrXL and MLP fail to produce stable results when rewriting is critical.",
      cum_img_alt: "Intermediate progress of SHM and GTrXL in Endless T‑Maze",
      cum_figcap:
        "<strong>Intermediate progress.</strong> Even at low success rates, some models pass a few corridors before failing.",
      nv_img_alt: "Baseline comparison under interpolation and extrapolation in Endless T‑Maze",
      nv_figcap:
        "<strong>Generalization.</strong> Interpolation/extrapolation across corridor counts under fixed regimes.",
      rq3_title: "RQ3 - Generalization",
      rq3_p1:
        "PPO‑LSTM interpolates across all lengths in non-trivial Uniform configurations and shows partially successful extrapolation to longer corridors. FFM generalizes within Fixed (both interpolation and extrapolation), SHM is mostly limited to interpolation; GTrXL sometimes interpolates better than SHM but is unstable.",
      rq4_title: "RQ4 - Prioritization (Color‑Cubes Medium/Extreme)",
      rq4_p1:
        "In settings where the agent must not just “forget” but re-rank and maintain an up-to-date map (especially Extreme), all baselines show 0.00±0.00.",
      tbl_aria: "Color‑Cubes results",
      tbl_env: "Color‑Cubes",
      tbl_trivial: "Trivial",
      tbl_medium: "Medium",
      tbl_extreme: "Extreme",
      ablation_desc:
        "The paper’s hypothesis: PPO‑LSTM succeeds thanks to gating mechanisms, especially an adaptive forget gate (vs. RNN and GRU).",
      ablation_what_title: "What was compared",
      ablation_li1: "<strong>PPO‑RNN:</strong> recurrent layer without gates.",
      ablation_li2: "<strong>PPO‑GRU:</strong> simplified gates (reset/update).",
      ablation_li3: "<strong>PPO‑LSTM:</strong> dedicated gates (forget/input/output).",
      ablation_note:
        "Observation: gates strongly improve rewriting success; LSTM’s advantage over GRU highlights the importance of adaptive forgetting.",
      abl_img_alt: "Ablation: RNN/GRU/LSTM comparison on Endless T‑Maze",
      abl_figcap: "<strong>Ablation.</strong> The role of gates in interpolation/extrapolation.",
      concl_title: "Conclusion (short)",
      concl_desc:
        "Retention is necessary but not sufficient. The core challenge is controlled transformation of memory over time: forgetting, rewriting, and reallocating representational capacity.",
      concl_h_title: "Hierarchy",
      concl_h_desc: "Per the paper: PPO‑LSTM → FFM → SHM → GTrXL → MLP (retention/rewrite/generalization).",
      concl_w_title: "Why",
      concl_w_desc: "Explicit forgetting mechanisms and their adaptivity (forget gates) correlate with rewriting competence.",
      concl_n_title: "Next",
      concl_n_desc: "Treat memory as an active belief state, not a passive history buffer.",
      footer_note: "Built without npm: plain <code>HTML</code> / <code>CSS</code> / <code>JS</code>.",
      footer_src: "Paper source (<code>main.tex</code>)",
      footer_top: "Back to top",
      lightbox_label: "Image viewer",
      close: "Close",
    },
    ru: {
      meta_description:
        "Современный сайт без npm по статье «Memory Retention Is Not Enough to Master Memory Tasks in Reinforcement Learning» (бенчмарки, результаты, выводы).",
      og_description:
        "Бенчмарки Endless T‑Maze и Color‑Cubes для оценки переписывания памяти в RL + ключевые результаты.",
      skip_to_content: "Перейти к содержимому",
      brand_aria: "Memory Rewriting - на главную",
      brand_title: "Memory Rewriting",
      brand_subtitle: "Retention is not enough",
      nav_aria: "Навигация",
      nav_about: "О работе",
      nav_benchmarks: "Бенчмарки",
      nav_results: "Результаты",
      nav_conclusion: "Вывод",
      nav_download: "Скачать LaTeX",
      theme_aria: "Переключить тему",
      theme: "Тема",
      lang_aria: "Сменить язык",
      hero_kicker: "Статья / AAMAS 2026",
      hero_lead:
        'В динамических POMDP задачах важно не только хранить информацию - агент должен <span class="em">переписывать</span> память: забывать устаревшее и интегрировать новое.',
      cta_abstract: "Кратко (abstract)",
      cta_benchmarks: "Смотреть бенчмарки",
      meta_authors_label: "Авторы",
      meta_idea_label: "Ключевая идея",
      hero_img_alt: "Иллюстрация: переписывание памяти vs удержание",
      hero_figcap:
        "<strong>Memory rewriting vs retention.</strong> Новая подсказка должна перезаписать старую; иначе агент действует неверно.",
      about_title: "О работе",
      about_desc:
        "Цель - выделить и измерить способность RL‑агентов <em>переписывать</em> память в условиях частичной наблюдаемости, а не только удерживать её.",
      about_problem_title: "Проблема",
      about_problem_desc:
        "Большинство бенчмарков проверяют <em>retention</em>, но в реальности мир меняется - сохранённые подсказки устаревают и требуют обновления.",
      about_approach_title: "Подход",
      about_approach_desc:
        "Два семейства задач - <strong>Endless T‑Maze</strong> и <strong>Color‑Cubes</strong> - заставляют постоянно заменять устаревшую информацию.",
      about_observation_title: "Наблюдение",
      about_observation_desc:
        "Архитектуры с явным обучаемым забыванием (например, LSTM) устойчивее в переписывании и чаще обобщают.",
      abstract_title: "Аннотация (из статьи)",
      abstract_note: "Текст адаптирован из `main.tex` (LaTeX-разметка убрана).",
      abs_p1:
        "Эффективное принятие решений в реальном мире требует памяти, которая одновременно стабильна и адаптивна: среда меняется со временем, и агент должен сохранять важную информацию на больших горизонтах, а также обновлять или перезаписывать устаревшее содержимое при изменении обстоятельств.",
      abs_p2:
        "Существующие бенчмарки RL и memory‑augmented агенты в основном фокусируются на удержании (retention), оставляя критически важную способность переписывания памяти практически неизученной.",
      abs_p3:
        "Чтобы закрыть этот пробел, мы предлагаем бенчмарк, который явно проверяет постоянное обновление памяти при частичной наблюдаемости, и сравниваем рекуррентные, трансформерные и структурированные архитектуры памяти.",
      abs_p4:
        "Эксперименты показывают, что классические рекуррентные модели более гибкие и устойчивые в задачах переписывания, чем современные структурированные памяти (успешны лишь в узких условиях) и трансформеры (часто проваливаются за пределами тривиального удержания).",
      abs_p5:
        "Эти результаты подчёркивают ограниченность текущих подходов и необходимость механизмов памяти, которые балансируют удержание и адаптивное обновление.",
      bench_title: "Бенчмарки",
      bench_desc:
        "Два семейства задач задают разные режимы переписывания: от минимальной диагностики до стресс‑теста с селективными обновлениями и неопределённостью.",
      bench_tm_desc:
        "Бесконечная цепочка коридоров и развилок. В начале каждого коридора агент получает новый бинарный cue (налево/направо), который <strong>полностью</strong> обнуляет предыдущий.",
      bench_tm_li1: "<strong>Проверяет:</strong> чистое перезаписывание (без накопления).",
      bench_tm_li2: "<strong>Режимы:</strong> Fixed (постоянная длина) и Uniform (случайная длина).",
      bench_tm_li3: "<strong>Награда:</strong> +1 верно, −1 неверно, небольшой штраф за задержку.",
      tm_img_alt: "T‑Maze vs Endless T‑Maze",
      tm_figcap: "<strong>T‑Maze vs Endless T‑Maze.</strong> В Endless нужно постоянно заменять cue на новый.",
      bench_cc_desc:
        "Grid‑world с N кубами уникальных цветов. Агент получает целевой цвет и должен найти соответствующий куб; нецелевые кубы могут телепортироваться, а полные обновления состояния выдаются только по событиям.",
      bench_cc_li1: "<strong>Проверяет:</strong> селективные обновления и согласованную карту в памяти.",
      bench_cc_li2: "<strong>Teleportation:</strong> случайные перемещения ломают устаревшую память.",
      bench_cc_li3: "<strong>Extreme:</strong> при обновлении скрываются цвета → нужно восстанавливать соответствия.",
      cc_img_alt: "Схема среды Color‑Cubes",
      cc_figcap:
        "<strong>Color‑Cubes.</strong> Инициализация, телепортации и успешное взаимодействие с целевым кубом.",
      results_title: "Результаты",
      results_desc: "В статье результаты сгруппированы по четырём вопросам (RQ1–RQ4).",
      rq1_title: "RQ1 - Retention (тривиальные случаи)",
      rq1_p1:
        "В Endless T‑Maze при <code>n = 1</code> (классический T‑Maze) PPO‑LSTM, SHM и FFM достигают 1.00±0.00, тогда как GTrXL ведёт себя как ~50% (уровень MLP).",
      rq1_p2:
        "В Trivial Color‑Cubes картина отличается: PPO‑LSTM ≈ 0.52±0.10, а FFM/GTrXL/SHM достигают 1.00±0.00.",
      rq2_title: "RQ2 - Rewriting (нужно переписывать)",
      rq2_p1:
        "PPO‑LSTM наиболее устойчив, когда подсказки постоянно устаревают. FFM и SHM успешны в предсказуемом Fixed, но теряют гибкость в Uniform. GTrXL и MLP не дают стабильных результатов, когда переписывание критично.",
      cum_img_alt: "Промежуточный прогресс SHM и GTrXL в Endless T‑Maze",
      cum_figcap:
        "<strong>Промежуточный прогресс.</strong> Даже при низком success rate некоторые модели проходят несколько коридоров, но не доходят до цели.",
      nv_img_alt: "Сравнение baseline на интерполяции и экстраполяции в Endless T‑Maze",
      nv_figcap:
        "<strong>Обобщение.</strong> Интерполяция/экстраполяция по числу коридоров в фиксированных режимах.",
      rq3_title: "RQ3 - Generalization",
      rq3_p1:
        "PPO‑LSTM интерполирует во всех длинах для нетривиальных конфигураций Uniform и частично экстраполирует на более длинные коридоры. FFM обобщает в Fixed (и интерполяция, и экстраполяция), SHM в основном ограничен интерполяцией; GTrXL иногда интерполирует лучше SHM, но нестабилен.",
      rq4_title: "RQ4 - Prioritization (Color‑Cubes Medium/Extreme)",
      rq4_p1:
        "В режимах, где нужно не просто забыть, а пересортировать и поддерживать актуальную карту (особенно Extreme), все baselines показывают 0.00±0.00.",
      tbl_aria: "Результаты Color‑Cubes",
      tbl_env: "Color‑Cubes",
      tbl_trivial: "Trivial",
      tbl_medium: "Medium",
      tbl_extreme: "Extreme",
      ablation_desc:
        "Гипотеза статьи: успех PPO‑LSTM связан с gating‑механизмами, особенно с адаптивным forget gate (в сравнении с RNN и GRU).",
      ablation_what_title: "Что сравнивали",
      ablation_li1: "<strong>PPO‑RNN:</strong> рекуррентный слой без gates.",
      ablation_li2: "<strong>PPO‑GRU:</strong> упрощённые gates (reset/update).",
      ablation_li3: "<strong>PPO‑LSTM:</strong> отдельные gates (forget/input/output).",
      ablation_note:
        "Наблюдение: gates заметно повышают успех в переписывании; преимущество LSTM над GRU подчёркивает важность адаптивного забывания.",
      abl_img_alt: "Ablation: сравнение RNN/GRU/LSTM на Endless T‑Maze",
      abl_figcap: "<strong>Ablation.</strong> Роль gates в интерполяции/экстраполяции.",
      concl_title: "Вывод (коротко)",
      concl_desc:
        "Retention необходим, но недостаточен. Ключевая задача - контролируемая трансформация памяти во времени: забывание, переписывание и перераспределение ёмкости.",
      concl_h_title: "Иерархия",
      concl_h_desc: "По статье: PPO‑LSTM → FFM → SHM → GTrXL → MLP (retention/rewrite/generalization).",
      concl_w_title: "Почему",
      concl_w_desc: "Наличие явного забывания и его адаптивность (forget gates) коррелируют с успехом в переписывании.",
      concl_n_title: "Дальше",
      concl_n_desc: "Рассматривать память как активное belief‑state, а не пассивный буфер истории.",
      footer_note: "Сайт без npm: чистые <code>HTML</code> / <code>CSS</code> / <code>JS</code>.",
      footer_src: "Исходник статьи (<code>main.tex</code>)",
      footer_top: "Наверх",
      lightbox_label: "Просмотр изображения",
      close: "Закрыть",
    },
  };

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const value = dict[key];
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("*").forEach((el) => {
      Array.from(el.attributes).forEach((attr) => {
        if (!attr.name.startsWith("data-i18n-attr-")) return;
        const targetAttr = attr.name.replace("data-i18n-attr-", "");
        const key = attr.value;
        const value = dict[key];
        if (typeof value === "string") el.setAttribute(targetAttr, value);
      });
    });
  }

  function getPreferredLang() {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "ru") return stored;
    return "en";
  }

  function setLang(lang) {
    const next = lang === "ru" ? "ru" : "en";
    root.dataset.lang = next;
    root.lang = next;
    localStorage.setItem("lang", next);
    if (langLabel) langLabel.textContent = next.toUpperCase();
    applyTranslations(next);
  }

  function getPreferredTheme() {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  setTheme(getPreferredTheme());
  setLang(getPreferredLang());

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = (root.dataset.theme || "dark") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const next = (root.dataset.lang || "en") === "en" ? "ru" : "en";
      setLang(next);
    });
  }

  // Scrollspy
  const navAnchors = Array.from(document.querySelectorAll(".nav__link[href^=\"#\"]"));
  const sectionIds = navAnchors.map((a) => a.getAttribute("href")).filter(Boolean);
  const sections = sectionIds
    .map((id) => document.querySelector(id))
    .filter((el) => el instanceof HTMLElement);

  if ("IntersectionObserver" in window && navAnchors.length > 0 && sections.length > 0) {
    const byId = new Map(navAnchors.map((a) => [a.getAttribute("href"), a]));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((x) => x.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!visible) return;

        const id = `#${visible.target.id}`;
        byId.forEach((a) => a.removeAttribute("aria-current"));
        const current = byId.get(id);
        if (current) current.setAttribute("aria-current", "page");
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.08, 0.14, 0.2] },
    );

    sections.forEach((s) => observer.observe(s));
  }

  // Lightbox
  const lightboxRoot = document.querySelector("[data-lightbox-root]");
  const lightboxImg = lightboxRoot ? lightboxRoot.querySelector(".lightbox__img") : null;
  const lightboxCaption = lightboxRoot ? lightboxRoot.querySelector(".lightbox__caption") : null;

  function openLightbox({ src, alt, caption }) {
    if (!lightboxRoot || !(lightboxImg instanceof HTMLImageElement) || !(lightboxCaption instanceof HTMLElement)) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightboxCaption.textContent = caption || "";
    lightboxRoot.hidden = false;
    lightboxRoot.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightboxRoot || !(lightboxImg instanceof HTMLImageElement) || !(lightboxCaption instanceof HTMLElement)) return;
    if (lightboxRoot.hidden) return;
    lightboxRoot.hidden = true;
    lightboxRoot.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    lightboxCaption.textContent = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  document.querySelectorAll("[data-lightbox]").forEach((figure) => {
    figure.addEventListener("click", () => {
      const img = figure.querySelector("img");
      const cap = figure.querySelector("figcaption");
      if (!(img instanceof HTMLImageElement)) return;
      openLightbox({
        src: img.currentSrc || img.src,
        alt: img.alt,
        caption: cap ? cap.textContent.trim() : "",
      });
    });
  });

  document.querySelectorAll("[data-lightbox-close]").forEach((el) => el.addEventListener("click", closeLightbox));
})();

