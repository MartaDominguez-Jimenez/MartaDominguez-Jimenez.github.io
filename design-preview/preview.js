(() => {
  const root = document.querySelector('#preview');
  const designs = ['editorial', 'sidebar', 'modern'];
  const pages = ['home', 'research', 'cv', 'policy'];
  let content;
  let state;

  const escape = (value) => {
    const span = document.createElement('span');
    span.textContent = value;
    return span.innerHTML;
  };

  function readState() {
    const query = new URLSearchParams(location.search);
    return {
      design: designs.includes(query.get('design')) ? query.get('design') : 'editorial',
      page: pages.includes(query.get('page')) ? query.get('page') : 'home',
      full: query.get('abstracts') !== 'expandable'
    };
  }

  function url(overrides = {}, hash = '') {
    const next = { ...state, ...overrides };
    const query = new URLSearchParams({ design: next.design, page: next.page, abstracts: next.full ? 'full' : 'expandable' });
    return `${location.pathname}?${query}${hash}`;
  }

  function internal(label, page, className = '', hash = '') {
    return `<a class="${className}" data-route href="${url({ page }, hash)}">${label}</a>`;
  }

  async function getPage(path) {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return new DOMParser().parseFromString(await response.text(), 'text/html');
  }

  function parsePapers(doc) {
    const articles = [...doc.querySelectorAll('.research-group .paper')];
    if (articles.length) {
      return articles.map(article => ({
        id: article.querySelector('.paper-title').id,
        group: article.closest('.research-group').querySelector('h2').textContent.trim(),
        title: article.querySelector('.paper-title').textContent.trim(),
        authors: article.querySelector('.paper-authors')?.innerHTML || '',
        actions: article.querySelector('.paper-actions')?.innerHTML || '',
        status: article.querySelector('.paper-status')?.textContent.trim() || '',
        availability: article.querySelector('.paper-availability')?.textContent.trim() || '',
        presented: article.querySelector('.research-presented')?.innerHTML || '',
        abstract: article.querySelector('.research-abstract')?.innerHTML || ''
      }));
    }
    let group = '';
    let paper;
    const papers = [];
    for (const element of doc.querySelector('.page-body').children) {
      if (element.matches('h2')) group = element.textContent.trim();
      if (element.matches('.paper-title')) {
        paper = { id: element.id, group, title: element.textContent.trim(), authors: '', actions: '', status: '', availability: '', presented: '', abstract: '' };
        papers.push(paper);
      } else if (paper && element.matches('.paper-metadata')) {
        paper.authors = element.querySelector('.paper-authors')?.innerHTML || '';
        paper.actions = element.querySelector('.paper-actions')?.innerHTML || '';
        paper.status = element.querySelector('.paper-status')?.textContent.trim() || '';
        paper.availability = element.querySelector('.paper-availability')?.textContent.trim() || '';
      } else if (paper && element.matches('.research-presented')) {
        paper.presented = element.innerHTML;
      } else if (paper && element.matches('.research-abstract')) {
        paper.abstract = element.innerHTML;
      }
    }
    return papers;
  }

  function navigation() {
    const labels = { home: 'Home', research: 'Research', cv: 'CV', policy: 'Policy publications' };
    return `<nav class="primary-nav" aria-label="Primary navigation">${pages.map(page =>
      `<a data-route href="${url({ page })}"${page === state.page ? ' aria-current="page"' : ''}>${labels[page]}</a>`
    ).join('')}</nav>`;
  }

  function socials() {
    return `<nav class="socials" aria-label="Social links">${content.social.map(link =>
      `<a href="${escape(link.href)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(link.name)}" title="${escape(link.name)}"><i class="fab fa-${escape(link.icon)}" aria-hidden="true"></i></a>`
    ).join('')}</nav>`;
  }

  function portrait(className = '') {
    return `<img class="portrait ${className}" src="/assets/img/home.jpg" width="2000" height="2000" alt="Portrait of ${escape(content.name)}">`;
  }

  function header() {
    if (state.design === 'sidebar') {
      return `<aside class="profile-rail">
        ${internal(portrait(), 'home', 'rail-photo')}
        ${internal(escape(content.name), 'home', 'site-name')}
        <p class="affiliations">CEMFI<br>Visiting Columbia Business School</p>
        ${navigation()}
        <a class="rail-email" href="mailto:marta.dominguez@cemfi.edu.es">Email <i class="far fa-envelope" aria-hidden="true"></i></a>
        ${socials()}
      </aside>`;
    }
    return `<header class="masthead">${internal(escape(content.name), 'home', 'site-name')}${navigation()}</header>`;
  }

  function events() {
    return `<section class="upcoming" aria-labelledby="upcoming-title"><h2 id="upcoming-title">Upcoming presentations</h2>
      <div class="event-groups">${content.events.map(group => `<section class="event-group">
        <h3>${escape(group.title)}</h3>
        <ul>${group.events.map(event => `<li><time datetime="${escape(event.datetime)}">${escape(event.date)}</time><span>${escape(event.name)}</span></li>`).join('')}</ul>
      </section>`).join('')}</div></section>`;
  }

  function home() {
    const modern = state.design === 'modern';
    const sidebar = state.design === 'sidebar';
    const nameParts = content.name.split(' ');
    const heading = modern ? `${escape(nameParts.shift())}<br>${escape(nameParts.join(' '))}` : (sidebar ? 'About' : '');
    const jmp = content.papers[0];
    return `<section class="intro">
      <div class="intro-copy">
        ${heading ? `<h1>${heading}</h1>` : `<h1 class="sr-only">${escape(content.name)}</h1>`}
        <div class="biography">${content.intro}</div>
        <p class="market-note">${content.market}</p>
        <div class="intro-links">${internal('Research <i class="fas fa-arrow-right" aria-hidden="true"></i>', 'research')}
          <a href="${escape(content.cv)}" target="_blank" rel="noopener noreferrer">CV <span class="file-kind">PDF</span></a>
        </div>
      </div>
      ${sidebar ? '' : `<figure>${portrait()}</figure>`}
    </section>
    ${modern ? `<section class="featured-paper"><span class="section-kicker">Job-market paper</span>
      <h2>${internal(escape(jmp.title), 'research', '', `#${jmp.id}`)}</h2>
      <p class="availability">${escape(jmp.availability)}</p>
      ${internal('Read abstract <i class="fas fa-arrow-right" aria-hidden="true"></i>', 'research', 'feature-link', `#${jmp.id}`)}
    </section>` : ''}
    ${events()}`;
  }

  function paperView(paper) {
    const abstract = `<p class="abstract">${paper.abstract}</p>`;
    return `<article class="paper" id="${paper.id}">
      <h3>${escape(paper.title)}</h3>
      ${paper.authors ? `<p class="byline">${paper.authors}</p>` : ''}
      ${paper.actions || paper.availability || paper.status ? `<div class="paper-tools">
        ${paper.actions ? `<div class="paper-links">${paper.actions}</div>` : ''}
        ${paper.availability ? `<span class="availability">${escape(paper.availability)}</span>` : ''}
        ${paper.status ? `<span class="submission">${escape(paper.status)}</span>` : ''}
      </div>` : ''}
      ${state.full ? abstract : `<details class="abstract-disclosure"><summary>Abstract</summary>${abstract}</details>`}
      ${paper.presented ? `<p class="presented">${paper.presented}</p>` : ''}
    </article>`;
  }

  function research() {
    const groups = [...new Set(content.papers.map(paper => paper.group))];
    return `<header class="page-heading"><h1>Research</h1></header>
      ${groups.map((group, i) => `<section class="research-group" aria-labelledby="group-${i}">
        <h2 class="section-kicker" id="group-${i}">${escape(group)}</h2>
        ${content.papers.filter(paper => paper.group === group).map(paperView).join('')}
      </section>`).join('')}`;
  }

  function cv() {
    return `<header class="page-heading"><h1>Curriculum vitae</h1></header>
      <a class="cv-download" href="${escape(content.cv)}" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf" aria-hidden="true"></i> Download CV <span class="file-kind">PDF</span></a>
      <iframe class="cv-preview" src="${escape(content.cv)}#toolbar=0" title="Curriculum vitae PDF preview"></iframe>`;
  }

  function policy() {
    return `<header class="page-heading"><h1>Pre-PhD policy publications</h1></header><div class="bibliography">${content.policy}</div>`;
  }

  function render() {
    state = readState();
    document.body.dataset.design = state.design;
    document.body.dataset.page = state.page;
    document.querySelectorAll('[data-design]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.design === state.design));
    });
    document.querySelector('#full-abstracts').checked = state.full;
    document.title = `${state.page === 'home' ? content.name : state.page.charAt(0).toUpperCase() + state.page.slice(1)} | ${state.design} preview`;
    root.innerHTML = `<div class="design-shell">${header()}<div class="page-column"><main id="main">${({ home, research, cv, policy })[state.page]()}</main>
      <footer class="design-footer"><span>${escape(content.name)}</span>${socials()}</footer>
    </div></div>`;
    root.setAttribute('aria-busy', 'false');
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      target?.querySelector('details')?.setAttribute('open', '');
      target?.scrollIntoView({ block: 'start' });
    }
  }

  function navigate(destination, preserveScroll = false) {
    const scrollPosition = window.scrollY;
    history.pushState({}, '', destination);
    render();
    if (!location.hash) window.scrollTo(0, preserveScroll ? scrollPosition : 0);
  }

  document.querySelector('.design-choices').addEventListener('click', event => {
    const button = event.target.closest('[data-design]');
    if (button && content) navigate(url({ design: button.dataset.design }));
  });
  document.querySelector('#full-abstracts').addEventListener('change', event => {
    if (content) navigate(url({ full: event.target.checked }), true);
  });
  root.addEventListener('click', event => {
    const link = event.target.closest('a[data-route]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(link.href);
  });
  window.addEventListener('popstate', () => content && render());

  async function start() {
    const [homeDoc, researchDoc, cvDoc, policyDoc] = await Promise.all(['/', '/research/', '/cv/', '/policy-publications/'].map(getPage));
    const social = [...homeDoc.querySelectorAll('.social-link')].map(link => ({
      href: link.getAttribute('href'), name: link.getAttribute('aria-label'),
      icon: [...link.querySelector('i').classList].find(name => name.startsWith('fa-')).slice(3)
    }));
    content = {
      name: homeDoc.querySelector('.site-brand').textContent.trim(),
      intro: homeDoc.querySelector('.home-copy > p').outerHTML,
      market: homeDoc.querySelector('.job-market-note').innerHTML,
      cv: cvDoc.querySelector('.page-body a').getAttribute('href'),
      policy: policyDoc.querySelector('.page-body').innerHTML,
      papers: parsePapers(researchDoc), social,
      events: [...homeDoc.querySelectorAll('.home-upcoming-paper')].map(group => ({
        title: group.querySelector('.home-upcoming-title').textContent,
        events: [...group.querySelectorAll('.home-upcoming-event')].map(event => ({
          date: event.querySelector('time').textContent,
          datetime: event.querySelector('time').getAttribute('datetime'),
          name: event.querySelector('.home-upcoming-name').textContent
        }))
      }))
    };
    if (content.papers.length !== 5 || content.papers.some(paper => !paper.abstract)) throw new Error('The paper content could not be read completely.');
    render();
  }

  start().catch(error => {
    console.error(error);
    root.setAttribute('aria-busy', 'false');
    root.innerHTML = '<p class="loading" role="alert">The preview could not load. <a href="">Reload</a> or return to the <a href="/">current local website</a>.</p>';
  });
})();
