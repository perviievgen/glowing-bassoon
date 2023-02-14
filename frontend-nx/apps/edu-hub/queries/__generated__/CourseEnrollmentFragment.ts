/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CourseEnrollmentStatus_enum } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: CourseEnrollmentFragment
// ====================================================

export interface CourseEnrollmentFragment {
  __typename: "CourseEnrollment";
  id: number;
  /**
   * The ID of the course of this enrollment from the given user
   */
  courseId: number;
  /**
   * The ID of the user that enrolled for the given course
   */
  userId: any;
  /**
   * The last day a user can confirm his/her invitation to the given course
   */
  invitationExpirationDate: any | null;
  /**
   * The text of the user's motivation letter
   */
  motivationLetter: string;
  /**
   * The users current enrollment status to this course
   */
  status: CourseEnrollmentStatus_enum;
  /**
   * URL to the file containing the user's achievement certificate (if he obtained one)
   */
  achievementCertificateURL: string | null;
  /**
   * URL to the file containing the user's attendance certificate (if he obtained one)
   */
  attendanceCertificateURL: string | null;
}
