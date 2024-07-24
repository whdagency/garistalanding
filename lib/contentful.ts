import * as contentfulManagement from "contentful-management";
import * as  contentful from 'contentful';

// create a contentful delivery api client
export const contentfulClient = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    environment: process.env.CONTENTFUL_ENVIRONMENT!,
});

// create a contentful management api client
export const contentfulCMA = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN!,
}, {
    type: "plain",
    defaults: {
        spaceId: process.env.CONTENTFUL_SPACE_ID!,
        environmentId: process.env.CONTENTFUL_ENVIRONMENT!,
    }
});