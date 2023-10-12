/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AppSettings
// ====================================================

export interface AppSettings_AppSettings {
  __typename: "AppSettings";
  /**
   * Homepage background image
   */
  backgroundImageURL: string;
  /**
   * Background color for the dismissiable banner displayed on the homepage
   */
  bannerBackgroundColor: string | null;
  /**
   * Font color for the text in the dismissiable banner displayed on the homepage
   */
  bannerFontColor: string | null;
  /**
   * German version for the text of a dismissiable banner on the homepage
   */
  bannerTextDe: string | null;
  /**
   * English version for the text of a dismissiable banner on the homepage
   */
  bannerTextEn: string | null;
  id: number;
  /**
   * Preview image that is shared with links
   */
  previewImageURL: string;
}

export interface AppSettings {
  /**
   * fetch data from the table: "AppSettings"
   */
  AppSettings: AppSettings_AppSettings[];
}