const assert = require("assert").strict;
require('dotenv').config();
const contentfulManagement = require("contentful-management");

const { CONTENFUL_MANAGEMENT_TOKEN, CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env

assert(CONTENFUL_MANAGEMENT_TOKEN)
assert(CONTENTFUL_SPACE_ID)
assert(CONTENTFUL_ENVIRONMENT)

const getContentfulEnvironment = () => {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: CONTENFUL_MANAGEMENT_TOKEN,
  })

  return contentfulClient
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space: any) => space.getEnvironment(CONTENTFUL_ENVIRONMENT))
}

module.exports = getContentfulEnvironment