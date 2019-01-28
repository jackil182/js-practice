let sectionArr = [{
    classes: 'fa-mars',
    sectionYear: 1879,
    title: 'Albert Einstein born',
    text: 'Albert Einstein is born in Ulm, Germany, the son of Hermann Einstein, a German Jewish featherbed salesman, and his wife Pauline.',
},
{
    classes:'fa-magnet',
    sectionYear: 1884,
    title: 'Mystery of Magnetism',
    text: "At the age of five, Albert Einstein becomes fascinated by his father's pocket compass, intrigued by invisible forces that cause the needle always to point north. Later in life, Einstein will look back at this moment as the genesis of his interest in science.",
},
{
    classes: 'fa-plane',
    sectionYear: 1894,
    title: 'Move to Italy',
    text: 'Struggling financially, the Einstein family moves from Germany to Italy in search of better work. Albert, aged fifteen, stays behind in Munich to finish his schooling, but soon either quits or is kicked out of his high school and follows his parents to Italy.',
},
{
    classes: 'fa-ban',
    sectionYear: 1895,
    title: 'Boarding School in Aarau',
    text: 'Albert Einstein attempts to get out of his last year of high school by taking an entrance exam to ETH, the Swiss Polytechnic University in Zurich. He fails the test, forcing him to attend one final year of high school in the small town of Aarau, Switzerland, instead.',
},
{
    classes: 'fa-university',
    sectionYear: 1896,
    title: 'Einstein at ETH',
    text: 'Albert Einstein graduates from high school and begins attending ETH, the prestigious Swiss Polytechnic University in Zurich.',
},
{
    classes:'fa-graduation-cap',
    sectionYear: 1900,
    title: 'College Graduation',
    text: 'Albert Einstein graduates from ETH with a degree in physics. He tries to find a teaching job, but is unable to obtain work.',
},
{
    classes:'fa-briefcase',
    sectionYear: 1902,
    title: 'Swiss Patent Office',
    text: 'Unable to find any work as a teacher or academic, Albert Einstein takes a job as a clerk at the Swiss Patent Office.',
},
{
    classes:'fa-files-o',
    sectionYear: 1905,
    title: 'Annus Mirabilis',
    text: 'Over the course of a year that he will later describe as his "Annus Mirabilis" - his miraculous year - Albert Einstein publishes four major theoretical papers in the prestigious German academic journal Annalen Der Physik. The four papers include a groundbreaking new interpretation of the photoelectric effect as well as the first published exploration of the theory of Special Relativity and the first formulation of the famous equation E = mc2',
},
{
    classes:'fa-file-o',
    sectionYear: 1915,
    title: 'General Theory of Relativity',
    text: 'Einstein completes his General Theory of Relativity.',
},
{
    classes:'fa-thumbs-up',
    sectionYear: 1919,
    title: 'Eclipse Proves Theory of Relativity',
    text: "A solar eclipse provides dramatic observable evidence that Einstein's General Theory of Relativity is correct. Einstein suddenly becomes a worldwide celebrity.",
},
{
    classes:'fa-trophy',
    sectionYear: 1921,
    title: 'Nobel Prize',
    text: 'Albert Einstein wins the Nobel Prize in Physics for his work on the photoelectric effect, first published in 1905.',
},
{
    classes:'fa-envelope',
    sectionYear: 1939,
    title: 'Letter to President Roosevelt',
    text: "Fearing that Nazi scientists might win the race to develop the world's first atomic bombs, Albert Einstein writes a letter to President Franklin D. Roosevelt, urging him to launch an American program of nuclear research.",
},
{
    classes:'fa-death',
    sectionYear: 1955,
    title: 'Death of Albert Einstein',
    text: 'Albert Einstein dies of heart failure at the age of 76.',
}
]

const root = document.querySelector('#root');

const header = document.createElement('header');
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.textContent = 'Albert Einstein';
header.append(title);

const main = document.createElement('main');
main.setAttribute('id', 'main');

const firstRow = document.createElement('div');
firstRow.setAttribute('id', 'first-row');

const imgDiv = document.createElement('div');
imgDiv.setAttribute('id', 'img-div');

const figure = document.createElement('figure');
imgDiv.append(figure);

const image = document.createElement('img');
image.setAttribute('id', 'image');
image.setAttribute('src', 'http://jonivainio-kaila.fi/freecodecamp/tribute/assets/img/einstein-mobile.jpg"');
image.setAttribute('alt', 'Profile picture of Albert Einstein.');
const figcaption = document.createElement('figcaption');
figcaption.setAttribute('id', 'img-caption');
figure.append(image, figcaption);

const tributeInfo = document.createElement('div');
tributeInfo.setAttribute('id', 'tribute-info');

firstRow.append(imgDiv, tributeInfo);

const par = document.createElement('p');
par.textContent = ' was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein\'s work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory.';
tributeInfo.append(par);
const strong = document.createElement('strong');
strong.textContent = 'Albert Einstein';
par.prepend(strong);

const quote = document.createElement('div');

const blockquote = document.createElement('blockquote');
blockquote.textContent = 'Anyone who has never made a mistake has never tried anything new';
quote.append(blockquote);

const timeline = document.createElement('div');
timeline.setAttribute('id', 'timeline');

const secondaryTitle = document.createElement('h2');
secondaryTitle.textContent = 'Timeline of Albert Einstein\'s life';
timeline.append(secondaryTitle);


for (el of sectionArr) {
    const section = document.createElement('section');
    const sectionIcon = document.createElement('div');
    sectionIcon.classList.add('fa', el.classes);

    const sectionTitle = document.createElement('h3');
    const sectionYear = document.createElement('div');
    sectionYear.classList.add('year');
    sectionYear.textContent = el.sectionYear;
    sectionTitle.textContent = el.title;

    const sectionPar = document.createElement('p');
    sectionPar.textContent = el.text;

    sectionTitle.prepend(sectionYear);
    section.append(sectionIcon, sectionTitle, sectionPar);
    timeline.append(section);
}

const link = document.createElement('div');
link.setAttribute('id', 'link');

const tributeLink = document.createElement('a');
tributeLink.setAttribute('id', 'tribute-link');
tributeLink.setAttribute('href', 'http://www.shmoop.com/albert-einstein/timeline.html');
tributeLink.setAttribute('target', '_blank');
tributeLink.textContent = 'Full timeline at Shmoop!';

main.append(firstRow, quote, timeline, tributeLink);

const footer = document.createElement('footer');
const footerPar = document.createElement('p');
const footerPre = document.createTextNode('Tribute page project for ');

const footerIcon = document.createElement('i');
footerIcon.classList.add('fa', 'fa-free-code-camp');

const footerPost = document.createTextNode = ' by Joni Vainio-Kaila';

footerPar.append(footerPre, footerIcon, footerPost);
footer.append(footerPar);

root.append(header, main, footer);

console.log(root);
