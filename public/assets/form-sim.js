// Test mode for the forms on concept A: nothing leaves the browser.
// After submitting, the page shows where each piece of information would go on the real site.
(function () {
  const S = JSON.parse(document.getElementById('sim-strings').textContent);
  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function setError(form, name, message) {
    const field = form.elements[name];
    const err = document.getElementById(field.getAttribute('aria-describedby'));
    if (message) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    if (err) err.textContent = message || '';
    return !message;
  }

  function el(tag, text) {
    const n = document.createElement(tag);
    if (text !== undefined) n.textContent = text;
    return n;
  }

  // One destination: a title and either a list of field values or a sentence.
  function destination(title, fields, data, sentence) {
    const li = el('li');
    li.appendChild(el('strong', title));
    if (sentence) li.appendChild(el('span', sentence));
    if (fields) {
      const dl = el('dl');
      fields.forEach((f) => {
        dl.appendChild(el('dt', S.labels[f]));
        dl.appendChild(el('dd', (data.get(f) || '').trim() || S.empty));
      });
      li.appendChild(dl);
    }
    return li;
  }

  function show(panel, items) {
    panel.replaceChildren(el('h4', S.heading), el('p', S.intro));
    const ol = el('ol');
    items.forEach((i) => ol.appendChild(i));
    panel.appendChild(ol);
    panel.hidden = false;
    panel.focus();
  }

  const reg = document.getElementById('reg-form');
  if (reg) {
    reg.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(reg);
      const ok = [
        setError(reg, 'name', (d.get('name') || '').trim() ? '' : S.errName),
        setError(reg, 'email', emailOk((d.get('email') || '').trim()) ? '' : S.errEmail),
        setError(reg, 'training', d.get('training') ? '' : S.errTraining),
        setError(reg, 'privacy', d.get('privacy') ? '' : S.errPrivacy),
      ];
      if (ok.includes(false)) {
        reg.querySelector('[aria-invalid="true"]').focus();
        return;
      }
      show(document.getElementById('reg-sim'), [
        destination(S.mail, ['name', 'email', 'org', 'training', 'billing', 'diet', 'remarks'], d),
        d.get('alsoNews')
          ? destination(S.news, ['name', 'email'], d)
          : destination(S.news, null, d, S.newsSkipped),
      ]);
    });
  }

  const news = document.getElementById('news-form');
  if (news) {
    news.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(news);
      if (!setError(news, 'email', emailOk((d.get('email') || '').trim()) ? '' : S.errEmail)) {
        news.elements.email.focus();
        return;
      }
      show(document.getElementById('news-sim'), [
        destination(S.news, ['name', 'email'], d),
      ]);
    });
  }
})();
