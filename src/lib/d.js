// Concept D: interface words and the data every page of the concept shares.
import texts from '../../content/texts.json';
import trainings from '../../content/trainings.json';
import dates from '../../content/dates.json';
import projects from '../../content/projects.json';
import news from '../../content/news.json';
import team from '../../content/team.json';
import settings from '../../content/settings.json';

// Fixed interface words; editors change the content, not these.
export const UI = {
  nl: {
    siteTitle: 'Perspectivity · For the love of complexity',
    description: 'Perspectivity faciliteert veranderingen in sociale systemen: dialoogprocessen, narratief onderzoek en trainingen. Schrijf je in voor een training of leg je vraagstuk voor.',
    skip: 'Naar de inhoud', home: 'Perspectivity, naar de startpagina', mainNav: 'Hoofdmenu', langNav: 'Taal',
    menu: { work: 'Wat we doen', projects: 'Projecten en verhalen', training: 'Trainingen', team: 'Wie we zijn', contact: 'Contact' },
    workTitle: 'Projecten en verhalen', themesLabel: 'We werken veel rondom de volgende thema’s', saidLabel: 'Wat anderen zeggen',
    terms: 'Algemene voorwaarden', cancellation: 'Annuleringsvoorwaarden voor trainingen',
    register: 'Inschrijven',
    heroEyebrow: 'Coöperatie van facilitators', ctaTalk: 'Bespreek je vraagstuk', ctaTraining: 'Bekijk de trainingen',
    teamRowAlt: 'Het team van Perspectivity buiten op een rij, vier van hen in handstand',
    agenda: 'Trainingsagenda', allTrainings: 'Alle trainingen', tba: 'Datum volgt', signUp: 'Schrijf je in', signUpTba: 'Meld je aan',
    words: { 'In person': 'Op locatie', Online: 'Online', Hybrid: 'Hybride', News: 'Nieuws', Blog: 'Blog' },
    ctaBarTitle: 'Werk je aan een complex vraagstuk?', ctaBarText: 'We denken graag mee. In een eerste gesprek verkennen we je vraag en wat wij daarin kunnen betekenen.', ctaBarBtn: 'Plan een kennismaking',
    blocksLabel: 'De negen bouwstenen', downloadNav: 'Download de Navigator', downloadNavUrl: 'http://eepurl.com/dM3tRc',
    visitSprockler: 'Naar sprockler.com', visitChallenge: 'Naar de Challenge', external: ' (externe site)',
    readMore: 'Lees meer', moreInfo: 'Meer informatie',
    openTr: 'Open trainingen', inCompany: 'In-company, op maat', request: 'Vraag aan', onRequest: 'In overleg',
    kinds: { training: 'Open training', company: 'In-company training', project: 'Project', News: 'Nieuws', Blog: 'Blog' },
    back: { training: 'Alle trainingen', project: 'Projecten en verhalen', news: 'Projecten en verhalen', person: 'Het hele team' },
    mailPerson: 'Stuur een e-mail', expertise: 'Expertise',
    practical: 'Praktisch', date: 'Datum', published: 'Gepubliceerd', atAGlance: 'In het kort',
    more: { training: 'Andere trainingen', project: 'Meer projecten', news: 'Meer verhalen', person: 'Collega’s' },
    reg: {
      title: 'Schrijf je in', intro: 'Kies een training en vul je gegevens in. We nemen contact met je op om je inschrijving te bevestigen.',
      name: 'Naam', email: 'E-mail', phone: 'Telefoon', org: 'Organisatie', training: 'Training', choose: 'Kies een training',
      count: 'Aantal deelnemers', billing: 'Factuuradres', remarks: 'Opmerkingen of dieetwensen', optional: 'niet verplicht',
      alsoNews: 'Stuur mij ook de nieuwsbrief', privacy: 'Ik ga akkoord met het verwerken van mijn gegevens voor deze inschrijving',
      privacyLink: 'Privacyverklaring', submit: 'Verstuur inschrijving', inCompanyTag: 'in-company',
    },
    form: {
      errName: 'Vul je naam in.', errEmail: 'Vul een geldig e-mailadres in, zoals naam@voorbeeld.nl.', errTraining: 'Kies een training.',
      errPrivacy: 'Vink dit vakje aan om je in te schrijven.',
      subject: 'Inschrijving training', yes: 'ja', no: 'nee',
      labels: { training: 'Training', name: 'Naam', email: 'E-mail', phone: 'Telefoon', org: 'Organisatie', count: 'Aantal deelnemers', billing: 'Factuuradres', remarks: 'Opmerkingen', news: 'Nieuwsbrief' },
      mailTitle: 'Nog één stap: verstuur de e-mail', mailText: 'Je e-mailprogramma opent met je inschrijving. Verstuur die e-mail om je inschrijving af te ronden. Opent er niets? Kopieer dan de tekst hieronder en mail hem naar',
      openMail: 'Open e-mail', copy: 'Kopieer tekst', copied: 'Gekopieerd',
      sending: 'Bezig met versturen…', sentTitle: 'Bedankt, je inschrijving is binnen', sentText: 'We nemen contact met je op om je inschrijving te bevestigen.',
      failTitle: 'Versturen is niet gelukt', failText: 'Probeer het opnieuw, of mail je inschrijving naar',
    },
    contactText: 'Werk je aan een complex vraagstuk, of wil je een training op maat? Bel of mail ons. We denken graag mee.',
    mailUs: 'Mail ons', callUs: 'Bel ons', logoAlt: 'Perspectivity, for the love of complexity', concepts: 'Alle concepten',
  },
  en: {
    siteTitle: 'Perspectivity · For the love of complexity',
    description: 'Perspectivity facilitates social systems change: dialogue processes, narrative research and training. Register for a training or talk to us about your challenge.',
    skip: 'Skip to content', home: 'Perspectivity, to the home page', mainNav: 'Main', langNav: 'Language',
    menu: { work: 'What we do', projects: 'Projects and stories', training: 'Training', team: 'Who we are', contact: 'Contact' },
    workTitle: 'Projects and stories', themesLabel: 'We work a lot on the following themes', saidLabel: 'What others say',
    terms: 'Terms & conditions', cancellation: 'Training cancellation policy',
    register: 'Register',
    heroEyebrow: 'A cooperative of facilitators', ctaTalk: 'Discuss your challenge', ctaTraining: 'See our trainings',
    teamRowAlt: 'The Perspectivity team in a row outdoors, four of them doing a handstand',
    agenda: 'Training calendar', allTrainings: 'All trainings', tba: 'Date to be announced', signUp: 'Register', signUpTba: 'Sign up',
    words: { 'In person': 'In person', Online: 'Online', Hybrid: 'Hybrid', News: 'News', Blog: 'Blog' },
    ctaBarTitle: 'Working on a complex challenge?', ctaBarText: 'We like to think along. In a first conversation we explore your question and how we can help.', ctaBarBtn: 'Plan an introduction',
    blocksLabel: 'The nine building blocks', downloadNav: 'Download the Navigator', downloadNavUrl: 'http://eepurl.com/dM3tRc',
    visitSprockler: 'Visit sprockler.com', visitChallenge: 'Visit the Challenge', external: ' (external site)',
    readMore: 'Read more', moreInfo: 'More information',
    openTr: 'Open trainings', inCompany: 'In-company, tailor-made', request: 'Request', onRequest: 'In consultation',
    kinds: { training: 'Open training', company: 'In-company training', project: 'Project', News: 'News', Blog: 'Blog' },
    back: { training: 'All trainings', project: 'Projects and stories', news: 'Projects and stories', person: 'The whole team' },
    mailPerson: 'Send an email', expertise: 'Expertise',
    practical: 'Practical', date: 'Date', published: 'Published', atAGlance: 'At a glance',
    more: { training: 'Other trainings', project: 'More projects', news: 'More stories', person: 'Colleagues' },
    reg: {
      title: 'Register', intro: 'Choose a training and fill in your details. We will contact you to confirm your registration.',
      name: 'Name', email: 'Email', phone: 'Phone', org: 'Organisation', training: 'Training', choose: 'Choose a training',
      count: 'Number of participants', billing: 'Billing address', remarks: 'Remarks or dietary wishes', optional: 'optional',
      alsoNews: 'Also send me the newsletter', privacy: 'I agree to my details being processed for this registration',
      privacyLink: 'Privacy statement', submit: 'Send registration', inCompanyTag: 'in-company',
    },
    form: {
      errName: 'Fill in your name.', errEmail: 'Fill in a valid email address, such as name@example.org.', errTraining: 'Choose a training.',
      errPrivacy: 'Tick this box to register.',
      subject: 'Training registration', yes: 'yes', no: 'no',
      labels: { training: 'Training', name: 'Name', email: 'Email', phone: 'Phone', org: 'Organisation', count: 'Number of participants', billing: 'Billing address', remarks: 'Remarks', news: 'Newsletter' },
      mailTitle: 'One more step: send the email', mailText: 'Your email program opens with your registration. Send that email to complete your registration. Nothing opened? Copy the text below and mail it to',
      openMail: 'Open email', copy: 'Copy text', copied: 'Copied',
      sending: 'Sending…', sentTitle: 'Thank you, we received your registration', sentText: 'We will contact you to confirm your registration.',
      failTitle: 'Sending did not work', failText: 'Try again, or mail your registration to',
    },
    contactText: 'Working on a complex challenge, or looking for tailor-made training? Call or mail us. We like to think along.',
    mailUs: 'Mail us', callUs: 'Call us', logoAlt: 'Perspectivity, for the love of complexity', concepts: 'All concepts',
  },
};

