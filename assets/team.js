// Team of the Perspectivity cooperative, as on perspectivity.org/about-us (Nov 2026).
// Photos are loaded from the current site; members without a photo get the puppet.
const U = 'https://perspectivity.org/wp-content/uploads/';
const TEAM = [
  {name:'Lisette Gast', focus:'Deep Democracy, Art of Facilitation'},
  {name:'Diana Gapak-Hughes', focus:'Migration & diaspora, narrative analysis', img:U+'2024/10/Diana-Gapak-Hughes_square-1-480x480.jpg'},
  {name:'María Peiró Torralba', focus:'Creative facilitation, storytelling', img:U+'2024/11/Maria-profile-picture-small-480x480.jpg'},
  {name:'Chiwei Luu', focus:'Social design, graphic recording', img:U+'2022/11/Chiwei-Luu-Perspectivity-vierkant.jpg'},
  {name:'Marjolein Kok', focus:'Narrative research, evaluation & learning', img:U+'2021/02/marjolein-1-480x480.jpg'},
  {name:'Maarten Kraneveld', focus:'Co-creation, systems dynamics', img:U+'2025/04/Maarten-small-e1744720066355-480x270.jpg'},
  {name:'Dagmar Heemskerk-Verbeek', focus:'Deep Democracy, regeneration'},
  {name:'Niels Tabingh Suermondt', focus:'Storytelling, sustainability', img:U+'2026/02/Professional-profile-pic-e1772107031414-480x270.jpeg'},
  {name:'Anna Kanneworff', focus:'Deep Democracy, conflict transformation', img:U+'2026/02/thumbnail_ANNA-DEF_square-480x483.jpg'},
  {name:'Petra de Boer', focus:'Participatory policymaking, Agile Scrum', img:U+'2015/05/Petra-1.jpg'},
  {name:'Rutger Bartelsman', focus:'Leadership development, coaching', img:U+'2025/02/Rutger-480x480.jpg'},
  {name:'Elien Rogaar', focus:'Large scale interventions, co-creation', img:U+'2021/03/elien.jpg'},
  {name:'Ted Jan Post', focus:'Complexity & systems thinking', img:U+'2026/05/tedsquare-480x480.jpg'},
  {name:'Nohad Elhajj', focus:'Process facilitation, capacity building', img:U+'2021/02/IMG_6973-480x480.jpg'},
  {name:'Monique Janmaat', focus:'Large scale interventions, Deep Democracy', img:U+'2018/01/Monique-Janmaat%C2%A9AnnelienNijland7711-scaled.jpg'},
  {name:'Nele Blommestein', focus:'Narrative research, Sprockler', img:U+'2026/04/Nele-480x480.jpg'},
  {name:'Han Rakels', focus:'Large scale interventions, envisioning', img:U+'2018/01/Han-Rakels2-300x300.jpg'},
];
function renderTeam(el, tpl){ el.innerHTML = TEAM.map(tpl).join(''); }
