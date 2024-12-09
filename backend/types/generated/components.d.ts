import type { Schema, Struct } from "@strapi/strapi";

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: "components_blocks_heroes";
  info: {
    displayName: "Hero";
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroimage: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    link: Schema.Attribute.Component<"elements.button", false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: "components_elements_buttons";
  info: {
    displayName: "Button";
  };
  attributes: {
    isexternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<["primary", "secondary", "default"]>;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: "components_seo_metadata";
  info: {
    description: "";
    displayName: "Metadata";
  };
  attributes: {
    metadescription: Schema.Attribute.Text;
    metaimage: Schema.Attribute.Media<"images">;
    metatitle: Schema.Attribute.String;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "blocks.hero": BlocksHero;
      "elements.button": ElementsButton;
      "seo.metadata": SeoMetadata;
    }
  }
}