export const LANGS = ['nl', 'en'];

// Taken over from the current perspectivity.org: themes, quotes and footer links.
export const THEMES = [
  { nl: 'Sociaal domein', en: 'Social welfare' }, { nl: 'Hoger onderwijs', en: 'Higher education' },
  { nl: 'Klimaat & energie', en: 'Climate & energy' }, { nl: 'Ontwikkelingssamenwerking', en: 'International development' },
  { nl: 'Leefomgeving', en: 'Living environment' }, { nl: 'Publiek beleid', en: 'Public policy' },
  { nl: 'Midden-Oosten & Afrika', en: 'Middle East & Africa' }, { nl: 'Nederland', en: 'Netherlands' },
  { nl: 'Leiderschap', en: 'Leadership' }, { nl: 'Jeugd', en: 'Youth' }, { nl: 'Participatie & inclusie', en: 'Citizen participation & inclusion' },
];
export const QUOTES = [
  { text: { nl: '… We werden dat weekend keer op keer uit onze comfortzones gesleept …', en: '… That weekend we were all dragged out of our comfort zones time and time again …' }, name: 'Michael Donnelly', role: 'OasisGame, Municipality of Burrenbridge, Ireland' },
  { text: { nl: '… en bovenal een sfeer van wederzijds vertrouwen te scheppen dat onmisbaar was voor het succes …', en: '… en bovenal een sfeer van wederzijds vertrouwen te scheppen dat onmisbaar was voor het succes …' }, lang: { en: 'nl' }, name: 'Raoul Nolen', role: 'Director Young in Prison' },
  { text: { nl: '… langzamerhand begon de groep zich de relatie tussen het persoonlijke en het systeemniveau te realiseren …', en: '… gradually they began to realize the relation between the personal and systemic levels …' }, name: 'Dr. Mohammed Al-Mottahar', role: 'Vice Minister for Higher Education and Scientific Research, Yemen' },
];
export const LINKS = {
  terms: { nl: 'https://perspectivity.org/wp-content/uploads/2021/03/Algemene_Voorwaarden_NL_Perspectivity.pdf', en: 'https://perspectivity.org/wp-content/uploads/2021/03/Terms-and-Conditions-EN-Perspectivity.pdf' },
  cancellation: { nl: 'https://perspectivity.org/wp-content/uploads/2021/03/Trainingen_annuleringsvoorwaarden_NL_Perspectivity.pdf', en: 'https://perspectivity.org/wp-content/uploads/2021/03/Training_Cancellation_Policy_EN_Perspectivity.pdf' },
  linkedin: 'https://www.linkedin.com/company/1380641/', facebook: 'https://www.facebook.com/perspectivity',
};

