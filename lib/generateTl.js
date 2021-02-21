const generateTl = (ansObj) => {return `<ul>\n\t<li>${ansObj.tech.trim().split('\t').join('</li>\n\t<li>')}</li>
</ul>


`}

module.exports = generateTl;