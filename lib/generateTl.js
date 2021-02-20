const generateTl = (ansObj) => {return `<ul>
    <li>${ansObj.tech.trim().split('\t').join('</li>\n\t<li>')}</li>
</ul>


`}

module.exports = generateTl;