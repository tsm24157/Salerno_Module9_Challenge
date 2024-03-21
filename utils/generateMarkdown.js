function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "none") {
    const licenseLinks = {
      'Apache-2.0': 'https://opensource.org/licenses/Apache-2.0',
      'BSD2': 'https://opensource.org/licenses/BSD-2-Clause',
      'BSD3': 'https://opensource.org/licenses/BSD-3-Clause',
      'MIT': 'https://opensource.org/licenses/MIT',
    };
    return licenseLinks[license];
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `${renderLicenseBadge(license)}  
    Link: ${renderLicenseLink(license)}`;
  }
}


function generateMarkdown(data) {
  data = data.responses;
  return `# ${data.name}:
  Repo created by: ${data.username}  

  ## License information:
  ${renderLicenseSection(data.license)}

  ## Contact:
  You can reach me at: ${data.email}

  ## Description:
  ${data.description}

  ## Installation command:
  ${data.instalationCommand}

  ## Repo information:
  ${data.repoInformation}

  ## Contributions:
  ${data.contributions}

  ## Test commands:
  ${data.testingCommand}

  ## Video Link:
`;
}

module.exports = generateMarkdown;