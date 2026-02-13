(() => {
  const root = document.documentElement;

  const themeToggle = document.querySelector("[data-theme-toggle]");
  const langToggle = document.querySelector("[data-lang-toggle]");
  const langLabel = document.querySelector("[data-lang-label]");

  const I18N = {
    en: {
      meta_description:
        "A modern, npm-free website based on the paper вЂњMemory Retention Is Not Enough to Master Memory Tasks in Reinforcement LearningвЂќ (benchmarks, results, conclusions).",
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
        'In dynamic POMDP settings, itвЂ™s not enough to store information - an agent must <span class="em">rewrite</span> memory: forget outdated information and integrate new evidence.',
      cta_abstract: "Read abstract",
      cta_benchmarks: "See benchmarks",
      meta_authors_label: "Authors",
      meta_links_label: "Resources",
      meta_idea_label: "Key idea",
      hero_img_alt: "Illustration: memory rewriting vs retention",
      hero_figcap:
        "<strong>Memory rewriting vs retention.</strong> A new cue must overwrite the old one; otherwise the agent acts incorrectly.",
      about_title: "About",
      about_desc:
        "The paper isolates and measures an RL agentвЂ™s ability to <em>rewrite</em> memory under partial observability - not just retain it.",
      about_problem_title: "Problem",
      about_problem_desc:
        "Most benchmarks test <em>retention</em>, but real environments change - stored cues become stale and must be updated.",
      about_approach_title: "Approach",
      about_approach_desc:
        "Two task families - <strong>Endless TвЂ‘Maze</strong> and <strong>ColorвЂ‘Cubes</strong> - require continual replacement of outdated information.",
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
      bench_tm_li3: "<strong>Reward:</strong> +1 correct, в€’1 incorrect, small penalty for delay.",
      tm_img_alt: "TвЂ‘Maze vs Endless TвЂ‘Maze",
      tm_figcap: "<strong>TвЂ‘Maze vs Endless TвЂ‘Maze.</strong> In Endless, the task is to continually replace the cue.",
      bench_cc_desc:
        "A grid world with N uniquely colored cubes. The agent gets a target color and must find the matching cube while non-target cubes may teleport, and full state updates appear only after events.",
      bench_cc_li1: "<strong>Tests:</strong> selective updates and a consistent internal map.",
      bench_cc_li2: "<strong>Teleportation:</strong> random moves break stale memory.",
      bench_cc_li3: "<strong>Extreme:</strong> colors are hidden on updates в†’ infer mappings.",
      cc_img_alt: "ColorвЂ‘Cubes environment diagram",
      cc_figcap:
        "<strong>ColorвЂ‘Cubes.</strong> Initialization, teleportations, and a successful interaction with the target cube.",
      results_title: "Results",
      results_desc: "The paper groups results by four research questions (RQ1вЂ“RQ4).",
      rq1_title: "RQ1 - Retention (trivial cases)",
      rq1_p1:
        "In Endless TвЂ‘Maze with <code>n = 1</code> (classic TвЂ‘Maze), PPOвЂ‘LSTM, SHM, and FFM reach 1.00В±0.00, while GTrXL behaves like ~50% (MLP-level).",
      rq1_p2:
        "In Trivial ColorвЂ‘Cubes the picture differs: PPOвЂ‘LSTM в‰€ 0.52В±0.10, while FFM/GTrXL/SHM reach 1.00В±0.00.",
      rq2_title: "RQ2 - Rewriting (required)",
      rq2_p1:
        "PPOвЂ‘LSTM is most robust when cues continually become obsolete. FFM and SHM succeed in predictable Fixed settings but lose flexibility under Uniform. GTrXL and MLP fail to produce stable results when rewriting is critical.",
      cum_img_alt: "Intermediate progress of SHM and GTrXL in Endless TвЂ‘Maze",
      cum_figcap:
        "<strong>Intermediate progress.</strong> Even at low success rates, some models pass a few corridors before failing.",
      nv_img_alt: "Baseline comparison under interpolation and extrapolation in Endless TвЂ‘Maze",
      nv_figcap:
        "<strong>Generalization.</strong> Interpolation/extrapolation across corridor counts under fixed regimes.",
      rq3_title: "RQ3 - Generalization",
      rq3_p1:
        "PPOвЂ‘LSTM interpolates across all lengths in non-trivial Uniform configurations and shows partially successful extrapolation to longer corridors. FFM generalizes within Fixed (both interpolation and extrapolation), SHM is mostly limited to interpolation; GTrXL sometimes interpolates better than SHM but is unstable.",
      rq4_title: "RQ4 - Prioritization (ColorвЂ‘Cubes Medium/Extreme)",
      rq4_p1:
        "In settings where the agent must not just вЂњforgetвЂќ but re-rank and maintain an up-to-date map (especially Extreme), all baselines show 0.00В±0.00.",
      tbl_aria: "ColorвЂ‘Cubes results",
      tbl_env: "ColorвЂ‘Cubes",
      tbl_trivial: "Trivial",
      tbl_medium: "Medium",
      tbl_extreme: "Extreme",
      ablation_desc:
        "The paperвЂ™s hypothesis: PPOвЂ‘LSTM succeeds thanks to gating mechanisms, especially an adaptive forget gate (vs. RNN and GRU).",
      ablation_what_title: "What was compared",
      ablation_li1: "<strong>PPOвЂ‘RNN:</strong> recurrent layer without gates.",
      ablation_li2: "<strong>PPOвЂ‘GRU:</strong> simplified gates (reset/update).",
      ablation_li3: "<strong>PPOвЂ‘LSTM:</strong> dedicated gates (forget/input/output).",
      ablation_note:
        "Observation: gates strongly improve rewriting success; LSTMвЂ™s advantage over GRU highlights the importance of adaptive forgetting.",
      abl_img_alt: "Ablation: RNN/GRU/LSTM comparison on Endless TвЂ‘Maze",
      abl_figcap: "<strong>Ablation.</strong> The role of gates in interpolation/extrapolation.",
      concl_title: "Conclusion (short)",
      concl_desc:
        "Retention is necessary but not sufficient. The core challenge is controlled transformation of memory over time: forgetting, rewriting, and reallocating representational capacity.",
      concl_h_title: "Hierarchy",
      concl_h_desc: "Per the paper: PPOвЂ‘LSTM в†’ FFM в†’ SHM в†’ GTrXL в†’ MLP (retention/rewrite/generalization).",
      concl_w_title: "Why",
      concl_w_desc: "Explicit forgetting mechanisms and their adaptivity (forget gates) correlate with rewriting competence.",
      concl_n_title: "Next",
      concl_n_desc: "Treat memory as an active belief state, not a passive history buffer.",
      footer_code: "Code",
      footer_paper: "Full paper",
      footer_top: "Back to top",
      lightbox_label: "Image viewer",
      close: "Close",
    },
    ru: {
      meta_description:
        "РЎРѕРІСЂРµРјРµРЅРЅС‹Р№ СЃР°Р№С‚ Р±РµР· npm РїРѕ СЃС‚Р°С‚СЊРµ В«Memory Retention Is Not Enough to Master Memory Tasks in Reinforcement LearningВ» (Р±РµРЅС‡РјР°СЂРєРё, СЂРµР·СѓР»СЊС‚Р°С‚С‹, РІС‹РІРѕРґС‹).",
      og_description:
        "Р‘РµРЅС‡РјР°СЂРєРё Endless TвЂ‘Maze Рё ColorвЂ‘Cubes РґР»СЏ РѕС†РµРЅРєРё РїРµСЂРµРїРёСЃС‹РІР°РЅРёСЏ РїР°РјСЏС‚Рё РІ RL + РєР»СЋС‡РµРІС‹Рµ СЂРµР·СѓР»СЊС‚Р°С‚С‹.",
      skip_to_content: "РџРµСЂРµР№С‚Рё Рє СЃРѕРґРµСЂР¶РёРјРѕРјСѓ",
      brand_aria: "Memory Rewriting - РЅР° РіР»Р°РІРЅСѓСЋ",
      brand_title: "Memory Rewriting",
      brand_subtitle: "Retention is not enough",
      nav_aria: "РќР°РІРёРіР°С†РёСЏ",
      nav_about: "Рћ СЂР°Р±РѕС‚Рµ",
      nav_benchmarks: "Р‘РµРЅС‡РјР°СЂРєРё",
      nav_results: "Р РµР·СѓР»СЊС‚Р°С‚С‹",
      nav_conclusion: "Р’С‹РІРѕРґ",
      nav_download: "РЎРєР°С‡Р°С‚СЊ LaTeX",
      theme_aria: "РџРµСЂРµРєР»СЋС‡РёС‚СЊ С‚РµРјСѓ",
      theme: "РўРµРјР°",
      lang_aria: "РЎРјРµРЅРёС‚СЊ СЏР·С‹Рє",
      hero_kicker: "РЎС‚Р°С‚СЊСЏ / AAMAS 2026",
      hero_lead:
        'Р’ РґРёРЅР°РјРёС‡РµСЃРєРёС… POMDP Р·Р°РґР°С‡Р°С… РІР°Р¶РЅРѕ РЅРµ С‚РѕР»СЊРєРѕ С…СЂР°РЅРёС‚СЊ РёРЅС„РѕСЂРјР°С†РёСЋ - Р°РіРµРЅС‚ РґРѕР»Р¶РµРЅ <span class="em">РїРµСЂРµРїРёСЃС‹РІР°С‚СЊ</span> РїР°РјСЏС‚СЊ: Р·Р°Р±С‹РІР°С‚СЊ СѓСЃС‚Р°СЂРµРІС€РµРµ Рё РёРЅС‚РµРіСЂРёСЂРѕРІР°С‚СЊ РЅРѕРІРѕРµ.',
      cta_abstract: "РљСЂР°С‚РєРѕ (abstract)",
      cta_benchmarks: "РЎРјРѕС‚СЂРµС‚СЊ Р±РµРЅС‡РјР°СЂРєРё",
      meta_authors_label: "РђРІС‚РѕСЂС‹",
      meta_links_label: "Ссылки",
      meta_idea_label: "РљР»СЋС‡РµРІР°СЏ РёРґРµСЏ",
      hero_img_alt: "РР»Р»СЋСЃС‚СЂР°С†РёСЏ: РїРµСЂРµРїРёСЃС‹РІР°РЅРёРµ РїР°РјСЏС‚Рё vs СѓРґРµСЂР¶Р°РЅРёРµ",
      hero_figcap:
        "<strong>Memory rewriting vs retention.</strong> РќРѕРІР°СЏ РїРѕРґСЃРєР°Р·РєР° РґРѕР»Р¶РЅР° РїРµСЂРµР·Р°РїРёСЃР°С‚СЊ СЃС‚Р°СЂСѓСЋ; РёРЅР°С‡Рµ Р°РіРµРЅС‚ РґРµР№СЃС‚РІСѓРµС‚ РЅРµРІРµСЂРЅРѕ.",
      about_title: "Рћ СЂР°Р±РѕС‚Рµ",
      about_desc:
        "Р¦РµР»СЊ - РІС‹РґРµР»РёС‚СЊ Рё РёР·РјРµСЂРёС‚СЊ СЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ RLвЂ‘Р°РіРµРЅС‚РѕРІ <em>РїРµСЂРµРїРёСЃС‹РІР°С‚СЊ</em> РїР°РјСЏС‚СЊ РІ СѓСЃР»РѕРІРёСЏС… С‡Р°СЃС‚РёС‡РЅРѕР№ РЅР°Р±Р»СЋРґР°РµРјРѕСЃС‚Рё, Р° РЅРµ С‚РѕР»СЊРєРѕ СѓРґРµСЂР¶РёРІР°С‚СЊ РµС‘.",
      about_problem_title: "РџСЂРѕР±Р»РµРјР°",
      about_problem_desc:
        "Р‘РѕР»СЊС€РёРЅСЃС‚РІРѕ Р±РµРЅС‡РјР°СЂРєРѕРІ РїСЂРѕРІРµСЂСЏСЋС‚ <em>retention</em>, РЅРѕ РІ СЂРµР°Р»СЊРЅРѕСЃС‚Рё РјРёСЂ РјРµРЅСЏРµС‚СЃСЏ - СЃРѕС…СЂР°РЅС‘РЅРЅС‹Рµ РїРѕРґСЃРєР°Р·РєРё СѓСЃС‚Р°СЂРµРІР°СЋС‚ Рё С‚СЂРµР±СѓСЋС‚ РѕР±РЅРѕРІР»РµРЅРёСЏ.",
      about_approach_title: "РџРѕРґС…РѕРґ",
      about_approach_desc:
        "Р”РІР° СЃРµРјРµР№СЃС‚РІР° Р·Р°РґР°С‡ - <strong>Endless TвЂ‘Maze</strong> Рё <strong>ColorвЂ‘Cubes</strong> - Р·Р°СЃС‚Р°РІР»СЏСЋС‚ РїРѕСЃС‚РѕСЏРЅРЅРѕ Р·Р°РјРµРЅСЏС‚СЊ СѓСЃС‚Р°СЂРµРІС€СѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ.",
      about_observation_title: "РќР°Р±Р»СЋРґРµРЅРёРµ",
      about_observation_desc:
        "РђСЂС…РёС‚РµРєС‚СѓСЂС‹ СЃ СЏРІРЅС‹Рј РѕР±СѓС‡Р°РµРјС‹Рј Р·Р°Р±С‹РІР°РЅРёРµРј (РЅР°РїСЂРёРјРµСЂ, LSTM) СѓСЃС‚РѕР№С‡РёРІРµРµ РІ РїРµСЂРµРїРёСЃС‹РІР°РЅРёРё Рё С‡Р°С‰Рµ РѕР±РѕР±С‰Р°СЋС‚.",
      abstract_title: "РђРЅРЅРѕС‚Р°С†РёСЏ (РёР· СЃС‚Р°С‚СЊРё)",
      abstract_note: "РўРµРєСЃС‚ Р°РґР°РїС‚РёСЂРѕРІР°РЅ РёР· `main.tex` (LaTeX-СЂР°Р·РјРµС‚РєР° СѓР±СЂР°РЅР°).",
      abs_p1:
        "Р­С„С„РµРєС‚РёРІРЅРѕРµ РїСЂРёРЅСЏС‚РёРµ СЂРµС€РµРЅРёР№ РІ СЂРµР°Р»СЊРЅРѕРј РјРёСЂРµ С‚СЂРµР±СѓРµС‚ РїР°РјСЏС‚Рё, РєРѕС‚РѕСЂР°СЏ РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ СЃС‚Р°Р±РёР»СЊРЅР° Рё Р°РґР°РїС‚РёРІРЅР°: СЃСЂРµРґР° РјРµРЅСЏРµС‚СЃСЏ СЃРѕ РІСЂРµРјРµРЅРµРј, Рё Р°РіРµРЅС‚ РґРѕР»Р¶РµРЅ СЃРѕС…СЂР°РЅСЏС‚СЊ РІР°Р¶РЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ РЅР° Р±РѕР»СЊС€РёС… РіРѕСЂРёР·РѕРЅС‚Р°С…, Р° С‚Р°РєР¶Рµ РѕР±РЅРѕРІР»СЏС‚СЊ РёР»Рё РїРµСЂРµР·Р°РїРёСЃС‹РІР°С‚СЊ СѓСЃС‚Р°СЂРµРІС€РµРµ СЃРѕРґРµСЂР¶РёРјРѕРµ РїСЂРё РёР·РјРµРЅРµРЅРёРё РѕР±СЃС‚РѕСЏС‚РµР»СЊСЃС‚РІ.",
      abs_p2:
        "РЎСѓС‰РµСЃС‚РІСѓСЋС‰РёРµ Р±РµРЅС‡РјР°СЂРєРё RL Рё memoryвЂ‘augmented Р°РіРµРЅС‚С‹ РІ РѕСЃРЅРѕРІРЅРѕРј С„РѕРєСѓСЃРёСЂСѓСЋС‚СЃСЏ РЅР° СѓРґРµСЂР¶Р°РЅРёРё (retention), РѕСЃС‚Р°РІР»СЏСЏ РєСЂРёС‚РёС‡РµСЃРєРё РІР°Р¶РЅСѓСЋ СЃРїРѕСЃРѕР±РЅРѕСЃС‚СЊ РїРµСЂРµРїРёСЃС‹РІР°РЅРёСЏ РїР°РјСЏС‚Рё РїСЂР°РєС‚РёС‡РµСЃРєРё РЅРµРёР·СѓС‡РµРЅРЅРѕР№.",
      abs_p3:
        "Р§С‚РѕР±С‹ Р·Р°РєСЂС‹С‚СЊ СЌС‚РѕС‚ РїСЂРѕР±РµР», РјС‹ РїСЂРµРґР»Р°РіР°РµРј Р±РµРЅС‡РјР°СЂРє, РєРѕС‚РѕСЂС‹Р№ СЏРІРЅРѕ РїСЂРѕРІРµСЂСЏРµС‚ РїРѕСЃС‚РѕСЏРЅРЅРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ РїР°РјСЏС‚Рё РїСЂРё С‡Р°СЃС‚РёС‡РЅРѕР№ РЅР°Р±Р»СЋРґР°РµРјРѕСЃС‚Рё, Рё СЃСЂР°РІРЅРёРІР°РµРј СЂРµРєСѓСЂСЂРµРЅС‚РЅС‹Рµ, С‚СЂР°РЅСЃС„РѕСЂРјРµСЂРЅС‹Рµ Рё СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅС‹Рµ Р°СЂС…РёС‚РµРєС‚СѓСЂС‹ РїР°РјСЏС‚Рё.",
      abs_p4:
        "Р­РєСЃРїРµСЂРёРјРµРЅС‚С‹ РїРѕРєР°Р·С‹РІР°СЋС‚, С‡С‚Рѕ РєР»Р°СЃСЃРёС‡РµСЃРєРёРµ СЂРµРєСѓСЂСЂРµРЅС‚РЅС‹Рµ РјРѕРґРµР»Рё Р±РѕР»РµРµ РіРёР±РєРёРµ Рё СѓСЃС‚РѕР№С‡РёРІС‹Рµ РІ Р·Р°РґР°С‡Р°С… РїРµСЂРµРїРёСЃС‹РІР°РЅРёСЏ, С‡РµРј СЃРѕРІСЂРµРјРµРЅРЅС‹Рµ СЃС‚СЂСѓРєС‚СѓСЂРёСЂРѕРІР°РЅРЅС‹Рµ РїР°РјСЏС‚Рё (СѓСЃРїРµС€РЅС‹ Р»РёС€СЊ РІ СѓР·РєРёС… СѓСЃР»РѕРІРёСЏС…) Рё С‚СЂР°РЅСЃС„РѕСЂРјРµСЂС‹ (С‡Р°СЃС‚Рѕ РїСЂРѕРІР°Р»РёРІР°СЋС‚СЃСЏ Р·Р° РїСЂРµРґРµР»Р°РјРё С‚СЂРёРІРёР°Р»СЊРЅРѕРіРѕ СѓРґРµСЂР¶Р°РЅРёСЏ).",
      abs_p5:
        "Р­С‚Рё СЂРµР·СѓР»СЊС‚Р°С‚С‹ РїРѕРґС‡С‘СЂРєРёРІР°СЋС‚ РѕРіСЂР°РЅРёС‡РµРЅРЅРѕСЃС‚СЊ С‚РµРєСѓС‰РёС… РїРѕРґС…РѕРґРѕРІ Рё РЅРµРѕР±С…РѕРґРёРјРѕСЃС‚СЊ РјРµС…Р°РЅРёР·РјРѕРІ РїР°РјСЏС‚Рё, РєРѕС‚РѕСЂС‹Рµ Р±Р°Р»Р°РЅСЃРёСЂСѓСЋС‚ СѓРґРµСЂР¶Р°РЅРёРµ Рё Р°РґР°РїС‚РёРІРЅРѕРµ РѕР±РЅРѕРІР»РµРЅРёРµ.",
      bench_title: "Р‘РµРЅС‡РјР°СЂРєРё",
      bench_desc:
        "Р”РІР° СЃРµРјРµР№СЃС‚РІР° Р·Р°РґР°С‡ Р·Р°РґР°СЋС‚ СЂР°Р·РЅС‹Рµ СЂРµР¶РёРјС‹ РїРµСЂРµРїРёСЃС‹РІР°РЅРёСЏ: РѕС‚ РјРёРЅРёРјР°Р»СЊРЅРѕР№ РґРёР°РіРЅРѕСЃС‚РёРєРё РґРѕ СЃС‚СЂРµСЃСЃвЂ‘С‚РµСЃС‚Р° СЃ СЃРµР»РµРєС‚РёРІРЅС‹РјРё РѕР±РЅРѕРІР»РµРЅРёСЏРјРё Рё РЅРµРѕРїСЂРµРґРµР»С‘РЅРЅРѕСЃС‚СЊСЋ.",
      bench_tm_desc:
        "Р‘РµСЃРєРѕРЅРµС‡РЅР°СЏ С†РµРїРѕС‡РєР° РєРѕСЂРёРґРѕСЂРѕРІ Рё СЂР°Р·РІРёР»РѕРє. Р’ РЅР°С‡Р°Р»Рµ РєР°Р¶РґРѕРіРѕ РєРѕСЂРёРґРѕСЂР° Р°РіРµРЅС‚ РїРѕР»СѓС‡Р°РµС‚ РЅРѕРІС‹Р№ Р±РёРЅР°СЂРЅС‹Р№ cue (РЅР°Р»РµРІРѕ/РЅР°РїСЂР°РІРѕ), РєРѕС‚РѕСЂС‹Р№ <strong>РїРѕР»РЅРѕСЃС‚СЊСЋ</strong> РѕР±РЅСѓР»СЏРµС‚ РїСЂРµРґС‹РґСѓС‰РёР№.",
      bench_tm_li1: "<strong>РџСЂРѕРІРµСЂСЏРµС‚:</strong> С‡РёСЃС‚РѕРµ РїРµСЂРµР·Р°РїРёСЃС‹РІР°РЅРёРµ (Р±РµР· РЅР°РєРѕРїР»РµРЅРёСЏ).",
      bench_tm_li2: "<strong>Р РµР¶РёРјС‹:</strong> Fixed (РїРѕСЃС‚РѕСЏРЅРЅР°СЏ РґР»РёРЅР°) Рё Uniform (СЃР»СѓС‡Р°Р№РЅР°СЏ РґР»РёРЅР°).",
      bench_tm_li3: "<strong>РќР°РіСЂР°РґР°:</strong> +1 РІРµСЂРЅРѕ, в€’1 РЅРµРІРµСЂРЅРѕ, РЅРµР±РѕР»СЊС€РѕР№ С€С‚СЂР°С„ Р·Р° Р·Р°РґРµСЂР¶РєСѓ.",
      tm_img_alt: "TвЂ‘Maze vs Endless TвЂ‘Maze",
      tm_figcap: "<strong>TвЂ‘Maze vs Endless TвЂ‘Maze.</strong> Р’ Endless РЅСѓР¶РЅРѕ РїРѕСЃС‚РѕСЏРЅРЅРѕ Р·Р°РјРµРЅСЏС‚СЊ cue РЅР° РЅРѕРІС‹Р№.",
      bench_cc_desc:
        "GridвЂ‘world СЃ N РєСѓР±Р°РјРё СѓРЅРёРєР°Р»СЊРЅС‹С… С†РІРµС‚РѕРІ. РђРіРµРЅС‚ РїРѕР»СѓС‡Р°РµС‚ С†РµР»РµРІРѕР№ С†РІРµС‚ Рё РґРѕР»Р¶РµРЅ РЅР°Р№С‚Рё СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓСЋС‰РёР№ РєСѓР±; РЅРµС†РµР»РµРІС‹Рµ РєСѓР±С‹ РјРѕРіСѓС‚ С‚РµР»РµРїРѕСЂС‚РёСЂРѕРІР°С‚СЊСЃСЏ, Р° РїРѕР»РЅС‹Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ СЃРѕСЃС‚РѕСЏРЅРёСЏ РІС‹РґР°СЋС‚СЃСЏ С‚РѕР»СЊРєРѕ РїРѕ СЃРѕР±С‹С‚РёСЏРј.",
      bench_cc_li1: "<strong>РџСЂРѕРІРµСЂСЏРµС‚:</strong> СЃРµР»РµРєС‚РёРІРЅС‹Рµ РѕР±РЅРѕРІР»РµРЅРёСЏ Рё СЃРѕРіР»Р°СЃРѕРІР°РЅРЅСѓСЋ РєР°СЂС‚Сѓ РІ РїР°РјСЏС‚Рё.",
      bench_cc_li2: "<strong>Teleportation:</strong> СЃР»СѓС‡Р°Р№РЅС‹Рµ РїРµСЂРµРјРµС‰РµРЅРёСЏ Р»РѕРјР°СЋС‚ СѓСЃС‚Р°СЂРµРІС€СѓСЋ РїР°РјСЏС‚СЊ.",
      bench_cc_li3: "<strong>Extreme:</strong> РїСЂРё РѕР±РЅРѕРІР»РµРЅРёРё СЃРєСЂС‹РІР°СЋС‚СЃСЏ С†РІРµС‚Р° в†’ РЅСѓР¶РЅРѕ РІРѕСЃСЃС‚Р°РЅР°РІР»РёРІР°С‚СЊ СЃРѕРѕС‚РІРµС‚СЃС‚РІРёСЏ.",
      cc_img_alt: "РЎС…РµРјР° СЃСЂРµРґС‹ ColorвЂ‘Cubes",
      cc_figcap:
        "<strong>ColorвЂ‘Cubes.</strong> РРЅРёС†РёР°Р»РёР·Р°С†РёСЏ, С‚РµР»РµРїРѕСЂС‚Р°С†РёРё Рё СѓСЃРїРµС€РЅРѕРµ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ СЃ С†РµР»РµРІС‹Рј РєСѓР±РѕРј.",
      results_title: "Р РµР·СѓР»СЊС‚Р°С‚С‹",
      results_desc: "Р’ СЃС‚Р°С‚СЊРµ СЂРµР·СѓР»СЊС‚Р°С‚С‹ СЃРіСЂСѓРїРїРёСЂРѕРІР°РЅС‹ РїРѕ С‡РµС‚С‹СЂС‘Рј РІРѕРїСЂРѕСЃР°Рј (RQ1вЂ“RQ4).",
      rq1_title: "RQ1 - Retention (С‚СЂРёРІРёР°Р»СЊРЅС‹Рµ СЃР»СѓС‡Р°Рё)",
      rq1_p1:
        "Р’ Endless TвЂ‘Maze РїСЂРё <code>n = 1</code> (РєР»Р°СЃСЃРёС‡РµСЃРєРёР№ TвЂ‘Maze) PPOвЂ‘LSTM, SHM Рё FFM РґРѕСЃС‚РёРіР°СЋС‚ 1.00В±0.00, С‚РѕРіРґР° РєР°Рє GTrXL РІРµРґС‘С‚ СЃРµР±СЏ РєР°Рє ~50% (СѓСЂРѕРІРµРЅСЊ MLP).",
      rq1_p2:
        "Р’ Trivial ColorвЂ‘Cubes РєР°СЂС‚РёРЅР° РѕС‚Р»РёС‡Р°РµС‚СЃСЏ: PPOвЂ‘LSTM в‰€ 0.52В±0.10, Р° FFM/GTrXL/SHM РґРѕСЃС‚РёРіР°СЋС‚ 1.00В±0.00.",
      rq2_title: "RQ2 - Rewriting (РЅСѓР¶РЅРѕ РїРµСЂРµРїРёСЃС‹РІР°С‚СЊ)",
      rq2_p1:
        "PPOвЂ‘LSTM РЅР°РёР±РѕР»РµРµ СѓСЃС‚РѕР№С‡РёРІ, РєРѕРіРґР° РїРѕРґСЃРєР°Р·РєРё РїРѕСЃС‚РѕСЏРЅРЅРѕ СѓСЃС‚Р°СЂРµРІР°СЋС‚. FFM Рё SHM СѓСЃРїРµС€РЅС‹ РІ РїСЂРµРґСЃРєР°Р·СѓРµРјРѕРј Fixed, РЅРѕ С‚РµСЂСЏСЋС‚ РіРёР±РєРѕСЃС‚СЊ РІ Uniform. GTrXL Рё MLP РЅРµ РґР°СЋС‚ СЃС‚Р°Р±РёР»СЊРЅС‹С… СЂРµР·СѓР»СЊС‚Р°С‚РѕРІ, РєРѕРіРґР° РїРµСЂРµРїРёСЃС‹РІР°РЅРёРµ РєСЂРёС‚РёС‡РЅРѕ.",
      cum_img_alt: "РџСЂРѕРјРµР¶СѓС‚РѕС‡РЅС‹Р№ РїСЂРѕРіСЂРµСЃСЃ SHM Рё GTrXL РІ Endless TвЂ‘Maze",
      cum_figcap:
        "<strong>РџСЂРѕРјРµР¶СѓС‚РѕС‡РЅС‹Р№ РїСЂРѕРіСЂРµСЃСЃ.</strong> Р”Р°Р¶Рµ РїСЂРё РЅРёР·РєРѕРј success rate РЅРµРєРѕС‚РѕСЂС‹Рµ РјРѕРґРµР»Рё РїСЂРѕС…РѕРґСЏС‚ РЅРµСЃРєРѕР»СЊРєРѕ РєРѕСЂРёРґРѕСЂРѕРІ, РЅРѕ РЅРµ РґРѕС…РѕРґСЏС‚ РґРѕ С†РµР»Рё.",
      nv_img_alt: "РЎСЂР°РІРЅРµРЅРёРµ baseline РЅР° РёРЅС‚РµСЂРїРѕР»СЏС†РёРё Рё СЌРєСЃС‚СЂР°РїРѕР»СЏС†РёРё РІ Endless TвЂ‘Maze",
      nv_figcap:
        "<strong>РћР±РѕР±С‰РµРЅРёРµ.</strong> РРЅС‚РµСЂРїРѕР»СЏС†РёСЏ/СЌРєСЃС‚СЂР°РїРѕР»СЏС†РёСЏ РїРѕ С‡РёСЃР»Сѓ РєРѕСЂРёРґРѕСЂРѕРІ РІ С„РёРєСЃРёСЂРѕРІР°РЅРЅС‹С… СЂРµР¶РёРјР°С….",
      rq3_title: "RQ3 - Generalization",
      rq3_p1:
        "PPOвЂ‘LSTM РёРЅС‚РµСЂРїРѕР»РёСЂСѓРµС‚ РІРѕ РІСЃРµС… РґР»РёРЅР°С… РґР»СЏ РЅРµС‚СЂРёРІРёР°Р»СЊРЅС‹С… РєРѕРЅС„РёРіСѓСЂР°С†РёР№ Uniform Рё С‡Р°СЃС‚РёС‡РЅРѕ СЌРєСЃС‚СЂР°РїРѕР»РёСЂСѓРµС‚ РЅР° Р±РѕР»РµРµ РґР»РёРЅРЅС‹Рµ РєРѕСЂРёРґРѕСЂС‹. FFM РѕР±РѕР±С‰Р°РµС‚ РІ Fixed (Рё РёРЅС‚РµСЂРїРѕР»СЏС†РёСЏ, Рё СЌРєСЃС‚СЂР°РїРѕР»СЏС†РёСЏ), SHM РІ РѕСЃРЅРѕРІРЅРѕРј РѕРіСЂР°РЅРёС‡РµРЅ РёРЅС‚РµСЂРїРѕР»СЏС†РёРµР№; GTrXL РёРЅРѕРіРґР° РёРЅС‚РµСЂРїРѕР»РёСЂСѓРµС‚ Р»СѓС‡С€Рµ SHM, РЅРѕ РЅРµСЃС‚Р°Р±РёР»РµРЅ.",
      rq4_title: "RQ4 - Prioritization (ColorвЂ‘Cubes Medium/Extreme)",
      rq4_p1:
        "Р’ СЂРµР¶РёРјР°С…, РіРґРµ РЅСѓР¶РЅРѕ РЅРµ РїСЂРѕСЃС‚Рѕ Р·Р°Р±С‹С‚СЊ, Р° РїРµСЂРµСЃРѕСЂС‚РёСЂРѕРІР°С‚СЊ Рё РїРѕРґРґРµСЂР¶РёРІР°С‚СЊ Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РєР°СЂС‚Сѓ (РѕСЃРѕР±РµРЅРЅРѕ Extreme), РІСЃРµ baselines РїРѕРєР°Р·С‹РІР°СЋС‚ 0.00В±0.00.",
      tbl_aria: "Р РµР·СѓР»СЊС‚Р°С‚С‹ ColorвЂ‘Cubes",
      tbl_env: "ColorвЂ‘Cubes",
      tbl_trivial: "Trivial",
      tbl_medium: "Medium",
      tbl_extreme: "Extreme",
      ablation_desc:
        "Р“РёРїРѕС‚РµР·Р° СЃС‚Р°С‚СЊРё: СѓСЃРїРµС… PPOвЂ‘LSTM СЃРІСЏР·Р°РЅ СЃ gatingвЂ‘РјРµС…Р°РЅРёР·РјР°РјРё, РѕСЃРѕР±РµРЅРЅРѕ СЃ Р°РґР°РїС‚РёРІРЅС‹Рј forget gate (РІ СЃСЂР°РІРЅРµРЅРёРё СЃ RNN Рё GRU).",
      ablation_what_title: "Р§С‚Рѕ СЃСЂР°РІРЅРёРІР°Р»Рё",
      ablation_li1: "<strong>PPOвЂ‘RNN:</strong> СЂРµРєСѓСЂСЂРµРЅС‚РЅС‹Р№ СЃР»РѕР№ Р±РµР· gates.",
      ablation_li2: "<strong>PPOвЂ‘GRU:</strong> СѓРїСЂРѕС‰С‘РЅРЅС‹Рµ gates (reset/update).",
      ablation_li3: "<strong>PPOвЂ‘LSTM:</strong> РѕС‚РґРµР»СЊРЅС‹Рµ gates (forget/input/output).",
      ablation_note:
        "РќР°Р±Р»СЋРґРµРЅРёРµ: gates Р·Р°РјРµС‚РЅРѕ РїРѕРІС‹С€Р°СЋС‚ СѓСЃРїРµС… РІ РїРµСЂРµРїРёСЃС‹РІР°РЅРёРё; РїСЂРµРёРјСѓС‰РµСЃС‚РІРѕ LSTM РЅР°Рґ GRU РїРѕРґС‡С‘СЂРєРёРІР°РµС‚ РІР°Р¶РЅРѕСЃС‚СЊ Р°РґР°РїС‚РёРІРЅРѕРіРѕ Р·Р°Р±С‹РІР°РЅРёСЏ.",
      abl_img_alt: "Ablation: СЃСЂР°РІРЅРµРЅРёРµ RNN/GRU/LSTM РЅР° Endless TвЂ‘Maze",
      abl_figcap: "<strong>Ablation.</strong> Р РѕР»СЊ gates РІ РёРЅС‚РµСЂРїРѕР»СЏС†РёРё/СЌРєСЃС‚СЂР°РїРѕР»СЏС†РёРё.",
      concl_title: "Р’С‹РІРѕРґ (РєРѕСЂРѕС‚РєРѕ)",
      concl_desc:
        "Retention РЅРµРѕР±С…РѕРґРёРј, РЅРѕ РЅРµРґРѕСЃС‚Р°С‚РѕС‡РµРЅ. РљР»СЋС‡РµРІР°СЏ Р·Р°РґР°С‡Р° - РєРѕРЅС‚СЂРѕР»РёСЂСѓРµРјР°СЏ С‚СЂР°РЅСЃС„РѕСЂРјР°С†РёСЏ РїР°РјСЏС‚Рё РІРѕ РІСЂРµРјРµРЅРё: Р·Р°Р±С‹РІР°РЅРёРµ, РїРµСЂРµРїРёСЃС‹РІР°РЅРёРµ Рё РїРµСЂРµСЂР°СЃРїСЂРµРґРµР»РµРЅРёРµ С‘РјРєРѕСЃС‚Рё.",
      concl_h_title: "РРµСЂР°СЂС…РёСЏ",
      concl_h_desc: "РџРѕ СЃС‚Р°С‚СЊРµ: PPOвЂ‘LSTM в†’ FFM в†’ SHM в†’ GTrXL в†’ MLP (retention/rewrite/generalization).",
      concl_w_title: "РџРѕС‡РµРјСѓ",
      concl_w_desc: "РќР°Р»РёС‡РёРµ СЏРІРЅРѕРіРѕ Р·Р°Р±С‹РІР°РЅРёСЏ Рё РµРіРѕ Р°РґР°РїС‚РёРІРЅРѕСЃС‚СЊ (forget gates) РєРѕСЂСЂРµР»РёСЂСѓСЋС‚ СЃ СѓСЃРїРµС…РѕРј РІ РїРµСЂРµРїРёСЃС‹РІР°РЅРёРё.",
      concl_n_title: "Р”Р°Р»СЊС€Рµ",
      concl_n_desc: "Р Р°СЃСЃРјР°С‚СЂРёРІР°С‚СЊ РїР°РјСЏС‚СЊ РєР°Рє Р°РєС‚РёРІРЅРѕРµ beliefвЂ‘state, Р° РЅРµ РїР°СЃСЃРёРІРЅС‹Р№ Р±СѓС„РµСЂ РёСЃС‚РѕСЂРёРё.",
      footer_code: "РљРѕРґ",
      footer_paper: "РџРѕР»РЅР°СЏ СЃС‚Р°С‚СЊСЏ",
      footer_top: "РќР°РІРµСЂС…",
      lightbox_label: "РџСЂРѕСЃРјРѕС‚СЂ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ",
      close: "Р—Р°РєСЂС‹С‚СЊ",
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
