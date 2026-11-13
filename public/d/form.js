// Concept D: training registration.
// "Register" buttons pick the training in the form. On submit the form checks the fields, then
// either posts the registration to a form service (settings: registration.endpoint) or, when none
// is set, opens the visitor's email program with the registration ready to send.
(function () {
  var form = document.getElementById('reg-form');
  var cfgEl = document.getElementById('form-config');
  if (!form || !cfgEl) return;
  var cfg = JSON.parse(cfgEl.textContent);
  var S = cfg.strings;
  var result = document.getElementById('reg-result');
  var select = document.getElementById('r-training');
  var submit = document.getElementById('r-submit');
  var submitLabel = submit.textContent;

  // Pick a training from a button or link elsewhere on the page.
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-pick]');
    if (!el) return;
    var value = el.getAttribute('data-pick');
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === value) { select.selectedIndex = i; break; }
    }
    setError(select, 'r-training-err', '');
    if (el.tagName === 'A') e.preventDefault();
    document.getElementById('register').scrollIntoView({ block: 'start' });
    var first = document.getElementById('r-name');
    (first.value ? select : first).focus({ preventScroll: true });
  });

  function setError(input, errId, message) {
    document.getElementById(errId).textContent = message;
    if (message) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  }

  function validate() {
    var f = form.elements, firstBad = null;
    function check(input, errId, ok, message) {
      setError(input, errId, ok ? '' : message);
      if (!ok && !firstBad) firstBad = input;
    }
    check(f.training, 'r-training-err', !!f.training.value, S.errTraining);
    check(f.name, 'r-name-err', f.name.value.trim().length > 0, S.errName);
    check(f.email, 'r-email-err', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim()), S.errEmail);
    check(f.privacy, 'r-privacy-err', f.privacy.checked, S.errPrivacy);
    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  function collect() {
    var f = form.elements;
    return {
      training: f.training.value, name: f.name.value.trim(), email: f.email.value.trim(), phone: f.phone.value.trim(),
      org: f.org.value.trim(), count: f.count.value || '1', billing: f.billing.value.trim(), remarks: f.remarks.value.trim(),
      news: f.news.checked ? S.yes : S.no
    };
  }

  function asText(data) {
    return Object.keys(S.labels)
      .filter(function (k) { return data[k]; })
      .map(function (k) { return S.labels[k] + ': ' + data[k]; })
      .join('\n');
  }

  function el(tag, text, cls) {
    var n = document.createElement(tag);
    if (text) n.textContent = text;
    if (cls) n.className = cls;
    return n;
  }

  function show(nodes) {
    result.textContent = '';
    nodes.forEach(function (n) { result.appendChild(n); });
    result.hidden = false;
    result.focus();
  }

  function mailAddress() {
    var a = el('a', cfg.email, 'link');
    a.href = 'mailto:' + cfg.email;
    return a;
  }

  function showMail(data) {
    var body = asText(data);
    var href = 'mailto:' + cfg.email + '?subject=' + encodeURIComponent(S.subject + ': ' + data.training) + '&body=' + encodeURIComponent(body);
    var text = el('p', S.mailText + ' ');
    text.appendChild(mailAddress());
    text.appendChild(document.createTextNode('.'));
    var open = el('a', S.openMail, 'btn btn-primary btn-small');
    open.href = href;
    var copy = el('button', S.copy, 'btn btn-outline btn-small');
    copy.type = 'button';
    var pre = el('pre', body);
    copy.addEventListener('click', function () {
      function selectText() {
        var range = document.createRange();
        range.selectNodeContents(pre);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(body).then(function () { copy.textContent = S.copied; }, selectText);
      } else selectText();
    });
    var actions = el('div', '', 'actions');
    actions.appendChild(open);
    actions.appendChild(copy);
    show([el('h4', S.mailTitle), text, actions, pre]);
    window.location.href = href;
  }

  function showFail() {
    var text = el('p', S.failText + ' ');
    text.appendChild(mailAddress());
    text.appendChild(document.createTextNode('.'));
    show([el('h4', S.failTitle), text]);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate()) return;
    var data = collect();
    if (!cfg.endpoint) { showMail(data); return; }
    submit.disabled = true;
    submit.textContent = S.sending;
    var payload = { _subject: S.subject + ': ' + data.training, language: cfg.lang };
    Object.keys(data).forEach(function (k) { payload[k] = data[k]; });
    fetch(cfg.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
      .then(function (r) {
        if (!r.ok) throw new Error('status ' + r.status);
        form.reset();
        show([el('h4', S.sentTitle), el('p', S.sentText)]);
      })
      .catch(showFail)
      .then(function () { submit.disabled = false; submit.textContent = submitLabel; });
  });
})();
