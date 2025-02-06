import type { Schema, Struct } from '@strapi/strapi';

export interface BrowistaContactBrowistaContactSubject
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_contact_browista_contact_subjects';
  info: {
    displayName: 'Browista Contact Subject';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingCategories
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_categories';
  info: {
    displayName: 'Browista Landing Categories';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingCountries
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_countries';
  info: {
    displayName: 'Browista Landing Countries';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingImages
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_images';
  info: {
    description: '';
    displayName: 'Browista Landing Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BrowistaLandingBrowistaLandingProcedure
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_procedures';
  info: {
    displayName: 'Browista Landing Procedure';
  };
  attributes: {
    steps: Schema.Attribute.Component<
      'browista-landing.browista-landing-procedure-step',
      true
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingProcedureStep
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_procedure_steps';
  info: {
    displayName: 'Browista Landing Procedure Step';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingStart
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_starts';
  info: {
    description: '';
    displayName: 'Browista Landing Start';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platformButtonLabel: Schema.Attribute.String;
    platformButtonLink: Schema.Attribute.String;
    registerButtonLabel: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingVenue
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_venues';
  info: {
    displayName: 'Browista Landing Venue';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    locationAddress: Schema.Attribute.String;
    locationLink: Schema.Attribute.String;
    locationName: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingWelcome
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_welcomes';
  info: {
    description: '';
    displayName: 'Browista Landing Welcome';
  };
  attributes: {
    cards: Schema.Attribute.Component<
      'browista-landing.browista-landing-welcome-card',
      true
    >;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrowistaLandingBrowistaLandingWelcomeCard
  extends Struct.ComponentSchema {
  collectionName: 'components_browista_landing_browista_landing_welcome_cards';
  info: {
    description: '';
    displayName: 'Browista Landing Welcome Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSeoMeta extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo_metas';
  info: {
    description: '';
    displayName: 'SEO Meta';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    jsonLD: Schema.Attribute.JSON;
    keywords: Schema.Attribute.String & Schema.Attribute.Required;
    ogDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    ogTitle: Schema.Attribute.String & Schema.Attribute.Required;
    robots: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'index, follow'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    twitterDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    twitterTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'browista-contact.browista-contact-subject': BrowistaContactBrowistaContactSubject;
      'browista-landing.browista-landing-categories': BrowistaLandingBrowistaLandingCategories;
      'browista-landing.browista-landing-countries': BrowistaLandingBrowistaLandingCountries;
      'browista-landing.browista-landing-images': BrowistaLandingBrowistaLandingImages;
      'browista-landing.browista-landing-procedure': BrowistaLandingBrowistaLandingProcedure;
      'browista-landing.browista-landing-procedure-step': BrowistaLandingBrowistaLandingProcedureStep;
      'browista-landing.browista-landing-start': BrowistaLandingBrowistaLandingStart;
      'browista-landing.browista-landing-venue': BrowistaLandingBrowistaLandingVenue;
      'browista-landing.browista-landing-welcome': BrowistaLandingBrowistaLandingWelcome;
      'browista-landing.browista-landing-welcome-card': BrowistaLandingBrowistaLandingWelcomeCard;
      'shared.seo-meta': SharedSeoMeta;
    }
  }
}