// The nine building blocks of the Complexity Navigator, in the order of the original drawing.
export const BLOCKS = [
  ['backbone', 'Backbone'], ['responsive-leadership', 'Responsive leadership'], ['reinforcing-actions', 'Reinforcing actions'],
  ['involvement-of-all', 'Involvement of all'], ['handstand', ''], ['urgency-for-change', 'Urgency for change'],
  ['adaptive-learning', 'Adaptive learning'], ['vital-connections', 'Vital connections'], ['shared-ambitions', 'Shared ambitions'],
];

const shown = (list) => list.filter((x) => x.visible !== false);
const norm = (v) => ((v && v.en) || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function site(lang) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const u = UI[lang];
  const T = (v) => (v && typeof v === 'object' ? v[lang] || v.en || '' : v || '');
  const word = (w) => u.words[w] || w;
  const media = (p) => (!p ? '' : p.startsWith('http') ? p : base + p);
  const home = `${base}/d/${lang}/`;
  const url = {
    training: (slug) => `${home}training/${slug}/`,
    project: (slug) => `${home}projects/${slug}/`,
    news: (slug) => `${home}news/${slug}/`,
  };

  // Trainings with their planned dates. A date belongs to the training that carries the same title.
  const list = shown(trainings);
  const slotOf = (d) => {
    const title = T(d.training);
    const when = T(d.date);
    const match = list.find((x) => norm(x.title) === norm(d.training));
    return { title, when, format: d.format ? word(d.format) : '', value: `${title}, ${when || u.tba}`, href: match && match.slug ? url.training(match.slug) : '' };
  };
  const agenda = shown(dates).map(slotOf);
  const used = new Set();
  const rowOf = (x) => {
    const company = x.kind === 'In-company';
    const mine = company ? [] : shown(dates).filter((d) => norm(d.training) === norm(x.title));
    mine.forEach((d) => used.add(d));
    const title = T(x.title);
    return {
      item: x, slug: x.slug, company, title, summary: T(x.summary), href: x.slug ? url.training(x.slug) : '',
      slots: mine.map(slotOf), value: company ? `${title} (${u.reg.inCompanyTag})` : `${title}, ${u.tba}`,
    };
  };
  const all = list.map(rowOf);
  const loose = shown(dates).filter((d) => !used.has(d)).map((d) => ({ item: null, slug: '', company: false, title: T(d.training), summary: '', href: '', slots: [slotOf(d)], value: '' }));
  const rows = [...loose, ...all.filter((r) => !r.company)];
  const companyRows = all.filter((r) => r.company);
  const options = {
    open: rows.flatMap((r) => (r.slots.length ? r.slots.map((s) => s.value) : [r.value])),
    company: companyRows.map((r) => ({ value: r.value, label: r.title })),
  };
  const firstValue = (r) => (r.slots[0] ? r.slots[0].value : r.value);
  const slotLabel = (s) => [s.when || u.tba, s.format].filter(Boolean).join(' · ');

  const fmt = new Intl.DateTimeFormat(lang === 'nl' ? 'nl-NL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const day = (iso) => (iso ? fmt.format(new Date(`${iso}T00:00:00Z`)) : '');

  const reg = settings.registration || {};
  const mail = reg.email || texts.contact.email;
  const tel = (texts.contact.phone || '').replace(/[^+\d]/g, '');
  const formConfig = { email: mail, endpoint: reg.endpoint || '', lang, strings: u.form };

  return { lang, base, u, T, t: texts, word, media, home, url, agenda, rows, companyRows, trainingRows: all, options, firstValue, slotLabel, day, projects, news, team, reg, mail, tel, formConfig };
}
