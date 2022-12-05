/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
        AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
        AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID
    }
};
